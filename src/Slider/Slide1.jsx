 
const Slide1 = () => {
    /*
    https://i.ibb.co.com/4FC83NZ/movie1.jpg
    https://i.ibb.co.com/WyJH4NZ/movie2.jpg
    https://i.ibb.co.com/KF3ZS5H/road-trip-with-raj-o4c2zo-Vhj-Sw-unsplash.jpg
    */
    return (
        <div className="w-full">
            <div
            className="min-h-screen md:min-h-[500px] flex justify-center items-center  relative"
            style={{
                backgroundImage: `url(https://i.ibb.co.com/KF3ZS5H/road-trip-with-raj-o4c2zo-Vhj-Sw-unsplash.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <div className="absolute inset-0 bg-black opacity-35"></div>
                <div className="p-4 f-full md:max-w-2xl flex flex-col justify-center items-center gap-2 md:gap-4 text-white text-center z-10">
                    <h2 className="font-semibold text-2xl md:text-4xl">Spider Man 2</h2>
                    <div className="flex items-center gap-3">
                        <span className="bg-red-400 px-2 py-1 rounded">4k</span>
                        <span className="font-semibold">2004</span>
                        <span className="font-semibold">superhero film </span>
                    </div>
                    <p>Spider-Man 2 delivers an unforgettable blend of action, heart, and heroism as Peter Parker battles Doc Ock while grappling with the cost of being a superhero.</p>
                </div>
            </div>
        </div>
    );
};

export default Slide1;