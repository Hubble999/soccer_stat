import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import { API_KEY } from '../configs';
import regeneratorRuntime from 'regenerator-runtime';

const fetchCalendarTournament = createAsyncThunk(
  'calendar/fetchCalendarTournament',
  async ({ id, dateFrom, dateTo }) => {
    try {
      const response = await axios.get(routes.getCalendarTournament(id, dateFrom, dateTo), {
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

const calendarTournamentSlice = createSlice({
  name: 'calendarTournament',
  initialState: {
    loading: 'idle',
    calendar: null,
    error: null
  },
  extraReducers: {
    [fetchCalendarTournament.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchCalendarTournament.fulfilled]: (state, { payload }) => {
      state.loading = 'idle';
      state.calendar = payload;
    },
    [fetchCalendarTournament.rejected]: (state, { error }) => {
      state.loading = 'idle';
      state.error = error.message;
    }
  }
});

const { actions, reducer } = calendarTournamentSlice;

actions.fetchCalendarTournament = fetchCalendarTournament;

export { actions };

export default reducer;
