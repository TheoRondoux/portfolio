import Page from "../../layouts/Page";
import LegalCategory from "../../components/LegalCategory/LegalCategory";

const MentionsLegales = () => {
    return (
        <Page>
            <div className={"flex flex-col w-full pt-30 gap-4"}>
                <a href={"/"} className={"text-gray-500"}>← Retour à la page d'accueil</a>
                <h1 className={"text-center text-2xl font-bold"}>Mentions légales</h1>
                <p className={"text-justify text-lg"}>
                    Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie
                    numérique, il est précisé aux utilisateurs du site "Théo Rondoux" l'identité des différents
                    intervenants dans le cadre de sa réalisation et de son suivi.
                </p>
                <LegalCategory title={"1. Édition du site"}>
                    <p>
                        Le présent site, accessible à l’URL https://thrx.fr (ci-après le « Site »), est édité par Théo
                        Rondoux,
                        résidant 83 route nationale 59152 CHERENG, de nationalité Française (France), né(e) le
                        28/05/2001.
                    </p>
                </LegalCategory>
                <LegalCategory title={"2. Hébergement"}>
                    <p>
                        Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP 80157 - 59053 Roubaix
                        Cedex 1, (contact téléphonique ou email : 1007).
                    </p>
                </LegalCategory>
                <LegalCategory title={"3. Directeur de la publication"}>
                    <p>
                        Le Directeur de la publication du Site est Théo Rondoux, ci-après l'« Éditeur ».
                    </p>
                </LegalCategory>
                <LegalCategory title={"4. Nous contacter"}>
                    <p>
                        Par téléphone : +33 6 46 58 93 06
                        <br/>Par email : theo.rondoux@outlook.fr
                    </p>
                </LegalCategory>
                <LegalCategory title={"5. Données personnelles"}>
                    <p>
                        Le traitement de vos données à caractère personnel est régi par notre Politique de
                        confidentialité, disponible depuis la section "Politique de confidentialité", conformément au
                        Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
                    </p>
                </LegalCategory>
                <LegalCategory title={"6. Limitation de responsabilité"}>
                    <p>
                        L'Éditeur ne peut garantir le fonctionnement du site de façon ininterrompu et exempt de toute
                        erreur et n’est tenu à aucune obligation de moyen en ce qui concerne le fonctionnement et la
                        continuité du service.
                    </p>
                    <p>
                        L'Éditeur ne saurait être responsable de tous préjudices directs ou indirects résultant de
                        l’utilisation du Site, et ce quelle qu’en soit la cause ; notamment il ne saurait être
                        responsable de l’altération ou de l’accès frauduleux à des données et/ou de la transmission
                        accidentelle par le biais de virus ou toute autre menace.
                    </p>
                    <p>
                        De même la responsabilité de l'Éditeur ne saurait être engagée pour des faits dus à un cas de
                        force majeure, les pannes et les problèmes d’ordre technique concernant le matériel, les
                        programmes et logiciels ou le réseau Internet pouvant le cas échéant entraîner la suspension ou
                        la cessation du service.
                    </p>
                    <p>
                        Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule
                        responsabilité. En conséquence, l'Éditeur ne saurait être tenu responsable d’un quelconque
                        dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives
                        au téléchargement.
                    </p>
                </LegalCategory>
                <LegalCategory title={"7. Hyperliens"}>
                    <p>
                        Le Site peut contenir des liens hypertextes redirigeant vers d’autres sites. Si le l’utilisateur
                        du Site visite l’un de ces sites, l’Éditeur l’invite à prendre connaissance de leurs politiques,
                        notamment en matière de protection des données à caractère personnel.
                    </p>
                    <p>
                        En outre, l’Éditeur n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et ne
                        prend par conséquence aucun engagement concernant tout autre site auquel l’utilisateur du Site
                        pourrait avoir accès via le Site et ne serait en aucune façon être responsable du contenu,
                        fonctionnement et de l’accès à ces sites, ni des politiques ni des pratiques d’autres sociétés.
                        Les risques liés à cette utilisation incombent pleinement à l’utilisateur, qui doit se conformer
                        à leurs conditions d’utilisation.
                    </p>
                    <p>
                        Toute création d’un lien vers le site est soumise à l’approbation préalable de l’Éditeur.
                        L’Éditeur se réserve le droit de demander la suppression d’un lien qu’il estime non conforme à
                        sa ligne éditoriale.
                    </p>
                </LegalCategory>
            </div>
        </Page>
    )
};

export default MentionsLegales;