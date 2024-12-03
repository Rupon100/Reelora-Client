import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";

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

            <main>
                <Outlet></Outlet>
            </main>

            <footer>

            </footer>
        </div>
    );
};

export default Root;