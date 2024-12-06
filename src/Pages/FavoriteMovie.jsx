import { useContext, useEffect } from "react";
import { authContext } from "../Context/AuthContext";
import FavDetails from "../Components/FavDetails";

 

const FavoriteMovie = () => {
    const { favmovie, setFavmovie, isLight } = useContext(authContext);

    useEffect(() => {
        fetch('http://localhost:5000/favmovie')
        .then(res => res.json())
        .then(data => {
            setFavmovie(data);
        })
    } ,[])

   

    return (
        <div className={`p-2 md:p-4 min-h-screen ${isLight ? 'bg-gradient-to-r from-black to-gray-800' : 'white' } `}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {
                    favmovie.map((movie, i) => <FavDetails key={i} favMovie={movie}></FavDetails>)
                }
            </div>
        </div>
    );
};

export default FavoriteMovie;