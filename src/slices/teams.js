import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { API_KEY } from '../configs';
import regeneratorRuntime from 'regenerator-runtime';

const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
  try {
    const response = await axios.get(routes.getTeams(), {
      headers: {
        'X-Auth-Token': API_KEY
      }
    });
    const { teams } = await response.data;
    console.log(teams);
    return teams;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
});

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    loading: 'idle',
    teams: null,
    error: null
  },
  reducers: {
    searchTeam(state, { payload }) {
      const { keyword } = payload;
      const searchedTeams = state.teams.filter(({ shortName }) =>
        shortName.toLowerCase().startsWith(keyword.toLowerCase())
      );
      state.teams = searchedTeams;
    }
  },
  extraReducers: {
    [fetchTeams.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchTeams.fulfilled]: (state, { payload }) => {
      state.loading = 'idle';
      state.teams = payload;
    },
    [fetchTeams.rejected]: (state, { error }) => {
      state.loading = 'idle';
      state.error = error.message;
    }
  }
});

const { actions, reducer } = teamsSlice;

actions.fetchTeams = fetchTeams;

export { actions };

export default reducer;
