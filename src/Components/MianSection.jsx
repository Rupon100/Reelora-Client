import Faq from "../Sections/Faq";
import Feature from "../Sections/Feature";
import Subscription from "../Sections/Subscription";
import Banner from "./Banner";

 

const MianSection = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="bg-gradient-to-r from-black to-gray-800 p-4 md:space-y-10">
                <Feature></Feature>
                <Subscription></Subscription>
                <Faq></Faq>
            </section>
        </div>
    );
};

export default MianSection;