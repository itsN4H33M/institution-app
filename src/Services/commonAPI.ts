import axios, { AxiosRequestConfig } from "axios";
// import { Student } from '../Components/Application'

export const commonAPI = async (reqMethod: AxiosRequestConfig['method'], url: string, reqBody: any) => {
    const reqConfig = {
        method: reqMethod,
        url,
        data: reqBody,
        
    };

    return await axios(reqConfig)
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err;
        });
};
