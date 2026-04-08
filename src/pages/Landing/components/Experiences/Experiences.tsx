import React from "react";
import {IconBriefcase, IconDeviceLaptop} from "@tabler/icons-react";
import TrSticker from "../../../../components/TrSticker";
import {WorkExperience} from "./WorkExperience.tsx";

import sogetiLogo from "../../../../assets/img/companies/sogeti.png";
import decathlonLogo from "../../../../assets/img/companies/decathlon.png";
import thalesLogo from "../../../../assets/img/companies/thales.jpg";

const Experiences: React.FC = () => {
    return (
        <section id={"experiences"} className={"w-full flex flex-col gap-4 mt-10 lg:mt-20 scroll-mt-20"}>
            <div className={"w-full flex flex-row gap-3 items-end"}>
                <IconDeviceLaptop className={"size-9"}/>
                <h2 className={"text-4xl font-bold"}>Sur le terrain</h2>
            </div>
            <WorkExperience
                company={"Sogeti"}
                companyLogo={sogetiLogo}
                position={"Associate Software Engineer"}
                startDate={"2024-09-01"}
                description={"En tant que consultant IT, j’interviens sur des missions clients, où je développe des solutions applicatives et contribue au maintien en conditions opérationnelles. Référent IA à l’agence de Lille, j’accompagne les équipes dans la compréhension et l’adoption des usages de l’Intelligence Artificielle à travers ateliers, démonstrations et événements. J'interviens également comme speaker pour sensibiliser, partager les pratiques et outils d’IA auprès de profils techniques et produit lors d’événements."}
                keyPoints={["Accompagnement des collaborateurs sur les usages de l’IA", "Développement de solutions applicatives", "Maintien en conditions opérationnelles", "Interventions en tant que speaker lors d’événements internes et externes"]}
            >
                <div>
                    <p className={"text-justify text-lg"}>

                    </p>
                    <div className={"flex flex-col pt-8"}>
                        <div className={"flex flex-row items-center gap-2"}>
                            <IconBriefcase className={"size-5"}/>
                            <h4 className={"font-medium text-lg"}>Mes missions</h4>
                        </div>
                        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4"}>
                            <WorkExperience
                                company={"Decathlon"}
                                startDate={"2025-05-12"}
                                position={"Software Engineer"}
                                contentSize={"medium"}
                            >
                                <p className={"text-justify"}>
                                    Développement d'une solution de négotiation des coûts pour les matières premières,
                                    et amélioration d'un outil de chiffrage du coût de production des produits finis.
                                </p>
                                <div className={"flex flex-row flex-wrap pt-4 gap-2"}>
                                    <TrSticker title={"Java"} size={"small"}/>
                                    <TrSticker title={"Spring Boot"} size={"small"}/>
                                    <TrSticker title={"React"} size={"small"}/>
                                    <TrSticker title={"Next.js"} size={"small"}/>
                                    <TrSticker title={"Typescript"} size={"small"}/>
                                    <TrSticker title={"PostgreSQL"} size={"small"}/>
                                    <TrSticker title={"Cucumber"} size={"small"}/>
                                    <TrSticker title={"Docker"} size={"small"}/>
                                    <TrSticker title={"Kubernetes"} size={"small"}/>
                                    <TrSticker title={"GCP"} size={"small"}/>
                                    <TrSticker title={"Github Actions"} size={"small"}/>
                                    <TrSticker title={"Datadog"} size={"small"}/>
                                </div>
                            </WorkExperience>
                            <WorkExperience
                                company={"L'Assurance Maladie"}
                                startDate={"2024-10-01"}
                                endDate={"2025-05-09"}
                                position={"Développeur Full Stack"}
                                contentSize={"medium"}
                            >
                                <div className={"flex flex-col"}>
                                    <p className={"text-justify"}>
                                        Dans le cadre d'un engagement du ministère de la Santé, développement d'une
                                        solution permettant aux jeunes de 18 à 25 ans de se faire dépister gratuitement
                                        et à domicile pour certaines IST, et mise en place d'une plateforme permettant
                                        de s'opposer à la transmission de ses données personnelles de santé.
                                    </p>
                                    <div className={"flex flex-row flex-wrap pt-4 gap-2"}>
                                        <TrSticker title={"Java"} size={"small"}/>
                                        <TrSticker title={"Spring Boot"} size={"small"}/>
                                        <TrSticker title={"Spring Batch"} size={"small"}/>
                                        <TrSticker title={"PostgreSQL"} size={"small"}/>
                                        <TrSticker title={"Vue.js"} size={"small"}/>
                                        <TrSticker title={"Typescript"} size={"small"}/>
                                        <TrSticker title={"Docker"} size={"small"}/>
                                        <TrSticker title={"Jenkins"} size={"small"}/>
                                    </div>
                                </div>
                            </WorkExperience>
                        </div>
                    </div>
                </div>
            </WorkExperience>
            <WorkExperience
                company={"Decathlon"}
                companyLogo={decathlonLogo}
                position={"Software Engineer"}
                startDate={"2023-09-04"}
                endDate={"2024-08-31"}
                description={"Software Engineer en contrat de professionnalisation, j'ai participé au développement d'une nouvelle application pour la gestion et l'optimisation des processus au sein des entrepôts de la marque."}
                keyPoints={["Transformation d'une application \"legacy\"", "Amélioration du procesus d'intégration des nouveaux arrivants"]}
            >
                <div className={"flex flex-row flex-wrap pt-4 gap-2"}>
                    <TrSticker title={"Java"} size={"small"}/>
                    <TrSticker title={"Spring Boot"} size={"small"}/>
                    <TrSticker title={"React"} size={"small"}/>
                    <TrSticker title={"Typescript"} size={"small"}/>
                    <TrSticker title={"PostgreSQL"} size={"small"}/>
                    <TrSticker title={"Cucumber"} size={"small"}/>
                    <TrSticker title={"Shell Scripting"} size={"small"}/>
                    <TrSticker title={"Docker"} size={"small"}/>
                    <TrSticker title={"Github Actions"} size={"small"}/>
                    <TrSticker title={"Kafka"} size={"small"}/>
                    <TrSticker title={"Datadog"} size={"small"}/>
                </div>
            </WorkExperience>
            <WorkExperience
                company={"Thales"}
                companyLogo={thalesLogo}
                position={"Software Architecting & Engineering Apprentice"}
                startDate={"2023-05-01"}
                endDate={"2023-08-31"}
                description={"Étude et implémentation d'un interface homme-machine graphique portable pour un équipement de communication avionique. J'étais en charge de concevoir une solution robuste permettant de communiquer sans fil au sein d'un réseau local. J'ai également mis en place un banc de tests permettant de simuler les différents acteurs agissant au sein du réseau afin de valider la fiabilité de la solution développée."}
                keyPoints={["Réalisation de maquettes et prototypes pour valider les choix d'interface utilisateur", "Conception et implémentation d'une solution de communication sans fil robuste", "Mise en place d'un banc de tests pour simuler les interactions au sein du réseau"]}
            >
                <div className={"flex flex-row flex-wrap pt-4 gap-2"}>
                    <TrSticker title={"React"} size={"small"}/>
                    <TrSticker title={"Typescript"} size={"small"}/>
                    <TrSticker title={"Podman"} size={"small"}/>
                    <TrSticker title={"LiFi"} size={"small"}/>
                    <TrSticker title={"Figma"} size={"small"}/>
                    <TrSticker title={"Linux"} size={"small"}/>
                </div>
            </WorkExperience>
        </section>
    );
};

export default Experiences;