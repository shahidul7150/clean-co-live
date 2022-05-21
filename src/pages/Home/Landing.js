import React from 'react';
import BucketGirl from '../../assets/images/bucketgirl.png';

const Landing = () => {
  return (
    <div className="relative">
      <div class="hero sm:h-screen lg:h-[60vh] bg-accent mt-16 mb-5">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
              class="text-5xl font-bold"
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="600"
              class="py-6 max-w-xl"
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1000"
              class="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={BucketGirl} class="h-full" alt="" />
          </div>
        </div>
      </div>

      <div className="rounded-lg mx-auto relative mt-[-50px] z-50 shadow-lg bg-base-200  p-10 w-5/6">
        <h1 className="text-2xl text-primary mb-5">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
        </div>
        <button className="btn btn-primary mt-5">GET A QUOTE</button>
      </div>
    </div>
  );
};

export default Landing;
