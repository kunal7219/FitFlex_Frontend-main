import React from 'react'
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Textarea,
    Checkbox,
  } from "@material-tailwind/react";
import { featuresData } from "../data/features-data";
import {FeatureCard} from "./feature-card"
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

function Header() {
  return (
    <>
        <Navbar />
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://burst.shopifycdn.com/photos/core-strength-fitness.jpg?width=1000&format=pjpg&exif=0&iptc=0')] bg-cover bg-center opacity-100" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto px-4 text-center ">
              {/* <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-6xl"
              > */}
              <div className='text-white font-black text-6xl'>
                Stay Fit<br/> No matter where You are
              </div>
              {/* </Typography> */}
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">

            {/* Features Start */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
              {featuresData.map(({ color, title, icon, description }) => (
                <FeatureCard
                  key={title}
                  color={color}
                  title={title}
                  icon={React.createElement(icon, {
                    className: "w-6 h-6 text-black",
                  })}
                  description={description}
                />
              ))}
            </div>
              {/* Features End */}

              <h1 className="text-5xl mt-20 text-sky-950 font-bold text-center">Discover the Best Fitness Centers near you</h1>
            
              {/* For GYM */}
              <div className="mt-24 flex flex-wrap items-center bg-red-100 py-20">
                <div className="mx-auto -mt-0 w-full px-4 md:w-5/12">
              {/* <div className="mb-6  inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg"> */}
                {/* <FingerPrintIcon className="h-8 w-8 text-black"/> */}
              {/* </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold text-sky-950"
                color="blue-gray"
                >GYMS</Typography>

              <Typography className="mb-8 font-normal text-blue-gray-500">
              From state-of-the-art equipment to specialized classes, our gyms offer 
              a range of facilities to cater to all your fitness requirements.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              {/* <Button variant="filled">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-60">
                  {/* <video src='./assets/vid/gym.mp4' type/> */}
                  <video autoPlay loop muted className="h-60 mx-auto">
                    <source src="https://videos.pexels.com/video-files/855828/855828-hd_1920_1080_30fps.mp4" type="video/mp4"/>
                </video>
                </CardHeader>
                <CardBody>
                  <Typography className="font-normal text-black h-20 text-center pt-4">
                  Explore our curated selection of top-rated gyms, ensuring you find the perfect fit for your fitness journey.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          {/* GYM End */}


          {/* For YOGA */}
          <div className="mt-24 flex flex-wrap items-center">
          <div className="mx-auto mt-24 flex-col flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  {/* <img
                    alt="Card Image"
                    src="@src/assets/vid/yoga"
                    className="h-full w-11/12 mx-auto"
                  /> */}
                  <video autoPlay loop muted className="h-60 mx-auto">
                    <source src="https://videos.pexels.com/video-files/4110446/4110446-uhd_3840_2160_30fps.mp4" type="video/mp4"/>
                </video>
                </CardHeader>
                <CardBody>
                  <Typography className="font-normal text-blue-gray-500 text-center py-10">
                  Explore our selection of tranquil yoga studios, each offering a peaceful sanctuary for your practice
                  </Typography>
                </CardBody>
              </Card>
            </div>

            <div className="mx-auto -mt-36 w-full px-4 md:w-5/12 pt-28">
              {/* <div className="mb-6  inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-black"/>
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold text-sky-950"
                color="blue-gray"
                >YOGA CLUBS</Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              {/* <Button variant="filled">read more</Button> */}
            </div>
          </div>
          {/* YOGA END */}

          {/* FOR CALISTHENICS */}
          <div className="mt-24 flex flex-wrap items-center bg-red-100 py-20">
            <div className="mx-auto -mt-36 w-full px-4 md:w-5/12 pt-40">
              {/* <div className="mb-6  inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-black"/>
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold text-sky-950"
                color="blue-gray"
                >CALISTHENICS STUDIOS</Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              {/* <Button variant="filled">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  {/* <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  /> */}
                  <video autoPlay loop muted className="h-60 mx-auto">
                    <source src="https://videos.pexels.com/video-files/16408447/16408447-hd_1920_1080_60fps.mp4" type="video/mp4"/>
                </video>
                </CardHeader>
                <CardBody>
                  {/* <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography> */}
                  {/* <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-bold"
                  >
                    Top Notch Services
                  </Typography> */}
                  <Typography variant="small" className="font-normal text-blue-gray-500 py-10 text-center">
                  Experience calisthenics in its truest form, with studios that focus on functional fitness and bodyweight training
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          {/* calisthenics End */}


          {/* For aerial fitness */}
          <div className="mt-24 flex flex-wrap items-center">
          <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  {/* <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  /> */}
                  <video autoPlay loop muted className="h-60 mx-auto">
                    <source src="https://videos.pexels.com/video-files/5028209/5028209-sd_640_360_25fps.mp4" type="video/mp4"/>
                </video>
                </CardHeader>
                <CardBody>
                  <Typography className="font-normal text-blue-gray-500 py-10 text-center">
                  Experience aerial fitness in a whole new way, with studios that combine strength, flexibility, and grace in every class.
                  </Typography>
                </CardBody>
              </Card>
            </div>

            <div className="mx-auto -mt-36 w-full px-4 md:w-5/12 pt-40">
              {/* <div className="mb-6  inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-black"/>
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold text-sky-950"
                color="blue-gray"
                >AERIAL Fitness Centers</Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              {/* <Button variant="filled">read more</Button> */}
            </div>
          </div>
          {/* AERIAL FITNESS ENDS */}

        </div>
        </section>
        <Footer />
    </>
  )
}

export default Header