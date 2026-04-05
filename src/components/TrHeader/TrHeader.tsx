import React from 'react';
import Theo from "../../assets/img/theo.png";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconMenu2,
} from "@tabler/icons-react";
import TrButton from "../TrButton";
import TrCard from "../TrCard/TrCard.tsx";

const LINKEDIN_URL = "https://www.linkedin.com/in/theo-rondoux-948ba720a/";
const GITHUB_URL = "https://github.com/TheoRondoux";

const styleClasses = "p-2 rounded-4xl sm:rounded-full backdrop-blur-xl bg-white/40 border border-white/40 shadow-lg shadow-gray-200 overflow-hidden";

const TrHeader: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleToggleBurgerMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    return (
        <header className={"z-10 fixed top-2 left-1/2 -translate-x-1/2 w-[calc(100%-2.6rem)] max-w-[68.6rem] flex flex-row items-center justify-between"}>
            <div className={`flex flex-col sm:flex-row w-full sm:w-fit sm:justify-start items-start sm:items-center gap-x-2 ${styleClasses} transition-[transform, height] ease-in-out duration-300 hover:scale-103 active:scale-97`}>
                <div className={"flex flex-row gap-2 w-full items-center justify-between"}>
                    <a href={"/"} className={"flex flex-row gap-2 items-center"}>
                        <div className={"rounded-full w-10 h-10 overflow-hidden"}>
                            <img src={Theo} alt={"Theo"} />
                        </div>
                        <p className={"text-2xl font-bold"}>Théo</p>
                    </a>
                    <button
                        className={"pr-2 sm:hidden"}
                        onClick={handleToggleBurgerMenu}
                    >
                        <IconMenu2 />
                    </button>
                </div>
                <div className={`w-full grid sm:hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                    isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}>
                    <div className={"overflow-hidden w-full sm:hidden"}>
                        <div className={"mt-2"}>
                            <TrCard size={"small"}>
                                <nav className={"flex flex-col items-start gap-2 w-full"}>
                                    <a
                                        className={"px-4 py-2 rounded-xl shadow-sm w-full flex flex-row justify-between"}
                                    >
                                        À propos
                                    </a>
                                    <a
                                        className={"px-4 py-2 rounded-xl shadow-sm w-full flex flex-row justify-between"}
                                    >
                                        Expériences
                                    </a>
                                </nav>
                            </TrCard>
                        </div>
                        <div className={"flex flex-row justify-end w-full pl-4 pr-1 pt-4 pb-1 gap-6"}>
                            <a href={GITHUB_URL} target={"_blank"} onClick={handleToggleBurgerMenu}><IconBrandGithub className={"size-7"} /></a>
                            <a href={LINKEDIN_URL} target={"_blank"} onClick={handleToggleBurgerMenu}><IconBrandLinkedin className={"size-7"} /></a>
                            <a href={"mailto:theo.rondoux@outlook.fr"} onClick={handleToggleBurgerMenu}><IconMail className={"size-7"} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={`hidden sm:flex flex-row items-center gap-4 px-4 py-2 text-lg ${styleClasses}`}>
                <a className={"px-4 py-2 rounded-full hover:bg-white/20 hover:shadow-md hover:cursor-pointer transition-all ease-in-out active:scale-95"}>À propos</a>
                <a className={"p-2 rounded-full hover:bg-white/20 hover:shadow-md hover:cursor-pointer transition-all ease-in-out active:scale-95"}>Expériences</a>
            </nav>
            <div className={"hidden sm:flex flex-row items-center gap-4"}>
                <TrButton
                    variant={"blured"}
                    onClick={() => window.open(GITHUB_URL, "_blank")}
                >
                    <IconBrandGithub/>
                </TrButton>
                <TrButton
                    variant={"blured"}
                    onClick={() => window.open(LINKEDIN_URL, "_blank")}
                >
                    <IconBrandLinkedin/>
                </TrButton>
                <TrButton
                    onClick={() => window.open("mailto:theo.rondoux@outlook.fr")}
                >
                    <IconMail />
                    <div className={"hidden md:block font-medium"}>Me contacter</div>
                </TrButton>
            </div>
        </header>
    );
}

export default TrHeader;