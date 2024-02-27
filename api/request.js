// USER ENDPOINT IMPORT
import { USER_REGISTER, USER_LOGIN, GET_KEYWORD, FIND_KEYWORD, GET_ACCESS} from "./endpoints";


// LIBRARY IMPORT
import axios from "axios";

export const getNewAccessToken = async() => {
    try{
        const refreshToken = sessionStorage.getItem("refresh_token");
        if (!refreshToken) {
            throw new Error("Refresh token not found!")
        }

        const refreshResponse = await axios.get(GET_ACCESS, {
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        });
        sessionStorage.setItem("access_token", refreshResponse.data.access_token);
        return refreshResponse.data.accessToken;
    } catch (error) {
        console.error("Error fetching token:", error);
        throw error;
    }
}

export const accountRegister = async(formData) => {
    try {
        const response = await axios.post(USER_REGISTER, formData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        const message = error.response.data;
        console.error("Error on request:", message);
        throw error;
    }
};


export const accountLogin = async(formData) => {
    try {
        const response = await axios.post(USER_LOGIN, formData);
        sessionStorage.setItem("access_token", response.data.access_token)
        sessionStorage.setItem("refresh_token", response.data.refresh_token)
        return response.data;
    } catch (error) {
        const message = error.response.data;
        console.error("Error on request:", message);
        throw error;
    }
}

export const getKeyword = async() => {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
        throw new Error ("Access token not found!");
    }

    try {
        const response = await axios.get(GET_KEYWORD, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401){
            console.log("Access token expired, trying to refresh....");
            accessToken = await getNewAccessToken();
            return getKeyword();
        }
        console.error("Error fetching data:", error);
        throw error;
    }
}

export const findKeyword = async(formData) => {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
        throw new Error ("Access token not found!");
    }

    try {
        const response = await axios.post(FIND_KEYWORD, formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401){
            console.log("Access token expired, trying to refresh....");
            accessToken = await getNewAccessToken();
            return getKeyword();
        }
        console.error("Error fetching data:", error);
        throw error;
    }
}


