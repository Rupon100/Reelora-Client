import { useContext, useState } from 'react';
import { Rating } from 'react-simple-star-rating' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { authContext } from '../Context/AuthContext';

const AddMovie = () => {

    const { user } = useContext(authContext);
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    let errorMessages = [];
    let valid = true;

    const handleRating = (rate) => {
        setRating(rate);
    }

    const handleGenre = (e) => {
      const selectedGenre = e.target.value;
      setGenre(selectedGenre); 
    }

    const handleYear = (e) => {
      const selectedYear = e.target.value;
      setYear(selectedYear); 
    }

    
    const addMovie = (e) => {
      e.preventDefault();
      errorMessages = [];
      valid = true;
      const email = user?.email;
      const form = e.target;
      const poster = form.poster.value; 
      const title = form.title.value; 
      const time = Number(form.time.value); 
      const msg = form.msg.value;  

      // const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i;
      // const urlRegex = /^(https?:\/\/[\w.-]+\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i;

      const urlRegex = /^(https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?\.(?:png|jpg|jpeg|gif|svg|webp)$/i;
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
        const newMovie = { email ,poster, title, genre, year, time, msg, rating };

        fetch(`http://localhost:5000/addmovie`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newMovie)
        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
            console.log('done')
           }
        })
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
      <div className='max-w-5xl mx-auto'>
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
                          <option>Action</option>
                          <option>Romantic</option>
                          <option>Thriller</option>
                          <option>Fanticy</option>
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
                         <option>2019</option>
                         <option>2018</option>
                         <option>2018</option>
                         <option>2017</option>
                         <option>2016</option>
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
      </div>  
    );
};

export default AddMovie;