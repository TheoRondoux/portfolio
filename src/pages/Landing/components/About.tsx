import React from "react";
import {IconBrandHipchat, IconCode, IconCodeDots, IconFlask, IconMenuDeep, IconTerminal} from "@tabler/icons-react";
import TrCard from "../../../components/TrCard/TrCard.tsx";
import TrSticker from "../../../components/TrSticker";
import javaLogo from "../../../assets/img/tool-icons/java.svg";
import springLogo from "../../../assets/img/tool-icons/spring.svg";
import springBootLogo from "../../../assets/img/tool-icons/spring-boot.svg";
import reactLogo from "../../../assets/img/tool-icons/react.png";
import nextJsLogo from "../../../assets/img/tool-icons/next-js.svg";
import typescriptLogo from "../../../assets/img/tool-icons/typescript.svg";
import postgreSqlLogo from "../../../assets/img/tool-icons/postgresql.png";
import kafkaLogo from "../../../assets/img/tool-icons/kafka.svg";
import gcpLogo from "../../../assets/img/tool-icons/gcp.svg";
import dockerLogo from "../../../assets/img/tool-icons/docker.png";
import podmanLogo from "../../../assets/img/tool-icons/podman.svg";
import kubernetesLogo from "../../../assets/img/tool-icons/kubernetes.png";
import githubActionsLogo from "../../../assets/img/tool-icons/githubactions.svg";
import datadogLogo from "../../../assets/img/tool-icons/datadog.svg";
import n8nLogo from "../../../assets/img/tool-icons/n8n.png";
import cucumberLogo from "../../../assets/img/tool-icons/cucumber.png";
import jenkinsLogo from "../../../assets/img/tool-icons/jenkins.png";
import linuxLogo from "../../../assets/img/tool-icons/linux.png";
import ubuntuLogo from "../../../assets/img/tool-icons/ubuntu.png";
import tailwindCss from "../../../assets/img/tool-icons/tailwindcss.png";

export const About: React.FC = () => {

    const calculateYearsOfExperience = () => {
        const startDate = new Date("2024-09-01");
        const currentDate = new Date();
        return currentDate.getFullYear() - startDate.getFullYear();
    }

    const tools: Array<{
        logo?: string;
        icon?: React.ComponentType;
        title: string;
        isIcon?: boolean;
        rounded?: boolean
    }> = [
        {logo: javaLogo, title: "Java", isIcon: false},
        {logo: springLogo, title: "Spring", isIcon: false},
        {logo: springBootLogo, title: "Spring Boot", isIcon: false},
        {logo: reactLogo, title: "React", isIcon: false},
        {logo: nextJsLogo, title: "Next.js", isIcon: false},
        {logo: typescriptLogo, title: "Typescript", isIcon: false, rounded: true},
        {logo: tailwindCss, title: "Tailwindcss", isIcon: false, rounded: true},
        {logo: postgreSqlLogo, title: "PostgreSQL", isIcon: false},
        {logo: cucumberLogo, title: "Cucumber", isIcon: false},
        {icon: IconTerminal, title: "Shell Scripting", isIcon: true},
        {logo: dockerLogo, title: "Docker", isIcon: false},
        {logo: gcpLogo, title: "GCP", isIcon: false},
        {logo: n8nLogo, title: "n8n", isIcon: false},
        {logo: kubernetesLogo, title: "Kubernetes", isIcon: false},
        {logo: podmanLogo, title: "Podman", isIcon: false},
        {logo: githubActionsLogo, title: "Github Actions", isIcon: false},
        {logo: jenkinsLogo, title: "Jenkins", isIcon: false},
        {logo: kafkaLogo, title: "Kafka", isIcon: false},
        {logo: datadogLogo, title: "Datadog", isIcon: false},
        {logo: linuxLogo, title: "Linux", isIcon: false},
        {logo: ubuntuLogo, title: "Ubuntu", isIcon: false},
        {icon: IconCode, title: "Clean Code", isIcon: true},
        {icon: IconMenuDeep, title: "Clean Architecture", isIcon: true},
        {icon: IconBrandHipchat, title: "Domain Driven Design", isIcon: true},
        {icon: IconFlask, title: "Test Driven Development", isIcon: true},
    ];

    return (
        <section id={"about"} className={"w-full flex flex-col gap-4 mt-20 lg:mt-50 scroll-mt-20"}>
            <div className={"relative w-full flex flex-col gap-4 justify-start"}>
                <div className={"w-full flex flex-row gap-3 items-start md:items-end"}>
                    <IconCodeDots className={"size-9"}/>
                    <h2 className={"text-2xl md:text-4xl font-bold"}>Derrière chaque ligne</h2>
                </div>
                <TrCard size={"large"}>
                    <p className={"text-lg md:text-xl text-justify md:pr-20"}>
                        Un ingénieur diplômé de Junia ISEN. Je m'intéresse avant tout à la manière dont les systèmes
                        sont pensés, construits et optimisés. J'aime concevoir des solutions robustes, aller au fond des
                        problématiques et transformer des besoins en réalisations concrètes.
                        <br/>Mon objectif : créer des outils fiables, utiles et pensés pour ceux qui les utilisent.
                    </p>
                </TrCard>
            </div>
            <div className={"w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"}>
                <TrCard dynamic={true} size={"small"}>
                    <p className={"font-bold text-4xl text-center text-gradient"}>{calculateYearsOfExperience()}+</p>
                    <p className={"text-center text-lg text-gray-500"}>Années d'expérience</p>
                </TrCard>
                <TrCard dynamic={true} size={"small"}>
                    <p className={"font-bold text-4xl text-center text-gradient"}>5</p>
                    <p className={"text-center text-lg text-gray-500"}>Projets en équipe</p>
                </TrCard>
                <TrCard dynamic={true} size={"small"}>
                    <p className={"font-bold text-4xl text-center text-gradient"}>10M+</p>
                    <p className={"text-center text-lg text-gray-500"}>Utilisateurs concernés</p>
                </TrCard>
                <TrCard dynamic={true} size={"small"}>
                    <p className={"font-bold text-4xl text-center text-gradient"}>6</p>
                    <p className={"text-center text-lg text-gray-500"}>Interventions publiques</p>
                </TrCard>
            </div>
            <TrCard>
                <h3 className={"text-xl text-center"}>Compétences techniques</h3>
                <div className={"flex flex-row flex-wrap justify-center items-center gap-x-2 gap-y-3 pt-6"}>
                    {tools.map((tool, index) => {
                        const Icon = tool.icon;
                        return (
                            <TrSticker
                                key={index}
                                startSlot={
                                    tool.isIcon === false ?
                                        <img
                                            src={tool.logo}
                                            alt={tool.title}
                                            className={tool.rounded ? "rounded-xs" : ""}
                                        /> :
                                        Icon && <Icon/>
                                }
                                title={tool.title}
                                dynamic
                            />
                        );
                    })}
                </div>
            </TrCard>
        </section>
    );
};