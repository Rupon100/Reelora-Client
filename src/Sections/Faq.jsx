import { useContext } from "react";
import { authContext } from "../Context/AuthContext";

const Faq = () => {
     const { isLight } = useContext(authContext);
    return (
        <div className="my-4 md:my-8 py-4 md:py-8 space-y-3 flex flex-col items-center gap-2">
            <h1 className={`font-semibold text-2xl md:text-4xl ${isLight ? 'text-white' : 'text-black'}`}>Frequently Asked Questions</h1>
            <div className="max-w-4xl mx-auto space-y-2">
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-lg font-medium">What is Reelora?</div>
                  <div className="collapse-content">
                    <p className="text-sm">Reelora is a movie portal website where users can explore, discover, and learn about movies from various genres and regions.</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-lg font-medium">What unique feature does Reelora offer to movie lovers?</div>
                  <div className="collapse-content">
                    <p className="text-sm">Reelora provides curated recommendations, user reviews, and detailed information about movies, including cast, ratings, and trailers.</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-lg font-medium">How can users interact with Reelora?</div>
                  <div className="collapse-content">
                    <p className="text-sm">Users can search for movies, leave reviews, rate films, and create personalized watchlists.</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-lg font-medium">Does Reelora support multiple languages?</div>
                  <div className="collapse-content">
                    <p className="text-sm">Yes, Reelora supports multiple languages to cater to a global audience.</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-lg font-medium">What technologies power Reelora?</div>
                  <div className="collapse-content">
                    <p className="text-sm">Reelora is built using modern web development technologies like ReactJS, Tailwind CSS, and integrates with APIs for movie data.</p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-lg font-medium">Is Reelora mobile-friendly?</div>
                  <div className="collapse-content">
                    <p className="text-sm">Yes, Reelora is fully responsive and optimized for mobile and tablet devices.</p>
                  </div>
                </div>
            </div>
           
            
            
        </div>
    );
};

export default Faq;