import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "../components/page-heading/page-heading";

export default function Contacts() {
    return (
        <div>
            <BreadCrumbsBar params={{ url: `/contacts` }} />
            <PageHeading params={{ content: "Contacts" }} />
            <div className="flex flex-col lg:flex-row gap-8 mt-8 justify-between">
                <div className="flex flex-col lg:flex-row gap-8 mt-8">
                    <div className="w-full space-y-6">
                        <div>
                            <h3 className="font-bold text-2xl">Call us</h3>
                            <p className="cursor-pointer hover:no-underline hover:text-[--secondary-clr] transition duration-500">
                                <a href="tel:+380000000000">+38 (000) 000 00 00</a>
                            </p>
                            <p className="cursor-pointer hover:no-underline hover:text-[--secondary-clr] transition duration-500">
                                <a href="tel:+380000000000">+38 (000) 000 00 00</a>
                            </p>
                            <p className="cursor-pointer hover:no-underline hover:text-[--secondary-clr] transition duration-500">
                                <a href="tel:+380000000000">+38 (000) 000 00 00</a>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl">Email</h3>
                            <p
                               className="cursor-pointer hover:no-underline hover:text-[--secondary-clr] transition duration-500">
                                <a href="mailto:support@support.com.ua">support@support.com.ua</a>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl">Office address</h3>
                            <p>Kyiv, street Kyiv</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/5 space-y-4">
                    <h3 className="text-2xl font-semibold">Feedback</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="w-full border border-stone-300 placeholder-stone-300 text-sm p-2 focus:border-[--secondary-clr] focus:border-1 focus:outline-none transition duration-500"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full border border-stone-300 placeholder-stone-300 text-sm p-2 focus:border-[--secondary-clr] focus:border-1 focus:outline-none transition duration-500"
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full border border-stone-300 placeholder-stone-300 text-sm p-2 focus:border-[--secondary-clr] focus:border-1 focus:outline-none transition duration-500"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full border border-stone-300 placeholder-stone-300 text-sm p-2 focus:border-[--secondary-clr] focus:border-1 focus:outline-none resize-none transition duration-500"
                        ></textarea>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[--primary-clr] py-3 px-8 font-bold hover:bg-[--secondary-clr] hover:text-white transition duration-500"
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
