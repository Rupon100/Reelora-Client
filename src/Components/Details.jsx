import { useContext, useEffect, useState } from "react";
import {  Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

const Details = () => {
    const { loading, setLoading, movies, setMovies, favmovie, setFavmovie } = useContext(authContext);
    const [currestDetails, setCurrentDetails] = useState([]);
    const navigate = useNavigate();
    const loaderData = useLoaderData();
    const {  _id ,email ,poster, title, genre, year, time, msg, rating } = loaderData;
    console.log(loaderData);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/allmovie/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = movies.filter(movie => movie._id != id);
            setMovies(remaining)
            console.log('Deleted data: ', data)
            navigate('/allmovie');
        })
    }

    const handleFavmovie = () => {
        fetch(`http://localhost:5000/favmovie`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loaderData)
        })
        .then(res => res.json())
        .then(data => {
            console.log('data added to fav');
            // setFavmovie((pre) => [...pre, loaderData])
            // console.log(favmovie)
        })
    }

   
    return (
        <div className="min-h-screen flex justify-center bg-gradient-to-r from-black to-gray-800 text-white">
            <div className="m-4 p-4 space-y-8 max-w-5xl mx-auto">
                <div>
                    <img className="rounded max-h-[600px] w-full object-cover" src={poster} alt="poster" />
                </div>
                <div className="space-y-4">
                    <h2 className="font-semibold text-3xl md:text-5xl">{title}</h2>
                    <div className="flex gap-4 flex-wrap">
                        <h4 className="p-2 border rounded font-semibold">Genre: {genre}</h4>
                        <h4 className="p-2 border rounded font-semibold">Duration: {time}minutes</h4>
                        <h4 className="p-2 border rounded font-semibold">Release year: {year}</h4>
                        <h4 className="p-2 border rounded font-semibold">Rating: {rating}</h4>
                    </div>
                </div>
                <div className=" ">
                    <p>{msg}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Link onClick={() => handleDelete(_id)} className="p-2 rounded bg-white text-black hover:bg-gray-900 hover:text-white font-semibold">Delete Movie</Link>
                    <button onClick={handleFavmovie} className="p-2 rounded bg-white text-black hover:bg-gray-900 hover:text-white font-semibold">Add to Favorite</button>
                    <button className="p-2 rounded bg-white text-black hover:bg-gray-900 hover:text-white font-semibold">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Details;