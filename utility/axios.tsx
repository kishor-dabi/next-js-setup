import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

axios.interceptors.request.use(
    function (successfulReq: InternalAxiosRequestConfig) {
        const data = localStorage.getItem("authUserData")
        const UserData = localStorage.getItem("authUserData") ? JSON.parse(data || "{}") : {};
        const jwtToken = UserData.token;

        if (jwtToken) {
            successfulReq.headers['Authorization'] = 'Bearer ' + jwtToken
        }
        // successfulReq.headers['Content-Type'] = 'application/json';
        return successfulReq
    },
    function (error: AxiosError | Error) {
        return Promise.reject(error);
    }
);
