export const LOCAL_ITEMS = 'LOCAL_ITEMS';

export const UPDATE_RECENT_ITEMS = 'UPDATE_RECENT_ITEMS';
export const RESET_RECENT_ITEMS = 'RESET_RECENT_ITEMS';

export const resetRecentItems = () => {
  return {
    type: RESET_RECENT_ITEMS,
  };
};

export const updateRecentItems = (payload) => {
  return {
    type: UPDATE_RECENT_ITEMS,
    payload,
  };
};
