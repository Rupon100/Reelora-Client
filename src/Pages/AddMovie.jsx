import { useState } from 'react';
import { Rating } from 'react-simple-star-rating' 
// import { type } from './../../node_modules/react-spinners/cjs/helpers/props.d';

const AddMovie = () => {

    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate);
        console.log('selected rating is: ', rate)
    }

    const addMovie = (e) => {
        e.preventDefault();
        const form = e.target;
        const poster = form.value.poster; //check for link
        const title = form.value.title; //min 2 char
        const genre = form.value.genre; //
        const time = form.value.time; //must not empty grater then 60 as minitues input
        const year = form.value.year; //must check given input isn't empty
        const ratingg = rating; // must
        const msg = form.value.msg; //min 10 char

        const newMovie = { poster, title, genre, time, year, ratingg, msg }
        console.log(newMovie)

    }
    

    return (
        <div className="min-h-screen m-2 md:m-4">
            <h1 className="font-semibold text-2xl md:text-4xl text-center md:my-4">Add a movie</h1>
            <div>
                <form onSubmit={addMovie} className="card-body w-full space-y-4 md:space-y-6">
                  <div className='flex flex-col gap-2 md:gap-4 md:flex-row w-full'>
                    <div className="form-control w-full md:w-1/2">
                      <label className="label">
                        <span className="label-text">Movie Poster</span>
                      </label>
                      <input type="text" placeholder="Movie Poster" name="poster" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:w-1/2">
                      <label className="label">
                        <span className="label-text">Movie Title</span>
                      </label>
                      <input type="text" placeholder="Movie Title" name="title" className="input input-bordered" required />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 md:gap-4 md:flex-row items-start'>
                    <div className='w-full md:w-1/2'>
                        <label className="label">
                           <span className="label-text">Genre type</span>
                        </label>
                        <select name='genre' className="select select-bordered w-full">
                          <option disabled selected>select one</option>
                          <option>Comedy</option>
                          <option>Drama</option>
                          <option>Horror</option>
                        </select>
                    </div>
                    <div className="form-control w-full md:w-1/2">
                      <label className="label">
                        <span className="label-text">Duration</span>
                      </label>
                      <input type="text" placeholder="Movie Duration" name="time" className="input input-bordered" required />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 md:gap-4 md:flex-row'>
                    <div className='w-full md:w-1/2'>
                       <label className="label">
                            <span className="label-text">Release Year</span>
                       </label>
                       <select name='year' className="select select-bordered w-full">
                         <option disabled selected>select one</option>
                         <option>2024</option>
                         <option>2023</option>
                         <option>2022</option>
                       </select>
                    </div>
                    <div className="w-1/2">
                       <label className="label">
                            <span className="label-text">Rating</span>
                       </label>
                      <Rating onClick={handleRating} className='' />
                    </div>
                  </div>
                  <div className='w-full border'>
                    <textarea name="msg" className="resize-none w-full p-4 md:p-10" placeholder="Give a summery"></textarea>
                  </div>
                  <button type='submit' className='btn btn-block font-semibold'>Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;