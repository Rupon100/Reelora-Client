
const Blog = () => {
    return (
        <div className="bg-gradient-to-r from-black to-gray-800 min-h-screen">
            <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded hover:bg-slate-500 transition-all hover:cursor-pointer space-y-2 text-white">
                    <h2 className="font-bold text-2xl mb-2">Deadpool 2</h2>
                    <small className="bg-gray-800 p-1 rounded text-white py-2">Rating: 4.5</small>
                    <p>Deadpool 2 is a 2018 superhero comedy featuring Ryan Reynolds as the wisecracking antihero. The film delivers hilarious action, emotional depth, and introduces the X-Force team, including Cable and Domino.</p>
                </div>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded hover:bg-slate-500 transition-all hover:cursor-pointer space-y-2 text-white">
                    <h2 className="font-bold text-2xl mb-2">Despite</h2>
                    <small className="bg-gray-800 p-1 rounded text-white py-2">Rating: 4.0</small>
                    <p>Despite the Falling Snow (2016) is a romantic drama set in Cold War-era Moscow. It follows a spy torn between duty and love, uncovering secrets that transcend decades. Emotionally captivating storytelling.</p>
                </div>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded hover:bg-slate-500 transition-all hover:cursor-pointer space-y-2 text-white">
                    <h2 className="font-bold text-2xl mb-2">The Dune</h2>
                    <small className="bg-gray-800 p-1 rounded text-white py-2">Rating: 3.5</small>
                    <p>Dune (2021), directed by Denis Villeneuve, is a sci-fi epic based on Frank Herbert novel. It follows Paul Atreides journey on the desert planet Arrakis, exploring power, destiny, and survival.</p>
                </div>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded hover:bg-slate-500 transition-all hover:cursor-pointer space-y-2 text-white">
                    <h2 className="font-bold text-2xl mb-2">The Godzila</h2>
                    <small className="bg-gray-800 p-1 rounded text-white py-2">Rating: 3.0</small>
                    <p>Godzilla (2014) is a thrilling monster movie reboot that reintroduces the iconic kaiju. It follows humanity struggle as Godzilla battles colossal creatures, showcasing breathtaking visuals,</p>
                </div>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded hover:bg-slate-500 transition-all hover:cursor-pointer space-y-2 text-white">
                    <h2 className="font-bold text-2xl mb-2">Inside Out</h2>
                    <small className="bg-gray-800 p-1 rounded text-white py-2">Rating: 5.0</small>
                    <p>Inside Out (2015), a Pixar animated masterpiece, explores the emotions of an 11-year-old girl, Riley. Joy, Sadness, Anger, Fear, and Disgust navigate her mind, creating a heartfelt journey of self-discovery and emotional growth.</p>
                </div>
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded  transition-all hover:cursor-pointer space-y-2 text-white">
                    <h2 className="font-bold text-2xl mb-2">Inception</h2>
                    <small className="bg-gray-800 p-1 rounded text-white py-2">Rating: 4.5</small>
                    <p>Inception (2010), directed by Christopher Nolan, is a mind-bending sci-fi thriller about dreams within dreams. Dom Cobb, a skilled thief, must plant an idea in someone subconscious, blending action, emotion, and stunning visuals.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;

