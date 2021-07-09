import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        setTimeout(() => {
            dispatch(login(123, "Raphael R"))
        }, 3500);
    }
}

export const startLoginWithGoogle = () => {

    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const login = (uid, displayName) => ({

    type: types.login,
    payload: {
        uid,
        displayName
    }
})