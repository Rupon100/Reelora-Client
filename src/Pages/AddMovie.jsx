import { useState } from 'react';
import { Rating } from 'react-simple-star-rating' 
// import { type } from './../../node_modules/react-spinners/cjs/helpers/props.d';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const AddMovie = () => {

    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    let errorMessages = [];
    let valid = true;

    const handleRating = (rate) => {
        setRating(rate);
        // return;
    }

    const handleGenre = (e) => {
      const selectedGenre = e.target.value;
      setGenre(selectedGenre);
      // return;
    }

    const handleYear = (e) => {
      const selectedYear = e.target.value;
      setYear(selectedYear);
      // return;
    }

    
    const addMovie = (e) => {
      e.preventDefault();
      errorMessages = [];
      valid = true;

      const form = e.target;
      const poster = form.poster.value; //check for link
      const title = form.title.value; //min 2 char
      const time = Number(form.time.value); //must not empty grater then 60 as minitues input
      const msg = form.msg.value; //min 10 char

      const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i;
      if(!urlRegex.test(poster)){
        errorMessages.push('Enter a valid URL!');
        valid = false;
      }

      if(!title || title.length < 2){
        errorMessages.push('title must be at least 2 char!');
        valid = false;
      }

       
      if(isNaN(time) || time <= 60){
        errorMessages.push('Duration must be grater then 60!')
        valid = false;
      }

      if(!msg || msg.length < 10){
        errorMessages.push('Message must be at least 10 char')
        valid = false;
      }

      if(!rating || rating < 0){
        errorMessages.push('must add a rating!')
        valid = false;
      }

      if(!genre){
        errorMessages.push('select a Genre!');
        valid = false;
      }

      if(!year){
        errorMessages.push('Select a year!')
        valid = false;
      }

      if(!valid){
        toast.error(errorMessages.forEach((error) => {
          toast.error(error, {
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
        }));
          return
      }else{
        const newMovie = { poster, title, genre, year, time, msg, rating };
        console.log("Movie added successfully",newMovie);
        

        toast.success('Successfully added!', {
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
                        <select onChange={handleGenre} value={genre} name='genre' className="select select-bordered w-full">
                          <option disabled selected value={''}>select one</option>
                          <option>Comedy</option>
                          <option>Drama</option>
                          <option>Horror</option>
                        </select>
                    </div>
                    <div className="form-control w-full md:w-1/2">
                      <label className="label">
                        <span className="label-text">Duration(min)</span>
                      </label>
                      <input type="text" placeholder="Movie Duration" name="time" className="input input-bordered" required />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 md:gap-4 md:flex-row'>
                    <div className='w-full md:w-1/2'>
                       <label className="label">
                            <span className="label-text">Release Year</span>
                       </label>
                       <select name='year' onChange={handleYear} value={year} className="select select-bordered w-full">
                         <option disabled selected value={''}>select one</option>
                         <option>2024</option>
                         <option>2023</option>
                         <option>2022</option>
                         <option>2021</option>
                         <option>2020</option>
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