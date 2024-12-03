import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Feature from "../Sections/Feature";
import Faq from "../Sections/Faq";
import Subscription from "../Sections/Subscription";

const Root = () => {
    return (
        <div>
            <header>
                <nav>
                   <Navbar></Navbar>
                </nav>
                <div>
                    <Banner></Banner>
                </div>
            </header>
            <section className="bg-gradient-to-r from-black to-gray-800 p-4 md:space-y-10">
                <Feature></Feature>
                <Subscription></Subscription>
                <Faq></Faq>
            </section>
            <main>
                <Outlet></Outlet>
            </main>

            <footer>

            </footer>
        </div>
    );
};

export default Root;