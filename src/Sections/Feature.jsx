import { useContext, useEffect, useState } from "react";
import Toprated from "../Components/Toprated";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { FadeLoader } from "react-spinners";

const Feature = () => {
    const { isLight, loading, setLoading } = useContext(authContext);
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('https://movie-server-gray.vercel.app/')
        .then(res => res.json())
        .then(data => {
           const topMovies = data.sort((a,b) => b.rating - a.rating).slice(0, 6);
           setFeatured(topMovies)
        })
        .finally(() => {
          setLoading(false)
        })
    } ,[]);
   
    return (
        <div className={`my-4 flex flex-col gap-4 md:gap-8`}>
            <h1 className= {`${isLight ? 'text-white'  : 'text-black'} text-2xl md:text-4xl font-semibold`}>Featured Movies</h1>
            <div className={`carousel carousel-center ${isLight ? 'bg-gray-800' : 'bg-gray-500'} rounded-box space-x-4 p-2 md:p-4`}>
                <div className="carousel-item space-x-4 py-2 px-4">
                    {    
                        loading  &&  <div className="max-w-5xl mx-auto flex justify-center items-center"><FadeLoader color="#0b9659" /></div>
                    }
                    {
                        featured.length > 0 && (
                            <div className="carousel-item space-x-4 py-2 px-4">
                                {
                                  featured.map((item, i) => <Toprated key={i} movie={item}></Toprated>)
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <Link className="p-1 font-semibold bg-white rounded self-start text-sm border border-gray-400" to='/allmovie'>See All Movies</Link>
        </div>
    );
};

export default Feature;