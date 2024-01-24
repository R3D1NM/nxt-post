export default function AfterLoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
    <div className="tw-w-[80vw] tw-flex tw-h-full tw-justify-center tw-bg-black">
        {children}
    </div>
    );
}