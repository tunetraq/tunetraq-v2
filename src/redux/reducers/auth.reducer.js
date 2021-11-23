import {LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT} from "../actionTypes"

const initialState = {
    accessToken: typeof window !== "undefined" && sessionStorage.getItem("tq-token") ? sessionStorage.getItem("tq-token") : null,
    user: typeof window !== "undefined" && sessionStorage.getItem("tq-user") ? JSON.parse(sessionStorage.getItem("tq-user")) : null,
    loading: false,
}



export const authReducer = (prevState = initialState, action) => {

    const {type, payload} = action

        switch (type) {
            case LOGIN_REQUEST:
                return {
                    ...prevState,
                    loading: true,
                }
                break;
            case LOGIN_SUCCESS:
                return {
                    ...prevState,
                    accessToken: payload,
                    loading: false,
                }
                break;
            case LOGIN_FAIL:
                return {
                    ...prevState,
                    accessToken: null,
                    loading: false,
                    error: payload,
                }
                break;
            case LOAD_PROFILE:
                return {
                    ...prevState,
                    user: payload,
                }
                break;
            case LOG_OUT:
                return {
                    ...prevState,
                    accessToken: null,
                    user: null,
                }
                break;
        
            default:
                return prevState
        }

}