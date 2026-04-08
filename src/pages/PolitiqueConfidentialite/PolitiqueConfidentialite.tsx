import React from "react";
import Page from "../../layouts/Page";
import LegalCategory from "../../components/LegalCategory/LegalCategory.tsx";

const PolitiqueConfidentialite: React.FC = () => {
    return (
        <Page>
            <div className={"flex flex-col w-full pt-30 gap-4 h-full"}>
                <a href={"/"} className={"text-gray-500"}>← Retour à la page d'accueil</a>
                <h1 className={"text-center text-2xl font-bold"}>Politique de confidentialité</h1>
                <LegalCategory title={"1. Informations générales"}>
                    <p>
                        Le site "Théo Rondoux" accessible à l’adresse https://thrx.fr est édité par Théo Rondoux, responsable du traitement des données personnelles collectées via ce site.
                    </p>
                </LegalCategory>
                <LegalCategory title={"2. Données collectées"}>
                    <p>
                        Ce site ne collecte aucune donnée personnelle. Aucune information permettant d’identifier les visiteurs n’est enregistrée ou partagée. Aucun cookie ou service tiers n’est utilisé pour suivre la navigation.
                        <br/>Votre visite sur ce site est donc entièrement anonyme.
                    </p>
                </LegalCategory>
                <div className={"flex flex-col w-full"}>
                    <LegalCategory title={"3. Contact"}>
                        <div className={"flex flex-col"}>
                            <p>Pour toute question concernant la confidentialité, vous pouvez contacter le propriétaire du site à l'adresse email suivante :</p>
                            <a href={"mailto:theo.rondoux@outlook.fr"} className={"text-blue-500 underline w-fit"}>
                                theo.rondoux@outlook.fr
                            </a>
                        </div>
                    </LegalCategory>
                </div>
            </div>
        </Page>
    )
};

export default PolitiqueConfidentialite;