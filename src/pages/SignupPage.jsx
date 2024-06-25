import { Link, useLocation, useNavigate } from 'react-router-dom';
import reading from '../assets/Reading_book_Monochromatic.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [remembered, setRemembered] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(remembered);
    if (remembered) localStorage.setItem('user', JSON.stringify(data));
    navigate('/');
  };

  /*** */

  ////////////////////////////////

  return (
    <section className='h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0'>
      <div className='md:w-1/3 max-w-sm'>
        <img
          src={reading}
          alt='Sample image'
        />
      </div>
      <div className='md:w-1/3 max-w-sm'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='email'
            {...register('email', { required: true })}
            placeholder='Email Address'
          />
          <div className='flex justify-between items-center'>
            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
              type={visible ? 'text' : 'password'}
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder='Password'
            />

            <input
              id='myCheckbox'
              type='checkbox'
              className='mr-auto -ml-7 -mb-5  hidden'
              onClick={() => setVisible((x) => !x)}
            />
            <label
              // onClick={() => setVisible((x) => !x)}
              htmlFor='myCheckbox'
              className='checkbox-label mr-auto -ml-7 -mb-5'>
              {visible ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                </svg>
              )}
            </label>
          </div>

          <div className='mt-4 flex justify-between font-semibold text-sm'>
            <label className='flex text-slate-500 hover:text-slate-600 cursor-pointer'>
              <input
                className='mr-1'
                type='checkbox'
                defaultChecked={remembered}
                onChange={() => setRemembered((x) => !x)}
              />
              <span>Remember Me</span>
            </label>
            <a
              className='text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4'
              href='#'>
              Forgot Password?
            </a>
          </div>
          <div className='text-center md:text-left'>
            <button
              className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'
              type='submit'>
              Login
            </button>
          </div>
        </form>
        <div className='mt-4 font-semibold text-sm text-slate-500 text-center md:text-left'>
          Do not have an account?{' '}
          <Link
            className='text-red-600 hover:underline hover:underline-offset-4'
            to='/signup'>
            Register
          </Link>
        </div>
        {errors.password?.type === 'required' && (
          <p className='text-red-600'>Password is required</p>
        )}
        {errors.password?.type === 'minLength' && (
          <p className='text-red-600'>Password must be 6 characters</p>
        )}
        {errors.password?.type === 'maxLength' && (
          <p className='text-red-600'>
            Password must be less than 20 characters
          </p>
        )}
        {errors.password?.type === 'pattern' && (
          <p className='text-red-600'>
            Password must have one Uppercase one lower case, one number and one
            special character.
          </p>
        )}
      </div>
    </section>
  );
};

export default SignUp;
