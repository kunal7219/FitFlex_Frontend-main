import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify'

export function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `https://vihaan-fitflex.onrender.com/api/v1/auth/login`,
                { email, password}
            );
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                // setAuth({
                //     ...auth,
                //     user: res.data.user,
                //     token: res.data.token
                // });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate('/');
            }
            else{
                toast.error(res.data.message);
            }
            
    
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    };

  return (
    <section className='mt-10 mr-10'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}

              <Link
                to="/user-signup"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create an account
              </Link>

            </p>
            <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id='email'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                    
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id='password'
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    ></input>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              
              
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Signin;