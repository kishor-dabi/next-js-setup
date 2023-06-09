import { HttpBaseRequest } from "@/utility/_http";
import { GET_AUTH_DATA, GET_AUTH_DATA_ERROR, LOGIN, LOGIN_ERROR } from "../types";
import { LoginRequest } from "@/interfaces/login";
import { AxiosError } from "axios";

export const getAuthData = () => async (dispatch: any) => {
    try {
        dispatch({
            type: GET_AUTH_DATA,
            payload: [1, 2, 3, 4, 5, 6],
        });
    } catch (error) {
        dispatch({
            type: GET_AUTH_DATA_ERROR,
            payload: "error message",
        });
    }
};

export const login = (data: LoginRequest) => async (dispatch: any) => {
    try {
        HttpBaseRequest({
            method: "POST",
            url: "/api/v1/auth/signin",
            data
        }).then((dataResponse: any) => {
            console.log(dataResponse);
            dispatch({
                type: LOGIN,
                payload: dataResponse.data,
            });
        }).catch((error: AxiosError) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.message,
            });

        })
    } catch (e) {
        dispatch({
            type: LOGIN_ERROR,
            payload: e,
        });
    }
};