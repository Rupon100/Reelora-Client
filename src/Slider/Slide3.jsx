
const Slide3 = () => {
    return (
        <div className="w-full">
        <div
        className="min-h-screen md:min-h-[500px] flex justify-center items-center  relative"
        style={{
            backgroundImage: `url(https://i.ibb.co.com/BncKzvx/money.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="p-4 f-full md:max-w-2xl flex flex-col justify-center items-center gap-2 md:gap-4 text-white text-center z-10">
                <h2 className="font-semibold text-2xl md:text-4xl text-white">Money Heist</h2>
                <div className="flex items-center gap-3">
                    <span className="bg-red-400 px-2 py-1 rounded">2k</span>
                    <span className="font-semibold">2020</span>
                    <span className="font-semibold">crime drama</span>
                </div>
                <p>Money Heist (originally La Casa de Papel) is a Spanish heist crime drama television series. It falls under the genres of crime, thriller, and heist.</p>
            </div>
        </div>
    </div>
    );
};

export default Slide3;