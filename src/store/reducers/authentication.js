import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  isUserLoggedIn: false,
  userLoggedIn: {
    email: '',
    userName: '',
    imageUrl: '',
    pdf: '',
    grado: '',
    idToken: '',
    localId: ''
  },
  userData: {

  },
  loadingAuth: false,
  handlingError: null
}

const login = (state, action) => {
  return updateObject(state, {
      isUserLoggedIn: true,
      userLoggedIn: {
        userName: action.payload.userName,
        idToken: action.payload.idToken,
        localId: action.payload.localId,
      }
  });
}

const logOut = (state, action) => {
  console.log('logout')
  return updateObject(state, {
      isUserLoggedIn: false,
      userLoggedIn: {
        userName: '',
        idToken: '',
        localId: '',
      }
  });
}

const saveData = (state, action) => {
  console.log(action.payload)
  return updateObject(state, {
    userData: action.payload.userData
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.LOGIN: return login(state, action);
      case actionTypes.LOG_OUT: return logOut(state, action);
      case actionTypes.SAVE_DATA: return saveData(state, action);
      default: return state;
  }
}

export default reducer;
