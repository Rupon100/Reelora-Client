
const Feature = () => {
    return (
        <div className="my-4 flex flex-col gap-4 md:gap-8">
            <h1 className="text-white text-2xl md:text-4xl font-semibold">Featured Movies</h1>
            <div className="carousel carousel-center bg-gray-800 rounded-box space-x-4 p-2 md:p-4">
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                  className="rounded-box" />
              </div>
              {/* <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                  className="rounded-box" />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                  className="rounded-box" />
              </div> */}
            </div>
        </div>
    );
};

export default Feature;