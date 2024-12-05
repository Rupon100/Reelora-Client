import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const loaded = useLoaderData();
    const { _id, poster, title, genre, year, time, msg, rating } = loaded;

    const handleDelete = (id) => {
        
    }
   
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black to-gray-800 text-white">
            <div className="m-2 md:m-4 p-2 md:p-4 space-y-4 md:space-y-8">
                <div>
                    <img className="rounded max-h-[400px] w-full object-cover" src={poster} alt="poster" />
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
                <div className="">
                    <p>{msg}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Link to='/allmovie' onClick={() => handleDelete(_id)} className="p-2 rounded bg-white text-black hover:bg-gray-900 hover:text-white font-semibold">Delete Movie</Link>
                    <Link className="p-2 rounded bg-white text-black hover:bg-gray-900 hover:text-white font-semibold">Add to Favorite</Link>
                    <Link className="p-2 rounded bg-white text-black hover:bg-gray-900 hover:text-white font-semibold">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;