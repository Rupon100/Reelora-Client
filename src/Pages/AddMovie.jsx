import { useContext, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { authContext } from '../Context/AuthContext';
import Select from 'react-select';

const AddMovie = () => {
    const { user,  genre, setGenre } = useContext(authContext);
    const [rating, setRating] = useState(0);
    const [year, setYear] = useState('');
    let errorMessages = [];
    let valid = true;
    
    
    useEffect(() => {
      setGenre([]);  
    }, []);

    const genreOptions = [
      { value: 'Comedy', label: 'Comedy' },
      { value: 'Drama', label: 'Drama' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Action', label: 'Action' },
      { value: 'Romantic', label: 'Romantic' },
      { value: 'Thriller', label: 'Thriller' },
      { value: 'Fantasy', label: 'Fantasy' },
    ];

    const handleRating = (rate) => {
        setRating(rate);
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

      if (!Array.isArray(genre) || genre.length === 0) {
        errorMessages.push('Select a Genre!');
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
        const newMovie = { email:user.email ,poster, title, genre, year, time, msg, rating };
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
            // console.log('add')
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
      setGenre([]);
    }
    

    return (
      <div>
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
                      
                        <Select
                          isMulti
                          options={genreOptions}
                          onChange={(selected) => {
                            const selGenres = selected ? selected.map(option => option.value) : [];
                            setGenre(selGenres)
                          }}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          styles={{
                            control: (base) => ({
                                ...base,
                                padding: '5px',
                            })
                          }}
                        />

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
                  <div className='w-full'>
                    <textarea name="msg" className="resize-none border w-full rounded md:p-10" placeholder="Give a summery"></textarea>
                  </div>
                  <button type='submit' className='btn btn-block font-semibold'>Add</button>
                </form>
            </div>
        </div>
      </div>  
      </div>
    );
};

export default AddMovie;