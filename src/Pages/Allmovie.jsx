import { useContext, useEffect, useState } from "react";
import Movie from "../Components/Movie";
import { authContext } from "../Context/AuthContext";

 

const Allmovie = () => {
    // const [movies, setMovies] = useState([]);
    const {movies, setMovies} = useContext(authContext);

    useEffect(() => {
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then(data => {
            setMovies(data)
        })
    } ,[]);

    return (
        <div className="bg-gradient-to-r from-black to-gray-800 p-2 md:p-4 min-h-screen ">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {
                    movies.map((movie, i) => <Movie key={i} movie={movie}></Movie>)
                }
           </div>
        </div>
    );
};

export default Allmovie;