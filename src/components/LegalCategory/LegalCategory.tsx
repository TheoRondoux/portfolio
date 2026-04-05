import React from "react";

interface LegalCategoryProps {
    title: string;
    children: React.ReactNode;
}

const LegalCategory: React.FC<LegalCategoryProps> = ({title, children}) => {
    return (
        <div className={"flex flex-col w-full pt-4"}>
            <h2 className={"text-xl font-bold"}>{title}</h2>
            <div className={"flex flex-col w-full pt-2 text-lg text-justify gap-3"}>
                {children}
            </div>
        </div>
    );
};

export default LegalCategory;