import React, { FC, useState } from "react";

type ExpressCheckoutSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
    orderTotal: number;
    shippingCost?: number; // Add optional shipping cost prop
};

const ExpressCheckoutSidebar: FC<ExpressCheckoutSidebarProps> = ({ isOpen, onClose, orderTotal, shippingCost = 0 }) => {
    const [isCommentOpen, setIsCommentOpen] = useState(false);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-50"
            onClick={onClose}
        >
            <div
                className="bg-white w-96 p-4 fixed top-0 right-0 h-full shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Express checkout</h2>
                    <button onClick={onClose} className="font-serif text-4xl">×</button>
                </div>
                <hr className="my-2"/>
                <p className="text-sm pt-1 pb-4">
                    Please enter your data, and our manager will contact you.
                </p>
                <form className="flex flex-col text-xs">
                    <label className="block pb-1">Name, surname</label>
                    <input
                        type="text"
                        className="w-full border border-stone-300 text-sm p-2 mb-3 focus:outline-none focus:border-[--secondary-clr] transition duration-500"
                    />
                    <label className="block pb-1">Phone</label>
                    <input
                        type="tel"
                        className="w-full border border-stone-300 text-sm p-2 mb-3 focus:outline-none focus:border-[--secondary-clr] transition duration-500"
                    />
                    <label className="block pb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border border-stone-300 text-sm p-2 mb-3 focus:outline-none focus:border-[--secondary-clr] transition duration-500"
                    />
                    <div className="flex items-center justify-end cursor-pointer text-sm mb-2">
                        <span onClick={() => setIsCommentOpen(!isCommentOpen)}>
                            {isCommentOpen ? "Hide" : "Add a comment"}
                        </span>
                    </div>
                    {isCommentOpen && (
                        <textarea
                            className="w-full border border-stone-300 text-sm p-1 mb-2 focus:outline-none focus:border-[--secondary-clr] transition duration-500 resize-none"
                            rows={2}
                        ></textarea>
                    )}
                </form>
                <div className="flex justify-between text-xs font-semibold">
                    <p>Shipping cost</p>
                    <p>{shippingCost === 0 ? "-" : `${shippingCost} ₴`}</p>
                </div>
                <hr className="my-3"/>
                <div className="flex justify-between font-bold text-gray-700 mt-2">
                    <p>Subtotal</p>
                    <p>{orderTotal} ₴</p>
                </div>
                <button
                    className="bg-[--primary-clr] w-full py-3 font-bold hover:bg-[--secondary-clr] hover:text-white transition duration-500 mt-4">
                    SEND
                </button>
            </div>
        </div>
    );
};

export default ExpressCheckoutSidebar;
