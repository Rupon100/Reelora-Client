 
const Slide2 = () => {
    return (
        <div className="w-full">
            <div
            className="min-h-screen md:min-h-[500px] flex justify-center items-center  relative"
            style={{
                backgroundImage: `url(https://i.ibb.co.com/DGRSfpn/iron-man.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <div className="absolute inset-0 bg-black opacity-45"></div>
                <div className="p-4 f-full md:max-w-2xl flex flex-col justify-center items-center gap-2 md:gap-4 text-white text-center z-10">
                    <h2 className="font-semibold text-2xl md:text-4xl text-white">Iron Man</h2>
                    <div className="flex items-center gap-3">
                        <span className="bg-red-400 px-2 py-1 rounded">HD</span>
                        <span className="font-semibold">2014</span>
                        <span className="font-semibold">superhero film </span>
                    </div>
                    <p>Iron Man is a genius billionaire, philanthropist, and superhero who uses his advanced technology and powerful armor to protect the world.</p>
                </div>
            </div>
        </div>
    );
};

export default Slide2;