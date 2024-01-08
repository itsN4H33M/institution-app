import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";
// import { Student } from "../Components/Application";

// user registration
export const registerAPI = async (userDetails: any) => {
    return await commonAPI("POST", `${serverURL}/register/admission`, userDetails,);
};