"use client";
import Login from "./login";
export default function Landing() {

    return (
    <main className="tw-h-full tw-w-full tw-flex tw-p-36 tw-bg-cover tw-bg-center tw-bg-home-box tw-justify-end ">
        <div className="tw-flex tw-flex-col tw-justify-center">
            <div className="">
                <h1>Welcome Nxt!</h1>
            </div>
            <div className="tw-justify-center">
                <Login/>
            </div>
        </div>

    </main>
    )
}
