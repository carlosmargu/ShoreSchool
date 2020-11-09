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
    genero: '',
    idToken: '',
    localId: ''
  },
  userData: {

  },
  loadingAuth: false,
  handlingError: null,
  firebaseInited: false,
}

const login = (state, action) => {
  return updateObject(state, {
      isUserLoggedIn: true,
      userLoggedIn: {
        userName: action.payload.userName,
        idToken: action.payload.idToken,
        localId: action.payload.localId,
      },
      firebaseInited: true,
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
      },
      firebaseInited: true,
  });
}

const saveData = (state, action) => {
  console.log(action.payload)
  return updateObject(state, {
    userData: action.payload.userData,
    firebaseInited: true,
  })
}

const startLoadingAuth = (state, action) => {
  return updateObject(state, {
    loadingAuth: true
  })
}

const endLoadingAuth = (state, action) => {
  return updateObject(state, {
    loadingAuth: false
  })
}

const handleErrorFirebase = (state, action) => {
  return updateObject(state, { handlingError: action.payload.error });
}

const cleanErrors = (state, action) => {
  return updateObject(state, { handlingError: null })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.START_LOADING_AUTH: return startLoadingAuth(state, action)
      case actionTypes.END_LOADING_AUTH: return endLoadingAuth(state, action)
      case actionTypes.LOGIN: return login(state, action);
      case actionTypes.LOG_OUT: return logOut(state, action);
      case actionTypes.SAVE_DATA: return saveData(state, action);
      case actionTypes.ERROR_FIREBASE: return handleErrorFirebase(state, action);
      case actionTypes.CLEAN_ERRORS: return cleanErrors(state, action);
      default: return state;
  }
}

export default reducer;
