import { FC } from "react";

type SignUpProps = {
    onSwitchMode: () => void;
};

const SignUp: FC<SignUpProps> = ({ onSwitchMode }) => (
    <>
        <label className="block pb-1">First name</label>
        <input type="text" className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
        <label className="block pb-1">Surname</label>
        <input type="text" className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
        <label className="block pb-1">Phone number</label>
        <input type="text" className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
        <label className="block pb-1">Email</label>
        <input type="email" className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
        <label className="block pb-1">Password</label>
        <input type="password" className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
        <label className="block pb-1">Confirm password</label>
        <input type="password" className="w-full border border-stone-300 text-sm p-2 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500"/>
        <button className="bg-[--primary-clr] w-full py-3 px-8 font-bold hover:bg-[--secondary-clr] hover:text-white transition duration-500">
            SIGN UP
        </button>
        <p className="text-center py-4">
            Already have an account? <span className="cursor-pointer hover:text-gray-500 transition duration-300" onClick={onSwitchMode}>Login</span>
        </p>
    </>
);

export default SignUp;
