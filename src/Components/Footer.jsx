import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center text-black bg-gray-200 p-10 flex flex-col items-center gap-4">
              <aside>
                <ul className="flex flex-col gap-1 md:gap-2 md:flex-row">
                    <Link to='' className="text-xs underline">Home</Link>
                    <Link to='' className="text-xs underline">Policy</Link>
                    <Link to='' className="text-xs underline">Services</Link>
                    <Link to='' className="text-xs underline">Help</Link>
                </ul>
                <p className="font-bold">
                  Heaven of Movies
                  <br />
                  Providing reliable Movie service from 2022
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
              </aside>
              <nav>
                <div className="grid grid-flow-col gap-4">
                  <Link to='/' className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">Reelora</Link>
                </div>
              </nav>
            </footer>
        </div>
    );
};

export default Footer;