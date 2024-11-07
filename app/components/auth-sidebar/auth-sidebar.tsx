import { useState } from "react";
import Image from "next/image";
import facebookIcon from "@/public/icons/facebook-black.svg";
import googleIcon from "@/public/icons/google.svg";
import styles from "./auth-sidebar.module.css";

export default function AuthSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin((prevMode) => !prevMode);
    };

    if (!isOpen) return null;

    return (
        <div className={`${styles.overlay} fixed inset-0 bg-black bg-opacity-50 z-50`} onClick={onClose}>
            <div className={`${styles.sidebar} bg-white w-80 p-6 fixed top-0 right-0 h-full shadow-lg`} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="text-right text-gray-500 mb-4">×</button>
                <h2 className="text-xl font-semibold mb-4">{isLogin ? "Login" : "Registration"}</h2>

                {isLogin ? (
                    <>
                        <input type="text" placeholder="Email or phone number" className="w-full p-2 mb-4 border" />
                        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border" />
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Keep me signed in
                            </label>
                            <a href="#" className="text-sm text-blue-500">Forgot password?</a>
                        </div>
                        <button className="w-full p-2 bg-black text-white mb-4">LOGIN</button>
                        <p className="text-center mb-2">Sign in with</p>
                        <div className="flex justify-center gap-4 mb-4">
                            <Image src={facebookIcon} alt="Facebook" width={30} height={30} />
                            <Image src={googleIcon} alt="Google" width={30} height={30} />
                        </div>
                        <p className="text-center">
                            Don’t have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleAuthMode}>Sign up</span>
                        </p>
                    </>
                ) : (
                    <>
                        <input type="text" placeholder="First name" className="w-full p-2 mb-4 border" />
                        <input type="text" placeholder="Surname" className="w-full p-2 mb-4 border" />
                        <input type="text" placeholder="Phone number" className="w-full p-2 mb-4 border" />
                        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border" />
                        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border" />
                        <input type="password" placeholder="Confirm password" className="w-full p-2 mb-4 border" />
                        <button className="w-full p-2 bg-black text-white mb-4">SIGN UP</button>
                        <p className="text-center">
                            Already have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleAuthMode}>Login</span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
