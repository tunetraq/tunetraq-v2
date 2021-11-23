import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionTypes";

export const login = () => dispatch => {


    try {

        dispatch({
            type: LOGIN_REQUEST,
        })


        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {

            
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            const profile = {
                name: user.displayName,
                photoURL: user.photoURL,
            }

            sessionStorage.setItem("tq-token" , token),
            sessionStorage.setItem("tq-user" , JSON.stringify(profile)),


            dispatch({
                type: LOGIN_SUCCESS,
                payload: token,
            })

            dispatch({
                type: LOAD_PROFILE,
                payload: profile,
            })
            
        })
        

        
    } catch (error) {
        console.log(error.message);

        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
        })
    }
}


export const logout = () => async dispatch =>{
   await auth.signOut()

   dispatch({
       type: LOG_OUT,
   })

   sessionStorage.removeItem("tq-token")
   sessionStorage.removeItem("tq-user")
}