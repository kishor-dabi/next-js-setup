import axios, { RawAxiosRequestConfig } from 'axios'
const unInterceptedAxios = axios.create()
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

console.log({baseURL}, process.env.NEXT_PUBLIC_HOST)
export const HttpRequest = (requestConfig: RawAxiosRequestConfig) => {
    return axios.request({baseURL, ...requestConfig})
}
export const HttpBaseRequest = (requestConfig: RawAxiosRequestConfig) => {
    return unInterceptedAxios.request({ baseURL, ...requestConfig})
}
