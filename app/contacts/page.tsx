import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "../components/page-heading/page-heading";

export default function Contacts() {
    return (
        <div>
            <BreadCrumbsBar params={{ url: `/contacts` }} />
            <PageHeading params={{ content: "Contacts" }} />
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
                <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                        <p className="font-semibold text-lg">Call us</p>
                        <p>+38 (000) 000 00 00</p>
                        <p>+38 (000) 000 00 00</p>
                        <p>+38 (000) 000 00 00</p>
                    </div>

                    <div>
                        <p className="font-semibold text-lg">Email</p>
                        <p>support@support.com.ua</p>
                    </div>

                    <div>
                        <p className="font-semibold text-lg">Office address</p>
                        <p>Kyiv, street Kyiv</p>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 space-y-4">
                    <p className="text-2xl font-semibold">Feedback</p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="w-full border border-stone-300 placeholder-stone-300 text-sm p-2 focus:border-[--secondary-clr] focus:border-1 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full border border-stone-300 placeholder-stone-300 text-sm p-2 focus:border-[--secondary-clr] focus:border-1 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full border border-stone-300 placeholder-stone-300 text-sm p-2 focus:border-[--secondary-clr] focus:border-1 focus:outline-none"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full border border-stone-300 placeholder-stone-300 text-sm p-2 focus:border-[--secondary-clr] focus:border-1 focus:outline-none resize-none"
                        ></textarea>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[--primary-clr] py-3 px-8 font-bold hover:bg-[--secondary-clr] hover:text-white transition duration-300"
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
