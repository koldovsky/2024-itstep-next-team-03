import { useState } from "react";
import Image from "next/image";
import facebookIcon from "@/public/icons/facebook.svg";
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
            <div className={`${styles.sidebar} bg-white w-96 p-6 fixed top-0 right-0 h-full shadow-lg text-sm`}
                 onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{isLogin ? "Login" : "Registration"}</h2>
                    <button onClick={onClose} className="font-serif text-4xl">×</button>
                </div>
                <hr className="border-t border-gray-300 mb-4"/>
                {isLogin ? (
                    <>
                        <label className="block pb-1">Email or phone number</label>
                        <input type="text" className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
                        <label className="block pb-1">Password</label>
                        <input type="password" className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
                        <div className="flex items-center justify-between mb-4 text-gray-500">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2"/>
                                Keep me signed in
                            </label>
                            <a href="#" className="cursor-pointer hover:text-black transition duration-300">Forgot
                                password?</a>
                        </div>
                        <p className="text-center mb-2 text-gray-500">Sign in with</p>
                        <div className="flex gap-2 mb-4">
                            <button
                                className="flex items-center justify-center w-full border border-gray-300 p-3 hover:text-[--secondary-clr] hover:bg-gray-100 transition duration-300">
                                <Image src={facebookIcon} alt="Facebook" width={20} height={20} className="mr-2"/>
                                <span>Facebook</span>
                            </button>
                            <button
                                className="flex items-center justify-center w-full border border-gray-300 p-3 hover:text-[--secondary-clr] hover:bg-gray-100 transition duration-300">
                                <Image src={googleIcon} alt="Google" width={20} height={20} className="mr-2"/>
                                <span>Google</span>
                            </button>
                        </div>
                        <button
                            className="bg-[--primary-clr] w-full py-3 px-8 font-bold hover:bg-[--secondary-clr] hover:text-white transition duration-500">
                            LOGIN
                        </button>
                        <p className="text-center pt-4">
                            Don’t have an account? <span
                            className="cursor-pointer hover:text-gray-500 transition duration-300"
                            onClick={toggleAuthMode}>Sign up</span>
                        </p>
                    </>
                ) : (
                    <>
                        <label className="block pb-1">First name</label>
                        <input type="text"
                               className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
                        <label className="block pb-1">Surname</label>
                        <input type="text"
                               className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
                        <label className="block pb-1">Phone number</label>
                        <input type="text"
                               className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
                        <label className="block pb-1">Email</label>
                        <input type="email"
                               className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
                        <label className="block pb-1">Password</label>
                        <input type="password"
                               className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
                        <label className="block pb-1">Confirm password</label>
                        <input type="password"
                               className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
                        <button
                            className="bg-[--primary-clr] w-full py-3 px-8 font-bold hover:bg-[--secondary-clr] hover:text-white transition duration-500">SIGN
                            UP
                        </button>
                        <p className="text-center py-4">
                            Already have an account? <span className="cursor-pointer"
                                                           onClick={toggleAuthMode}>Login</span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
