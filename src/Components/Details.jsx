import { useContext, useEffect, useState } from "react";
import {  Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {
    const { user, loading, setLoading, movies, setMovies, favmovie, setFavmovie, isLight, isIn } = useContext(authContext);
    const navigate = useNavigate();
    const loaderData = useLoaderData();
    const { _id, email , poster, title, year, genre, msg, time, rating } = loaderData;

    const favAdd = {
        email: user.email,
        poster: poster,
        title: title,
        year: year, 
        genre: genre,
        msg: msg,
        time: time,
        rating: rating
    }

    const [newFav, setNewFav] = useState([]);
    const genres = Array.isArray(genre) ? genre : [genre];


    useEffect(() => {
        fetch('https://movie-server-gray.vercel.app/favmovie')
        .then(res => res.json())
        .then(data => {
            setNewFav(data);
        })
    } ,[])

    const handleDelete = (id) => {
        fetch(`https://movie-server-gray.vercel.app/allmovie/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = favmovie.filter(movie => movie._id != id);
            if(data.deletedCount > 0){
                setMovies(remaining)
                navigate('/allmovie');
                toast.success('Deleted Movie!', {
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
    
    const handleFavmovie = (id) => {
        const isAlreadyFav = newFav.some(item => item._id == id);
        if(isAlreadyFav){
            toast.error('Already added!', {
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
                return
        } else {

        fetch(`https://movie-server-gray.vercel.app/favmovie`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(favAdd)
        })
        .then(res => res.json())
        .then(data => {
            setNewFav(prev => [...prev, favAdd]);
            if(data.insertedId){
                toast.success('Added to favorite', {
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
        });
        return
    }
    }
   

    return (
        <div className={`min-h-screen flex justify-center ${isLight ? 'bg-gradient-to-r from-black to-gray-800 ' : 'bg-white'}  text-white`}>
            <div className="m-4 p-4 space-y-4 max-w-5xl mx-auto">
                <div>
                    <img className="rounded max-h-[600px] w-full object-cover" src={poster} alt="poster" />
                </div>
                <div className="space-y-4">
                    <h2 className={`font-semibold text-3xl md:text-5xl ${isLight ? 'text-white' : 'text-black'}`}>{title}</h2>
                    <div className={`flex gap-1 flex-col flex-wrap ${isLight ? 'text-white' : 'text-black'}`}>
                        <div className="py-2  font-semibold">
                          <span className="text-lg">Genre:</span>
                          <ul className="flex gap-2">
                            {genres.map((item, i) => (
                              <li className="bg-gray-600 p-1 rounded text-sm" key={i}>{item}</li> 
                            ))}
                          </ul>
                        </div>
                        <h4 className=" text-lg font-semibold">Duration: {time}minutes</h4>
                        <h4 className="py-2 text-lg font-semibold">Release year: {year}</h4>
                        <h4 className=" text-lg font-semibold">Rating: {rating}</h4>
                    </div>
                </div>
                <div className={`${isLight ? 'text-white' : 'text-black'}`}>
                    <p><span className="text-lg font-semibold">Description: </span>{msg}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Link onClick={() => handleDelete(_id)} className="p-2 border border-gray-400 rounded bg-white text-black hover:bg-gray-900 hover:text-white font-semibold">Delete Movie</Link>
                    <button onClick={() => handleFavmovie(_id)} className="p-2 border border-gray-400 rounded bg-white text-black hover:bg-gray-900 hover:text-white font-semibold">Add to Favorite</button>
                    <Link to={`/update/${_id}`} className="p-2 rounded border border-gray-400 bg-white text-black hover:bg-gray-900 hover:text-white font-semibold">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;