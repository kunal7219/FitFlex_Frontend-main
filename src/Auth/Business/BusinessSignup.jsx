import React from "react";
import { ArrowRight } from "lucide-react";
import {Link,useNavigate} from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-toastify'

function BusinessSignup() {

    const [name, setName] = useState("");
    const [email,setEmail] =useState("");
    const [location,setLocation]=useState("")
    const [password,setPassword]=useState("")
    const [category,setCategory]=useState("")
    const [description,setDescription]=useState("")
    const [motto,setMotto]=useState("")

    const navigate=useNavigate();

    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };

    const handleSubmit = async (e) => {
      // console.log("first")
      e.preventDefault();
      console.log(name,email,location,category,password,description,motto);
      try {
          const res = await axios.post(
              `https://vihaan-fitflex.onrender.com/api/v2/auth/register`,
              {name,email,location,category,password,description,motto}
          );
          if(res && res.data.success){
              toast.success(res.data && res.data.message);
              navigate('/business-login');
          }
          else{
              toast.error(res.data.message);
          }
          
  
      } catch (error) {
          console.log(error);
          toast.error("Something Went Wrong");
      }

  }
    
  return (
    <>
      <div className="relative flex content-center items-center justify-center pt-24 pb-36 text-white overflow-x-hidden">
        <div className="absolute top-0 h-full w-full bg-cover bg-[url('https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center opacity-100" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto px-4 text-center ">
              <div className="text-white font-bold text-5xl m-30">
                {/*  Text  */}
                <div>
                  Partner with FitFlex <br />
                  at 0% commission for the 1st month!
                </div>

                <div className="text-xl mt-10">
                  {" "}
                  And get ads worth INR 1000. Valid for new fitness partners in
                  select cities.
                </div>

                <div className="bg-blue text-base pt-10 underline">
                  Need help? Contact +91 97xxxx52
                </div>
              </div>

              <p className="mt-2 text-center text-2xl -mb-20 font-bold ">
                <span className="underline">Already have an account ? </span>
                <Link
                  to='/business-login'
                  title=""
                  className="font-medium transition-all duration-200 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-5xl pt-10">
        <span className="text-gray-800 font-bold">
          Why should you partner with FitFlex
        </span>

        <div className="text-2xl pt-10">
          FitFlex enables you to get 60% more revenue, 10x new customers and
          boost your brand <br /> visibility by providing insights to improve
          your business.
        </div>
      </div>

      <section className="py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl  text-center">
            <div className="isolate flex justify-center -space-x-2">
              <img
                className="relative z-30 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                alt="Dan_Abromov"
              />
              <img
                className="relative z-20 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Guillermo_Rauch"
              />
              <img
                className="relative z-10 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                alt="Lee_Robinson"
              />
              <img
                className="relative z-0 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                alt="Delba"
              />
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
              Connect with{" "}
              <span className="border-b-8 border-yellow-300">1000+</span>{" "}
              Fitness <br /> <br />
              enthusiasts
            </h2>
          </div>
        </div>
      </section>

      <div className=" bg-gray-200 p-8">
        <div className=" bg-white  w-1/2 ml-auto mr-auto p-20 text-3xl  text-black z-10 text-center rounded-2xl">
          <span className="">Get started with your online presence </span>
          <br />
          <p className="mx-auto max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl">
            Start your journey with us by filling the below form
          </p>
        </div>
      </div>

      <section>
        <div className="flex items-center justify-center px-4 -m-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign up to create account
            </h2>

            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Business Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder=" Name of your Business"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    ></input>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    ></input>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    ></input>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Location{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Location"
                      id="location"
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                    ></input>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Description{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Description"
                      id="description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    ></input>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="motto"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Motive of your fitness Centre{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Motto"
                      id="motto"
                      onChange={(e) => setMotto(e.target.value)}
                      value={motto}
                    ></input>
                  </div>
                </div>

                <div></div>

<div>
        <label htmlFor="category" className="text-base font-medium text-gray-900">
          Categories
        </label>
        <div className="mt-2">
          <label>
            <input
              type="radio"
              value="gym"
              checked={category === 'gym'}
              onChange={handleCategoryChange}
            />
            Gym
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="yoga"
              checked={category === 'yoga'}
              onChange={handleCategoryChange}
            />
            Yoga Club
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="calisthenics"
              checked={category === 'calisthenics'}
              onChange={handleCategoryChange}
            />
            Calisthenics Studio
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="sports"
              checked={category === 'sports'}
              onChange={handleCategoryChange}
            />
            Sports Centre
          </label>
        </div>
      </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BusinessSignup;