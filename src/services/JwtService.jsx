import { jwtDecode } from "jwt-decode";

const getClientSideToken = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem("accessToken");
};

export function getDecodedToken() {
    const token = getClientSideToken();
    if (!token) return null;

    try {
        return jwtDecode(token);
    } catch (error) {
        console.error("Invalid JWT:", error);
        return null;
    }
}

export function getUserId() {
    if (typeof window === 'undefined') return null;
    const decoded = getDecodedToken();
    return decoded?.["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
}

export function getClientId() {
    if (typeof window === 'undefined') return null;
    const decoded = getDecodedToken();
    return decoded?.["ClientId"] || null;
}

export function getUserRole() {
    if (typeof window === 'undefined') return null;
    const decoded = getDecodedToken();
    return decoded?.["role"] || null;
}

export function getUserName() {
    if (typeof window === 'undefined') return null;
    const decoded = getDecodedToken();
    return decoded?.["unique_name"] || null;
}