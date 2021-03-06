import produce from 'immer';

import * as UIActions from './actionTypes';

const initialState = {
  isLoading: false,
};

export default produce((draft, action) => {
  switch (action.type) {
    case UIActions.SET_LOADING:
      draft.UI.isLoading = action.setLoading;
  }
}, initialState);
