import { useContext, useEffect } from "react";
import { authContext } from "../Context/AuthContext";
import FavDetails from "../Components/FavDetails";
import { FadeLoader } from "react-spinners";
 

const FavoriteMovie = () => {
    const { favmovie, setFavmovie, isLight, user, loading, setLoading } = useContext(authContext);

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/favmovie/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setFavmovie(data)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [user.email, setLoading])


    return (
        <div className={`p-2 md:p-4 min-h-screen ${isLight ? 'bg-gradient-to-r from-black to-gray-800' : 'white' } `}>
            <div>
                {
                    loading  &&  <div className="max-w-5xl mx-auto flex justify-center items-center"><FadeLoader color="#0b9659" /></div>
                }
                {
                    favmovie.length > 0 &&  (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                            {
                                favmovie.map((movie, i) => <FavDetails key={i} favMovie={movie} />)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FavoriteMovie;