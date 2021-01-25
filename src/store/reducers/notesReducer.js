import { branchNames, branchCodes, semesters, subjects } from '../../data/notes';
import { LOCAL_NOTES, RESET_RECENT_NOTES, UPDATE_RECENT_NOTES } from '../actions/notesAction';

const localNotes = JSON.parse(localStorage.getItem(LOCAL_NOTES)) || {};

const initialState = {
  branchNames,
  branchCodes,
  semesters,
  subjects,
  recent: localNotes,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_RECENT_NOTES: {
      localStorage.removeItem(LOCAL_NOTES);
      return { ...state, recent: {} };
    }
    case UPDATE_RECENT_NOTES: {
      localStorage.setItem(LOCAL_NOTES, JSON.stringify(action.payload));
      return { ...state, recent: action.payload };
    }
    default:
      return state;
  }
};
