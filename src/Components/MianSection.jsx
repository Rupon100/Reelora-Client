import { useContext } from "react";
import Faq from "../Sections/Faq";
import Feature from "../Sections/Feature";
import Subscription from "../Sections/Subscription";
import Banner from "./Banner";
import { authContext } from "../Context/AuthContext";

const MianSection = () => {
    const { isLight } = useContext(authContext);
    return (
        <div>
            <Banner></Banner>
            <section className={`${isLight ? 'bg-gradient-to-r from-black to-gray-800 ' :  'bg-white text-black' } p-4 md:space-y-10`}>
                <Feature></Feature>
                <Subscription></Subscription>
                <Faq></Faq>
            </section>
        </div>
    );
};

export default MianSection;