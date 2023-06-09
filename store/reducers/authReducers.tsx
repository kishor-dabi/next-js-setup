import { GET_AUTH_DATA, GET_AUTH_DATA_ERROR, LOGIN, LOGIN_ERROR, LOGOUT } from "../types";

const initialState = {
    data: [],
    userData: {},
    loading: true,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_AUTH_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case LOGIN:
            localStorage.setItem('userData', JSON.stringify(action.payload))
            return {
                ...state,
                userData: action.payload,
                loading: false,
            };
        case LOGOUT:
            localStorage.removeItem('userData')
            return {
                ...state,
                userData: {},
                loading: false,
            };
        case LOGIN_ERROR:
            return {
                loading: false,
                error: action.payload,
            };

        case GET_AUTH_DATA_ERROR:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default authReducer;