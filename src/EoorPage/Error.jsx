import { Link } from 'react-router-dom';
import errorImg from '../assets/error.jpg'

const Error = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='p-4 flex flex-col justify-center items-center gap-2'>
                <img className='max-w-lg rounded' src={errorImg} alt="Error Image" />
                <Link className='text-sm p-2 rounded bg-orange-300 text-black' to='/'>Back to home</Link>
            </div>
        </div>
    );
};

export default Error;