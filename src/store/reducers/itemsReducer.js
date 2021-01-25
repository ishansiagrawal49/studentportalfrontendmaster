import { itemCategories } from '../../data/items';
import { LOCAL_ITEMS, RESET_RECENT_ITEMS, UPDATE_RECENT_ITEMS } from '../actions/itemsAction';

const localItems = JSON.parse(localStorage.getItem(LOCAL_ITEMS)) || {};

const initialState = {
  itemCategories,
  recent: localItems,
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_RECENT_ITEMS: {
      localStorage.removeItem(LOCAL_ITEMS);
      return { ...state, recent: {} };
    }
    case UPDATE_RECENT_ITEMS: {
      localStorage.setItem(LOCAL_ITEMS, JSON.stringify(action.payload));
      return { ...state, recent: action.payload };
    }
    default:
      return state;
  }
};
