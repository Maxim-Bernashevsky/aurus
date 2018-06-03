import createHistory from 'history/createHashHistory';
export const _history = createHistory();
export const { pathname } = _history.location;
