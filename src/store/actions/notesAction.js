export const LOCAL_NOTES = 'LOCAL_NOTES';

export const UPDATE_RECENT_NOTES = 'UPDATE_RECENT_NOTES';
export const RESET_RECENT_NOTES = 'RESET_RECENT_NOTES';

export const resetRecentNotes = () => {
  return {
    type: RESET_RECENT_NOTES,
  };
};

export const updateRecentNotes = (payload) => {
  return {
    type: UPDATE_RECENT_NOTES,
    payload,
  };
};
