import { useEffect } from "react";
import { Link } from "react-router-dom";


const Movie = ({ movie }) => {
    const { _id ,poster, title, genre, year, time, rating } = movie;

    

    return (
        <div className="border rounded p-4 flex flex-col gap-3 text-white">
            <div >
              <img className="min-h-[200px] w-full object-cover" src={poster} alt="poster" />
            </div>
            <div className="flex-grow space-y-2">
              <h2 className="text-lg font-semibold md:text-xl">{title}</h2>
              <div className="flex items-center flex-wrap gap-2">
                <p className="font-semibold">{genre}</p>
                <p className="border p-1 rounded">{time} minutes</p>
                <p className="border p-1 rounded">Release: {year}</p>
              </div>
              <h4>Rating: {rating}.0</h4>
            </div>
            <div>
                <Link to={`/details/${_id}`} className="bg-white font-semibold text-black p-2 rounded hover:bg-gray-400 transition-all">See Details</Link>
            </div>
        </div>
    );
};

export default Movie;