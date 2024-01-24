"use client";
import axios from "axios";
import { useState } from "react";
import Login from "./login";
export default function Landing() {

    return (
    <main className="tw-flex tw-min-h-screen tw-flex-col tw-items-end tw-justify-center tw-p-36 tw-bg-cover tw-bg-center tw-bg-home-box">
        <div className="">
            <h1>Welcome Nxt!</h1>
        </div>
        <div className="tw-justify-center">
            <Login/>
        </div>
    </main>
    )
}
