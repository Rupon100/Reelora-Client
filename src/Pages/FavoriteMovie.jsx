import { useContext, useEffect } from "react";
import { authContext } from "../Context/AuthContext";

 

const FavoriteMovie = () => {
    const { favmovie, setFavmovie } = useContext(authContext);
    // useEffect(() => {
    //     fetch('http://localhost:5000/favmovie')
    //     .then(res => res.json())
    //     .then(data => {
    //         setFavmovie(data)
    //     })
    // } ,[])

    return (
        <div>
            fav data here: {favmovie.length}
        </div>
    );
};

export default FavoriteMovie;