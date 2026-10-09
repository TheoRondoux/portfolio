import {IconCrane, IconExternalLink, IconFingerprint, IconNews, IconSettings} from "@tabler/icons-react";
import React from "react";
import TrCard from "../../../../components/TrCard/TrCard.tsx";

import EonLogo from "../../../../assets/img/projects/eon.png";
import TrButton from "../../../../components/TrButton";
import TrSticker from "../../../../components/TrSticker";

const Projets: React.FC = () => {
    return (
        <section id="projets" className={"w-full flex flex-col gap-4 mt-10 lg:mt-20 scroll-mt-20"}>
            <div className={"w-full flex flex-row gap-3 items-end"}>
                <IconCrane className={"size-9"}/>
                <h2 className={"text-4xl font-bold"}>En coulisses</h2>
            </div>
            <p className={"text-lg text-gray-500 text-center"}>Je crée, j’expérimente et je transforme des idées en projets concrets, en explorant différentes approches et en faisant évoluer chaque solution au fil du temps.</p>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                <TrCard>
                    <div className={"relative flex flex-row items-center gap-2"}>
                        <IconNews size={60} className={"absolute -top-2 -right-2 opacity-10"}/>
                        <div className={"p-2 bg-[#080c16] rounded-xl border-2 border-[#97D2EF]"}>
                            <img src={EonLogo} alt={"Eon Logo"} className={"size-6"} />
                        </div>
                        <h3 className={"text-xl font-bold"}>Eon AI - Daily News</h3>
                    </div>
                    <div className={"flex flex-col items-center gap-4 pt-6 text-lg flex-1"}>
                        <p>Eon est un agent d’intelligence artificielle conçu pour analyser, filtrer et résumer les évolutions majeures du domaine de l’IA.</p>
                        <p>Construit avec n8n, il s’appuie sur un workflow automatisé combinant agrégation de flux RSS, nettoyage des données et génération de résumés via des modèles de langage. Ce pipeline transforme un flux continu d’informations en un briefing quotidien clair et structuré.</p>
                    </div>
                    <div className={"block w-full h-px bg-black/10 my-4"} />
                    <div className={"flex flex-col md:flex-row justify-between gap-4"}>
                        <div className={"flex flex-row gap-1 w-full md:w-1/2 flex-wrap"}>
                            <TrSticker size={"small"} title={"IA"} />
                            <TrSticker size={"small"} title={"n8n"} />
                            <TrSticker size={"small"} title={"Automatisation"} />
                            <TrSticker size={"small"} title={"React"} />
                            <TrSticker size={"small"} title={"Tailwindcss"} />
                        </div>
                       <div className={"flex flex-row justify-center md:justify-end w-full md:w-1/2 h-fit"}>
                           <TrButton
                               endSlot={<IconExternalLink />}
                               onClick={() => window.open("https://eon.thrx.fr", "_blank")}
                           >
                               <span className={"font-bold"}>Rencontrez Eon</span>
                           </TrButton>
                       </div>
                    </div>
                </TrCard>
                <TrCard>
                    <div className={"relative flex flex-row items-center gap-2"}>
                        <IconSettings size={60} className={"absolute -top-2 -right-2 opacity-10"}/>
                        <div className={"p-2 bg-purple-800 rounded-xl text-white"}>
                            <IconFingerprint />
                        </div>
                        <h3 className={"text-xl font-bold"}>Authelia Manager</h3>
                    </div>
                    <div className={"flex flex-col items-center gap-4 pt-6 text-lg flex-1"}>
                        <p>Interface web d'administration pour Authelia, permettant de gérer simplement les utilisateurs, groupes et règles d'accès depuis une interface graphique.</p>
                        <p>Le projet repose sur un frontend React/Vite et une API Node.js servant de couche intermédiaire avec les fichiers de configuration d'Authelia.</p>
                    </div>
                    <div className={"block w-full h-px bg-black/10 my-4"} />
                    <div className={"flex flex-col md:flex-row justify-between gap-4"}>
                        <div className={"flex flex-row gap-1 w-full md:w-1/2 flex-wrap"}>
                            <TrSticker size={"small"} title={"React"} />
                            <TrSticker size={"small"} title={"Tailwindcss"} />
                            <TrSticker size={"small"} title={"Node.js"} />
                            <TrSticker size={"small"} title={"Administration"} />
                        </div>
                       <div className={"flex flex-row justify-center md:justify-end w-full md:w-1/2 h-fit"}>
                           <TrButton
                               endSlot={<IconExternalLink />}
                               onClick={() => window.open("https://github.com/TheoRondoux/authelia-manager", "_blank")}
                           >
                               <span className={"font-bold"}>Découvrir</span>
                           </TrButton>
                       </div>
                    </div>
                </TrCard>
            </div>
        </section>
    );
}

export default Projets;