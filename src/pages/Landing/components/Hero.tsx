import React from "react";
import Theo from "../../../assets/img/theo.png";

export const Hero: React.FC = () => {
    return (
        <section id={"hero"} className={"w-full mt-30 lg:mt-70 flex flex-col sm:flex-row sm:items-center md:items-start gap-8 md:gap-12"}>
            <div className={"w-full flex flex-col gap-4 justify-center sm:justify-start md:max-w-2/3"}>
                <h1 className={"text-5xl lg:text-6xl font-bold text-center sm:text-start"}>
                    <span className={"text-gradient"}>L'ingénieur</span><br/>qu'il vous faut.
                </h1>
                <p className={"text-xl md:text-2xl text-justify pt-6 sm:pt-0"}>
                    Explorer, apprendre, expérimenter — c'est ce qui guide ma façon de travailler.
                    Chaque découverte devient une opportunité de créer quelque chose d'utile,
                    et surtout un moment de partage pour progresser et avancer ensemble.
                </p>
            </div>
            <div className={"rounded-3xl md:max-w-1/3 overflow-hidden border border-white max-h-80"}>
                <img src={Theo} alt={"Theo"} />
            </div>
        </section>
    );
};