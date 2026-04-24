import React from "react";

interface TrCardProps {
    children: React.ReactNode;
    dynamic?: boolean;
    size?: "small" | "medium" | "large";
}

const baseClasses = "group rounded-3xl bg-white/50 border border-white backdrop-blur-sm shadow-sm shadow-gray-200 overflow-hidden";
const dynamicClasses = "transition-all duration-300 hover:scale-105 hover:cursor-pointer";
const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8"
};

const TrCard: React.FC<TrCardProps> = ({children, dynamic = false, size = "medium"}) => {

    const getClasses = () => {
        let classes = baseClasses;
        if (dynamic) classes += ` ${dynamicClasses}`;
        classes += ` ${sizeClasses[size]}`;
        return classes;
    }

    return (
        <div className={getClasses()}>
            {children}
        </div>
    );
};

export default TrCard;