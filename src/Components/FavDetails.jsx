import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

 

const FavDetails = ({ favMovie }) => {
    const { favmovie, setFavmovie } = useContext(authContext);
    const { _id ,poster, title, genre, year, time, rating } = favMovie;

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/favmovie/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = favmovie.filter(movie => movie._id != id);
            setFavmovie(remaining);
        })
    }

    return (
        <div className="border max-h-[600px] rounded p-4 flex flex-col gap-3 text-white">
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
                <button onClick={() => handleDelete(_id)} className="bg-white font-semibold text-black p-2 rounded hover:bg-gray-400 transition-all">Delete</button>
            </div>
        </div>
    );
};

export default FavDetails;