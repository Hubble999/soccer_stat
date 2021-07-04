import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { API_KEY } from '../configs';
import regeneratorRuntime from 'regenerator-runtime';

const fetchTournaments = createAsyncThunk('tournaments/fetchTeams', async () => {
  try {
    const response = await axios.get(routes.getTournaments(), {
      headers: {
        'X-Auth-Token': API_KEY
      }
    });
    const { competitions } = await response.data;
    return competitions;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
});

const tournamentsSlice = createSlice({
  name: 'teams',
  initialState: {
    loading: 'idle',
    tournaments: null,
    error: null
  },
  reducers: {
    searchTournaments(state, { payload }) {
      const { keyword } = payload;
      const searchedTournaments = state.tournaments.filter(({ name }) =>
        name.toLowerCase().startsWith(keyword.toLowerCase())
      );
      state.tournaments = searchedTournaments;
    }
  },
  extraReducers: {
    [fetchTournaments.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchTournaments.fulfilled]: (state, { payload }) => {
      state.loading = 'idle';
      state.tournaments = payload;
    },
    [fetchTournaments.rejected]: (state, { error }) => {
      state.loading = 'idle';
      state.error = error.message;
    }
  }
});

const { actions, reducer } = tournamentsSlice;

actions.fetchTournaments = fetchTournaments;

export { actions };

export default reducer;
