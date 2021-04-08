import axios from 'axios';
import Auth from './Authenticate';

// Our main ajax handler
const API = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

// Set token if available
API.interceptors.request.use(function (config) {
    const token = Auth.getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});

// Create a basic set of responses
function handleError(error) {
    if (error.response) {
        // Server responded, but with error
        if (error.response.status === 401)
            return "Request couldn't be authenticated.";

        if (error.response.status === 400 && error.response.data.errors)
            return "Request failed due to missing parameters.";

        if (error.response.status === 500)
            return "An internal API server occured."
            
        return error.response.data.error;
    } else if (error.request) {
        // Server didn't respond
        return "The API server did not respond.";
    } else {
        // Unable to send request
        return "Something went wrong when attempting request.";
    }
}

export default API;
export { handleError };