import React from "react";

interface TrStickerProps {
    title?: string;
    startSlot?: React.ReactElement;
    dynamic?: boolean;
    size?: "tiny" | "small" | "medium" | "large";
}

const defaultClasses = "flex flex-row justify-center items-center gap-2 bg-white/50 shadow-sm border border-gray-200 rounded-full whitespace-nowrap";
const dynamicClasses = "transition-transform duration-300 hover:-rotate-6";

const TrSticker: React.FC<TrStickerProps> = ({
    startSlot,
    title,
    dynamic = false,
    size = "medium"
}) => {

    const getClasses = () => {
        let classes = defaultClasses;
        switch (size) {
            case "tiny":
                classes += " px-2 py-0.5 text-xs";
                break;
            case "small":
                classes += " px-3 py-1 text-sm";
                break;
            case "medium":
                classes += " px-4 py-2 text-md";
                break;
            case "large":
                classes += " px-5 py-3 text-lg";
                break;
        }
        if (dynamic) {
            classes += ` ${dynamicClasses}`;
        }
        return classes;
    }

    const getTitleSize = () => {
        switch (size) {
            case "tiny":
                return "text-xs";
            case "small":
                return "text-sm";
            case "medium":
                return "text-md";
            case "large":
                return "text-lg";
        }
    }

    return (
        <div className={getClasses()}>
            {startSlot && <div className={"size-5 flex items-center"}>{startSlot}</div>}
            {title && <p className={getTitleSize()}>{title}</p>}
        </div>
    );
};

export default TrSticker;