const TrFooter = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className={"flex flex-col gap-2 w-full mt-20 mb-10 text-gray-500"}>
            <p className={"text-center"}>{currentYear} © Théo Rondoux. Tous droits réservés.</p>
            <div className={"flex flex-row gap-2 justify-center"}>
                <a href={"/mentions-legales"}>Mentions légales</a>
                <p>•</p>
                <a href={"/politique-confidentialite"}>Politique de confidentialité</a>
            </div>
        </div>
    );
};

export default TrFooter;