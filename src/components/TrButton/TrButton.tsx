import React from "react";

interface TrButtonProps {
    variant?: "primary" | "secondary" | "blured";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    startSlot?: React.ReactElement;
    endSlot?: React.ReactElement;
    children: React.ReactNode;
}

const TrButton: React.FC<TrButtonProps> = ({
    variant = "primary",
    size = "medium",
    onClick,
    startSlot,
    endSlot,
    children
}) => {

    // bg-gradient text-white font-medium text-lg px-4 py-2

    const getVariantClasses = () => {
        switch (variant) {
            case "primary":
                return "bg-gradient text-white shadow-lg shadow-gray-200"
            case "secondary":
                return "bg-white/50 text-gradient shadow-lg shadow-gray-200"
            case "blured":
                return "backdrop-blur-xl bg-white/40 shadow-lg shadow-gray-200"
        }
    }

    const getSizeClasses = () => {
        switch (size) {
            case "small":
                return "text-sm px-2 py-2";
            case "medium":
                return "text-md px-3 py-3";
            case "large":
                return "text-lg px-4 py-4";
        }
    }

    return (
        <button
            className={`flex flex-row items-center gap-2 rounded-full transform transition-transform duration-300 hover:cursor-pointer hover:scale-103 active:scale-97 ${getVariantClasses()} ${getSizeClasses()}`}
            onClick={onClick}
        >
            {startSlot && <span className={"flex items-center"}>{startSlot}</span>}
            {children}
            {endSlot && <span className={"flex items-center"}>{endSlot}</span>}
        </button>
    )
};

export default TrButton;