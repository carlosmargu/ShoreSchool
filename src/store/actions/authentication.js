import * as actionTypes from './actionTypes';

import firebase from '../../instances/firebase';

const auth = firebase.auth();
const db = firebase.database();


const startAuthLoading = () => {
  return {
      type: actionTypes.START_LOADING_AUTH
  }
}

const endAuthLoading = () => {
  return {
      type: actionTypes.END_LOADING_AUTH
  }
}

const saveSession = (userName, token, localId) => {
  return {
      type: actionTypes.LOGIN,
      payload: {
          userName: userName,
          idToken: token,
          localId: localId,
      }
  };
};

const saveData = (userData) => {
  return {
    type: actionTypes.SAVE_DATA,
    payload: {
      userData: userData ? userData : {}
    }
  }
}

const errorEmailFirebase = (error) => {
    return {
        type: actionTypes.ERROR_FIREBASE,
        payload: {
            error
        }
    };
}

export const cleanErrors = () => {
  return {
      type: actionTypes.CLEAN_ERRORS,
      payload: {}
  }
}


export const persistAuthentication = () => {
  return dispatch => {
      let userSession = localStorage.getItem('userSession');
      let userData = localStorage.getItem('userData')
      if(!userSession || !userData) {
          dispatch(logOut());
      } else {

          userSession = JSON.parse(userSession);
          userData = JSON.parse(userData);
          dispatch(saveSession(userSession.userEmail, userSession.token, userSession.localId));
          dispatch(saveData(userData));
      }
  }
}

/*
const saveSignUp = (userName, token) => {
  return {
      type: actionTypes.SIGN_UP,
      payload: {
          userName: userName,
          idToken: token,
      }
  };
};
*/
export const logIn = (email, password, onSuccessCallback) => {
  return dispatch => {
      dispatch(startAuthLoading())
      auth.signInWithEmailAndPassword(email, password).then(credential=>{
        let userEmail = credential.user.email; 
        credential.user.getIdToken().then(token=>{
          let localId = credential.user.uid
          let userSession = {
            token,
            userEmail,
            localId
          };
          console.log({userSession})
          db.ref(`users/${localId}`).once('value').then(snapshot=>{
            localStorage.setItem('userData',JSON.stringify(snapshot.val()));
            localStorage.setItem('userSession', JSON.stringify(userSession));
            dispatch(saveSession(userEmail, token, localId));
            dispatch(saveData(snapshot.val()));
            dispatch(endAuthLoading());
    
            if (onSuccessCallback) {
                onSuccessCallback();
            }
          }).catch(error => {
            console.log({error});
            dispatch(endAuthLoading());
            dispatch()
          })
        });
        
        
      }).catch(error => {
        console.log({error});
        dispatch(errorEmailFirebase(error.code));
        dispatch(endAuthLoading());
      })
          
  }
};
/*
export const signUp = (authData, onSuccessCallback) => {
  return dispatch => {
      dispatch(startAuthLoading());
      axios.post('/accounts:signUp?key='+API_KEY, authData)
          .then(response => {
            const userEmail = authData.email;
            const token = response.data.idToken;
            const localId = response.data.localId;
            let userSession = {
                token,
                userEmail,
                localId
            };

            userSession = JSON.stringify(userSession);

            console.log(response);

            localStorage.setItem('userSession', userSession);

            dispatch(saveSignUp(userEmail, token, localId));
            dispatch(endAuthLoading());

            if (onSuccessCallback) {
                onSuccessCallback();
            }
        })
        .catch(error => {
            console.log({error});
            dispatch(errorEmailFirebase(error.response.data.error.message));
            dispatch(endAuthLoading());
        })
  }
};
*/

export const logOut = () => {
  localStorage.removeItem('userSession')
  localStorage.removeItem('userData')
  return {
      type: actionTypes.LOG_OUT
  };
};
