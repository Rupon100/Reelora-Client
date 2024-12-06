import { useContext } from "react";
import { authContext } from "../Context/AuthContext";

const Subscription = () => {
    const { isLight } = useContext(authContext);
    return (
        <div className="my-4 md:my-8 py-4 md:py-8 space-y-3 md:space-y-6 text-center">
            <div className={`space-y-4`}>
                <h1 className={`font-semibold text-2xl md:text-4xl ${isLight ? 'text-white' : 'text-black'}`}>Subscription</h1>
                <p className={`${isLight ? 'text-white' : 'text-black'}`}>Unlock ad-free access to a vast library of movies and shows. Enjoy HD/4K streaming, offline downloads, and multi-device support. Choose from Basic, Standard, or Premium plans to suit your needs. Start your free trial today!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
                <div className="p-2 bg-gray-300 rounded md:p-4 flex flex-col items-center gap-4 cursor-pointer">
                    <h4>Start plan</h4>
                    <h2><span className="font-semibold text-xl md:text-2xl">$9</span>/Week</h2>
                    <p className="flex-grow">Enjoy 7 days of unlimited, ad-free streaming with HD quality. Watch your favorite movies and shows anytime, on any device—no long-term commitment!</p>
                    <button className="btn bg-gray-800 hover:bg-gray-900 text-white">Get Started</button>
                </div>
                <div  className="p-2 bg-gray-300 rounded md:p-4 flex flex-col items-center gap-4 cursor-pointer">
                    <h4>Monthly plan</h4>
                    <h2><span className="font-semibold text-xl md:text-2xl">$13</span>/Basic</h2>
                    <p className="flex-grow">Enjoy unlimited ad-free streaming in HD/4K with our Monthly Package for just $29!</p>
                    <button className="btn bg-gray-800 hover:bg-gray-900 text-white">Get Started</button>
                </div>  
                <div  className="p-2 bg-gray-300 rounded md:p-4 flex flex-col items-center gap-4 cursor-pointer">
                    <h4>Yearly plan</h4>
                    <h2><span className="font-semibold text-xl md:text-2xl">$299</span>/Premium</h2>
                    <p className="flex-grow">Get a full year of unlimited ad-free streaming in HD/4K for only $299!</p>
                    <button className="btn bg-gray-800 hover:bg-gray-900 text-white">Get Started</button>
                </div>     
            </div>
            <div className="max-w-xl mx-auto bg-gradient-to-r from-pink-400 to-violet-400 flex justify-between items-center p-4 rounded cursor-pointer text-white">
                <h4 className="text-sm">Take a free trail</h4>
                <p className="text-sm">Start 13 days free trail</p>
            </div>
        </div>
    );
};



export default Subscription;