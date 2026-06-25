import axios from "axios";
import { notify } from "./notificationService";

const api = axios.create({
    baseURL: "http://10.200.17.141:5221/api/v1/"
})

api.interceptors.request.use((config) => {
    notify.setLoading(true);
    const token = localStorage.getItem("accessToken");

    if (!config.url.includes("auth") && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use((response) => {
    notify.setLoading(false);

    console.log("Response", response)
    console.log("Detail response:", response.config)

    if (response.config.method === "post") {
        notify.setSuccess("Created successfully!");
    }

    if (response.config.method === "get") {
        notify.setSuccess("Retrieved successfully!");
    }

    if (response.config.method === "put") {
        notify.setSuccess("Updated successfully!");
    }

    if (response.config.method === "delete") {
        notify.setSuccess("Deleted successfully!");
    }

    return response;
},
async (error) => {
    notify.setLoading(false);
    console.log("Error:", error);

    console.log("Response Error:", error.response);
    const originalRequest = error.config;

    if (error.response) {
        const status = error.response.status;

        if (status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem("refreshToken");
                if (!refreshToken) return Promise.reject(error);

                const res = await api.post("Auth/access-token", { refreshToken });

                localStorage.setItem("accessToken", res.data.data); 

                originalRequest.headers.Authorization = `Bearer ${res.data.data}`;

                return api(originalRequest);
            } catch (err) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

                window.location.href = 'auth';
                return Promise.reject(err);
            }
        }

        if (status === 404) {
            //window.location.href = 'notFound';
        }

        if (status === 400) {
            notify.setError("Validation error!");
        }

        if (status >= 500) {
            notify.setError("Server error!");
        }

    } 
    else if (error === undefined) {
        notify.setError("No server connection");
    } 
    else {
        notify.setError(error.message || "Unknown error");
    }

    return Promise.reject(error);
})

export default api;