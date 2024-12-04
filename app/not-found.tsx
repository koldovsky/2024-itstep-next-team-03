import Button from "./components/button/button";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-[var(--secondary-clr)] text-[100px] md:text-[150px]">
                404
            </h1>
            <p className="text-base mb-6">
                Sorry, the page you&apos;re looking for cannot be found.
            </p>
            <Button
                params={{
                    content: "Return to Home page",
                    url: "/",
                    className: "primary-btn",
                }}
            ></Button>
        </div>
    );
}
