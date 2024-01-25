import { useReducer, createContext, useContext } from "react";
const initialState = {
    isAuthenticated: false,
    user: null,
};
const AuthContext = createContext();
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case "LOGIUT":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispath] = useReducer(authReducer, initialState);

    const login = (user) => {
        dispath({
            type: "LOGIN",
            payload: user,
        });
    };
    const logout = () => {
        dispath({
            type: "LOGOUT",
        });
    };
    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an auth provider");
    }
    return context;
};
