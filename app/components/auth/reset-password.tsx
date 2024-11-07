import { FC } from "react";

type ResetPasswordProps = {
    onLogin: () => void;
    onSignUp: () => void;
};

const ResetPassword: FC<ResetPasswordProps> = ({ onLogin, onSignUp }) => (
    <>
        <p className="text-sm text-gray-600 mb-4">
            Please enter your email address and we will send you instructions on how to change the password to a new one.
        </p>
        <label className="block pb-1">Email</label>
        <input type="email" className="w-full border border-stone-300 text-sm p-2 mb-4 focus:outline-none focus:border-[--secondary-clr] transition duration-500" />
        <button className="bg-[--primary-clr] w-full py-3 px-8 font-bold hover:bg-[--secondary-clr] hover:text-white transition duration-500">
            SEND
        </button>
        <p className="text-center py-4">
            <span className="cursor-pointer hover:text-gray-500 transition duration-300" onClick={onLogin}>Login</span> | <span className="cursor-pointer hover:text-gray-500 transition duration-300" onClick={onSignUp}>Sign up</span>
        </p>
    </>
);

export default ResetPassword;
