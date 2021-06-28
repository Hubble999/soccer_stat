import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import regeneratorRuntime from 'regenerator-runtime';

const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
  try {
    const response = await axios.get(routes.getTeams(), {
      headers: {
        'X-Auth-Token': '101874d9e3f24b4b895c986de6b61257'
      }
    });
    const { teams } = await response.data;
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
      const newTeams = state.teams.filter(({shortName}) =>
        shortName.toLowerCase().startsWith(keyword.toLowerCase())
      );
      state.teams = newTeams;
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
