import { useContext} from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";


const Movie = ({ movie }) => {
    const { _id ,poster, title, genre, year, time, rating } = movie;
    const { isLight } = useContext(authContext);
    const genres = Array.isArray(genre) ? genre : [genre];
    return (
        <div className={`border max-h-[600px] rounded p-4 flex flex-col gap-3 ${isLight ? 'text-white' : 'text-black border-gray-700'}`}>
            <div >
              <img className="h-[200px] w-full object-cover" src={poster} alt="poster" />
            </div>
            <div className="flex-grow space-y-2">
              <h2 className="text-lg font-semibold md:text-xl">{title}</h2>
              <div className="flex flex-col items-start flex-wrap gap-2">
                <div className="py-2">
                          <span className="text-lg">Genre:</span>
                          <ul className="flex gap-2">
                            {genres.map((item, i) => (
                              <li className="bg-gray-500 p-1 text-sm rounded" key={i}>{item}</li> 
                            ))}
                          </ul>
                </div>
                <p className="border p-1 rounded">{time} minutes</p>
                <p className="border p-1 rounded">Release: {year}</p>
              </div>
              <h4>Rating: {rating}.0</h4>
            </div>
            <div>
                <Link to={`/details/${_id}`} className="bg-white font-semibold border border-gray-400 text-black p-2 rounded hover:bg-gray-400 transition-all">See Details</Link>
            </div>
        </div>
    );
};

export default Movie;