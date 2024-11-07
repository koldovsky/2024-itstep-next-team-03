import { FC } from "react";
import Image from "next/image";
import facebookIcon from "@/public/icons/facebook.svg";
import googleIcon from "@/public/icons/google.svg";

type LoginProps = {
    onForgotPassword: () => void;
    onSwitchMode: () => void;
};

const Login: FC<LoginProps> = ({ onForgotPassword, onSwitchMode }) => (
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
            <span className="cursor-pointer hover:text-black transition duration-300" onClick={onForgotPassword}>
        Forgot password?
      </span>
        </div>
        <p className="text-center mb-2 text-gray-500">Sign in with</p>
        <div className="flex gap-2 mb-4">
            <button className="flex items-center justify-center w-full border border-gray-300 p-3 hover:text-[--secondary-clr] hover:bg-gray-100 transition duration-300">
                <Image src={facebookIcon} alt="Facebook" width={20} height={20} className="mr-2"/>
                <span>Facebook</span>
            </button>
            <button className="flex items-center justify-center w-full border border-gray-300 p-3 hover:text-[--secondary-clr] hover:bg-gray-100 transition duration-300">
                <Image src={googleIcon} alt="Google" width={20} height={20} className="mr-2"/>
                <span>Google</span>
            </button>
        </div>
        <button className="bg-[--primary-clr] w-full py-3 px-8 font-bold hover:bg-[--secondary-clr] hover:text-white transition duration-500">
            LOGIN
        </button>
        <p className="text-center pt-4">
            Don’t have an account? <span className="cursor-pointer hover:text-gray-500 transition duration-300" onClick={onSwitchMode}>Sign up</span>
        </p>
    </>
);

export default Login;
