import { createSlice } from '@reduxjs/toolkit';
import { notifier } from '../core/notification/notification.service';
import  types  from '../core/notification/notification.type';

const slice = createSlice({
  name: 'notify',
  initialState: {
    type: 'info',
    message: '',
    delay: 10,
  },
  reducers: {
    success(state, action: any) {
      const actions = action.payload;
      notifier(
        types.SUCCESS,
        actions.message,
        action.delay
      );
      state.type = types.SUCCESS;
      state.message = actions.message;
      state.delay = action.delay;
    },
    info(state, action: any) {
      const actions = action.payload;
      notifier(
        types.INFO,
        actions.message,
        action.delay
      );
      state.type = types.INFO;
      state.message = actions.message;
      state.delay = action.delay;
    },
    warning(state, action: any) {
      const actions = action.payload;
      notifier(
        types.WARNING,
        actions.message,
        action.delay
      );
      state.type = types.WARNING;
      state.message = actions.message;
      state.delay = action.delay;
    },
    error(state, action: any) {
      const actions = action.payload;
      notifier(
        types.ERROR,
        actions.message,
        action.delay
      );
      state.type = types.ERROR;
      state.message = actions.message;
      state.delay = action.delay;
    },
  },
});

export const notificationActions = slice.actions;

export default slice.reducer;
