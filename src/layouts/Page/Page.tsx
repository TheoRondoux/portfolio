import React from "react";
import TrHeader from "../../components/TrHeader";
import TrFooter from "../../components/TrFooter";

interface PageProps {
    children: React.ReactNode;
    showHeader?: boolean;
}

const Page: React.FC<PageProps> = ({ children, showHeader = true }) => {
    return (
        <div className={"relative w-full flex flex-col px-5 md:px-[8%] lg:px-[15%] 2xl:px-[21%] bg-main min-h-screen"}>
            {showHeader && <TrHeader />}
            {children}
            <TrFooter />
        </div>
    );
}

export default Page;