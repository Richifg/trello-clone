import {
  ADD_LIST,
  ADD_CARD,
  CREATE_BOARD,
  UPDATE_COLOR,
} from './actions';

const initialState = {
  boards: {
    temporal: {
      color: 'blue',
      lists: {
        Monday: ['Tarea 1', 'Tarea 2'],
        Tuesday: ['Just one card'],
        'I have no cards :(': [],
      },
    },
  },
  color: 'blue',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD: {
      const { board, list, newCard } = action.payload;
      const updatedList = state.boards[board].lists[list].slice();
      updatedList.push(newCard);
      return Object.assign({}, state, {
        boards: Object.assign({}, state.boards, {
          [board]: Object.assign({}, state.boards[board], {
            lists: Object.assign({}, state.boards[board].lists, {
              [list]: updatedList,
            }),
          }),
        }),
      });
    }
    case ADD_LIST: {
      const { board, newList } = action.payload;
      const updatedBoard = Object.assign({}, state.boards[board], {
        lists: Object.assign({}, state.boards[board].lists, { [newList]: [] }),
      });
      return Object.assign({}, state, {
        boards: Object.assign({}, state.boards, { [board]: updatedBoard }),
      });
    }
    case CREATE_BOARD: {
      const { name, color } = action.payload;
      const newBoard = { [name]: { color, lists: {} } };
      return Object.assign({}, state, { boards: Object.assign({}, state.boards, newBoard) });
    }
    case UPDATE_COLOR: {
      return Object.assign({}, state, { color: action.payload });
    }
    default: return state;
  }
};

export default rootReducer;
