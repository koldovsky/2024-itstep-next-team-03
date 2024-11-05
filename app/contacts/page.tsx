import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "../components/page-heading/page-heading";

export default function Contacts() {
    return (
        <div>
            <BreadCrumbsBar params={{ url: `/contacts` }} />
            <PageHeading params={{ content: "Contacts" }} />
            <div className="flex flex-col lg:flex-row gap-8 mt-8 px-8 lg:px-16">
                <div className="w-full lg:w-1/2 space-y-6">
                    <p className="text-2xl font-semibold">Contacts</p>

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
                <div className="w-full lg:w-1/2 space-y-4">
                    <p className="text-2xl font-semibold">Feedback</p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none h-24 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900"
                        >
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
