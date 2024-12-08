import { useContext, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { authContext } from '../Context/AuthContext';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateDetails = () => {
    const { user } = useContext(authContext);
    const [currentMovie, setCurrentMovie] = useState([]);
    const {id} = useParams();
    
    const { title, genre, msg, poster, rating, time, year } = currentMovie;
   

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        fetch(`https://movie-server-gray.vercel.app`)
        .then(res => res.json())
        .then(data => {
            const movie = data.find(item => item._id == id);
            setCurrentMovie(movie);
            if(movie){
                reset({
                   title: movie.title,
                   poster: movie.poster,
                   genre: movie.genre.map((genre) => ({value: genre, label: genre})),
                   time: movie.time,
                   rating: movie.rating,
                   year: movie.year,
                   msg: movie.msg
                })
            }
        })
    }, [id, reset])
   
    const genreOptions = [
      { value: 'Comedy', label: 'Comedy' },
      { value: 'Drama', label: 'Drama' },
      { value: 'Horror', label: 'Horror' },
      { value: 'Action', label: 'Action' },
      { value: 'Romantic', label: 'Romantic' },
      { value: 'Thriller', label: 'Thriller' },
      { value: 'Fantasy', label: 'Fantasy' },
    ];
    
    const updateMovie = (data) => {
        const upMovie = {
          email: user?.email,
          ...data,
          genre: data.genre.map((gen) => gen.value)
        };
    
        fetch(`https://movie-server-gray.vercel.app/update/${id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(upMovie)
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.modifiedCount > 0){
            toast.success('Updated!', {
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

        });
      };
    
    return (
        <div className='max-w-5xl mx-auto'>       
       <div className="min-h-screen m-2 md:m-4">
        <h1 className="font-semibold text-2xl md:text-4xl text-center md:my-4">Update Movie</h1>
        <div>
          <form onSubmit={handleSubmit(updateMovie)} className="card-body w-full space-y-4 md:space-y-6">
            <div className="flex flex-col gap-2 md:gap-4 md:flex-row w-full">
              
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Movie Poster</span>
                </label>
                <input
                  type="text"
                  placeholder="Movie Poster"
                  {...register('poster', {
                    required: 'Poster URL is required!',
                    pattern: {
                      value: /^(https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?\.(?:png|jpg|jpeg|gif|svg|webp)$/i,
                      message: 'Enter a valid URL!',
                    },
                  })}
                  className="input input-bordered"
                />
                {errors.poster && <p className="text-red-500 text-sm">{errors.poster.message}</p>}
              </div>

              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Movie Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Movie Title"
                  {...register('title', {
                    required: 'Title is required!',
                    minLength: { value: 3, message: 'must be need least 2 characters!' },
                  })}
                  className="input input-bordered"
                />
                {errors.title?.message && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>

            </div>

            <div className="flex flex-col gap-2 md:gap-4 md:flex-row items-start">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <Controller
                  name="genre"
                  control={control}
                  rules={{ required: 'Select genre!' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      isMulti
                      options={genreOptions}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      styles={{
                        control: (base) => ({
                            ...base,
                            padding: '5px',
                        })
                      }}
                />
                  )}
                />
                {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
              </div>

              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Duration (min)</span>
                </label>
                <input
                  type="number"
                  placeholder="Movie Duration"
                  {...register('time', {
                    required: 'Duration need!',
                    min: { value: 60, message: 'must be greater than 60 minutes!' },
                  })}
                  className="input input-bordered"
                />
                {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4 md:flex-row">

              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Release Year</span>
                </label>
                <select
                  {...register('year', { required: 'Select a release year!' })}
                  className="select select-bordered w-full"
                >
                  <option value="">Select one</option>
                  {Array.from({ length: 10 }, (_, i) => 2024 - i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
              </div>

              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <Controller
                  name="rating"
                  control={control}
                  rules={{ required: 'Provide a rating!' }}
                  render={({ field }) => (
                    <Rating
                      initialValue={rating}
                      onClick={(rate) => field.onChange(rate)}
                      ratingValue={field.value || 0}
                    />
                  )}
                />
                {errors.rating && <p className="text-red-500 text-sm">{errors.rating.message}</p>}
              </div>
            </div>

            <div className="w-full">
              <textarea
                {...register('msg', {
                  required: 'need a description!',
                  minLength: { value: 10, message: 'must be at least 10 characters!' },
                })}
                className="resize-none border w-full rounded md:p-10"
                placeholder="write a description"
              />
              {errors.msg && <p className="text-red-500 text-sm">{errors.msg.message}</p>}
            </div>

            <button type="submit" className="btn btn-block font-semibold">Update</button>

          </form>
        </div>
      </div>

      </div>  
    );
};

export default UpdateDetails;