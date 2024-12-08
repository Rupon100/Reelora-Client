import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

const FavDetails = ({ favMovie }) => {
    const { favmovie, setFavmovie, isLight } = useContext(authContext);
    const { _id, poster, title, genre, year, time, rating } = favMovie;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/favmovie/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {

               const remaining = favmovie.filter(movie => movie._id != id);

               setFavmovie(remaining);
              
               toast.success('Deleted', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            }            
        })
    }

    return (
        <div className={`border max-h-[600px] rounded p-4 flex flex-col gap-3 ${isLight ? 'text-white' : 'text-black border-black'} text-white`}>
            <div >
              <img className="h-[200px] w-full object-cover" src={poster} alt="poster" />
            </div>
            <div className={` flex-grow space-y-2  ${isLight ? 'text-white' : 'text-black'} `}>
              <h2 className="text-lg font-semibold md:text-xl">{title}</h2>
              <div className="flex items-center flex-wrap gap-2">
                <p className="font-semibold">{genre}</p>
                <p className="border p-1 rounded">{time} minutes</p>
                <p className="border p-1 rounded">Release: {year}</p>
              </div>
              <h4>Rating: {rating}.0</h4>
            </div>
            <div>
                <button onClick={() => handleDelete(_id)} className="bg-white font-semibold border border-gray-400 text-black p-2 rounded hover:bg-gray-400 transition-all">Delete</button>
            </div>
        </div>
    );
};

export default FavDetails;