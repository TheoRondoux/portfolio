import React from "react";
import TrCard from "../../../../components/TrCard/TrCard";
import {IconCalendar, IconId} from "@tabler/icons-react";
import TrSticker from "../../../../components/TrSticker";

interface WorkExperienceProps {
    company: string;
    companyLogo?: string;
    position: string;
    startDate: string;
    endDate?: string;
    children: React.ReactNode;
    contentSize?: "tiny" | "small" | "medium" | "large";
    keyPoints?: string[];
    description?: string;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({
    company,
    companyLogo,
    position,
    startDate,
    endDate,
    children,
    contentSize = "large",
    keyPoints,
    description
}) => {

    const getContentSize = () => {
        switch (contentSize) {
            case "tiny":
                return "text-sm";
            case "small":
                return "text-md";
            case "medium":
                return "text-xl";
            case "large":
                return "text-2xl";
            default:
                return "text-md";
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const finalDateString = date.toLocaleDateString("fr-FR", {year: 'numeric', month: 'short'});
        return finalDateString.charAt(0).toUpperCase() + finalDateString.slice(1);
    }

    return (
        <TrCard size={"large"}>
            <div className={`flex flex-col items-start sm:flex-row ${companyLogo ? "sm:items-center" : "sm:items-start"} justify-between pb-8`}>
                <div className={"flex flex-row gap-4 items-start sm:items-center pb-4 sm:pb-0"}>
                    {companyLogo &&
                        <div className={"bg-white/60 size-15 rounded-xl shadow-lg border border-white overflow-hidden shrink-0"}>
                            <img
                                src={companyLogo}
                                alt={company}
                                className={"size-full object-cover"}
                            />
                        </div>
                    }
                    <div className={"flex flex-col gap-1"}>
                        <h3 className={`font-bold ${getContentSize()}`}>{company}</h3>
                        <div className={"flex flex-row items-start sm:items-center gap-1"}>
                            {companyLogo && <IconId className={"size-5"} />}
                            <p className={"text-md font-medium"}>{position}</p>
                        </div>
                    </div>
                </div>
                <TrSticker
                    startSlot={companyLogo ? <IconCalendar /> : undefined}
                    title={`${formatDate(startDate)} - ${endDate ? formatDate(endDate) : "Aujourd'hui"}`}
                    size={"small"}
                />
            </div>
            {description && <p className={`text-justify text-lg`}>{description}</p>}
            {keyPoints && <div className={"grid grid-cols-1 sm:grid-cols-2 gap-2 mt-8"}>
                {keyPoints.map((point, index) => (
                    <div key={index} className={"flex flex-row items-start gap-2"}>
                        <div className={"size-2 rounded-full bg-gradient mt-2 shrink-0"}/>
                        <p className={"text-md"}>{point}</p>
                    </div>
                ))}
            </div>}
            {children}
        </TrCard>
    );
};