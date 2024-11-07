import React, { FC, useState } from "react";
import Login from "./login";
import SignUp from "./sign-up";
import ResetPassword from "./reset-password";

type AuthSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

const AuthSidebar: FC<AuthSidebarProps> = ({ isOpen, onClose }) => {
    const [authMode, setAuthMode] = useState<"login" | "register" | "reset">("login");

    const toggleAuthMode = (mode: "login" | "register" | "reset") => {
        setAuthMode(mode);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-50"
            onClick={onClose}
        >
            <div
                className="bg-white w-96 p-6 fixed top-0 right-0 h-full shadow-lg text-sm"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">
                        {authMode === "reset" ? "Forgot password?" : authMode === "login" ? "Login" : "Registration"}
                    </h2>
                    <button onClick={onClose} className="font-serif text-4xl">×</button>
                </div>
                <hr className="border-t border-gray-300 mb-4" />

                {authMode === "login" && (
                    <Login onForgotPassword={() => toggleAuthMode("reset")} onSwitchMode={() => toggleAuthMode("register")} />
                )}
                {authMode === "register" && <SignUp onSwitchMode={() => toggleAuthMode("login")} />}
                {authMode === "reset" && (
                    <ResetPassword onLogin={() => toggleAuthMode("login")} onSignUp={() => toggleAuthMode("register")} />
                )}
            </div>
        </div>
    );
};

export default AuthSidebar;
