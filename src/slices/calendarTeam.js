import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { API_KEY } from '../configs';
import regeneratorRuntime from 'regenerator-runtime';

const fetchCalendarTeam = createAsyncThunk(
  'calendar/fetchCalendarTeam',
  async ({ id, dateFrom, dateTo }) => {
    try {
      const response = await axios.get(routes.getCalendarTeam(id, dateFrom, dateTo), {
        headers: {
          'X-Auth-Token': API_KEY
        }
      });
      const { matches } = await response.data;
      return matches;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  }
);

const calendarTeamSlice = createSlice({
  name: 'calendarTeam',
  initialState: {
    loading: 'idle',
    calendar: null,
    error: null
  },
  extraReducers: {
    [fetchCalendarTeam.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchCalendarTeam.fulfilled]: (state, { payload }) => {
      state.loading = 'idle';
      state.calendar = payload;
    },
    [fetchCalendarTeam.rejected]: (state, { error }) => {
      state.loading = 'idle';
      state.error = error.message;
    }
  }
});

const { actions, reducer } = calendarTeamSlice;

actions.fetchCalendarTeam = fetchCalendarTeam;

export { actions };

export default reducer;
