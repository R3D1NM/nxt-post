"use client";

import PostCreate from "./_component/postCreate";

export default function Main() {

    return (
        <div className="tw-flex tw-align-middle">
            <div className="tw-flex-col tw-justify-center tw-flex">
                <h1 className="tw-text-blue-200">Hello!</h1>
                <PostCreate/>
            </div>
        </div>
    );
}