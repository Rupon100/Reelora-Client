import { useContext, useEffect, useState } from "react";
import Movie from "../Components/Movie";
import { authContext } from "../Context/AuthContext";

 

const Allmovie = () => {
    const {movies, setMovies, isLight} = useContext(authContext);
    const  [ originalMovies, setOriginalMovies ] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then(data => {
            setMovies(data);
            setOriginalMovies(data);
        })
    } ,[]);

    const handleSearch = (query) => {
        if(!query.trim()){
            setMovies(originalMovies);
            return;
        }
        const querySearch = movies.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase())
        ) 
        setMovies(querySearch);
    }

    return (
        <div className={`${isLight ? 'bg-gradient-to-r  from-black to-gray-800' : 'bg-white'} p-2 md:p-4 min-h-screen `}>
            <div className="flex justify-center items-center mb-4">
                <label className="input input-bordered flex items-center gap-2">
                  <input onChange={(e) => handleSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd" />
                  </svg>
                </label>
            </div>

           <div className="max-w-5xl mx-auto">
                {
                    movies.length === 0 ? (
                        <div>
                            <h1 className={`font-semibold text-2xl md:text-4xl  ${isLight ? 'text-white' : 'text-black'} `}>No Data Found</h1>
                        </div>
                    ) : (
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {
                            movies.map((movie, i) => <Movie key={i} movie={movie}></Movie>)
                        }
                        </div>
                    )
                }
           </div>

        </div>
    );
};

export default Allmovie;