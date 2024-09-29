import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-br font-manrope md-xsm:p-2 from-[#002853] to-[#040C18] h-full md-xsm:w-auto md:min-w-screen flex flex-col items-center justify-center">
      <div className=" gap-3 bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent text-[62px] font-extrabold mt-1 leading-[90px] md-xsm:w-auto md-xsm:text-2xl">
        Lights, Camera, Stream:
        <br /> Discover Your Next Favorite Movie!
      </div>
      <div className="my-9 pl-1 xl:w-[1100px] min-h-screen md-xsm:w-auto flex flex-col justify-start ">
        <div className=" md-xsm:min-w-auto md-xsm:w-auto flex flex-col gap-12">
          <div className="md-xsm:w-auto">
            <p class="h-[3px] md:w-[100px] md-xsm:w-[30px] bg-gradient-to-r from-[#AE67FA] to-[#F49867] mb-3"></p>
            <p class="text-white text-[24px]">
              Your Gateway to Unlimited Movies
            </p>
            <p class="text-[#81AFDD] mt-5 md-xsm:w-auto md:w-[900px] ">
              Welcome to [Your Website Name], your ultimate destination for
              streaming the latest blockbusters, classic films, and everything
              in between. Whether you're a fan of action, drama, romance, or
              comedy, we've got something for everyone.
            </p>
          </div>
          <div>
            <p class="h-[3px] w-[100px] bg-gradient-to-r from-[#AE67FA] to-[#F49867] mb-3"></p>
            <p class="text-white text-[24px]">
            Why Choose Us?
            </p>
            <p class="text-[#81AFDD] mt-5 md-xsm:w-auto md:w-[900px]">
            At [Your Website Name], we believe in delivering high-quality content with an easy-to-use interface. Our library is constantly updated, ensuring you never miss out on the latest releases or timeless favorites.
            </p>
          </div>
          <div>
            <p class="h-[3px] w-[100px] bg-gradient-to-r from-[#AE67FA] to-[#F49867] mb-3"></p>
            <p class="text-white text-[24px]">
            Stream Anytime, Anywhere
            </p>
            <p class="text-[#81AFDD] mt-5 md-xsm:w-auto md:w-[900px]">
            Watch your favorite movies from the comfort of your home or on the go. Our platform supports multiple devices, offering a seamless viewing experience no matter where you are.


            </p>
          </div>
          <div>
            <p class="h-[3px] w-[100px] bg-gradient-to-r from-[#AE67FA] to-[#F49867] mb-3"></p>
            <p class="text-white text-[24px]">
            Join Our Community
            </p>
            <p class="text-[#81AFDD] mt-5 md-xsm:w-auto md:w-[900px]">
            Be part of a growing community of movie lovers. Discover new films, share reviews, and get personalized recommendations based on your viewing history.
            </p>
          </div>
          <div>
            <p class="h-[3px] w-[100px] bg-gradient-to-r from-[#AE67FA] to-[#F49867] mb-3"></p>
            <p class="text-white text-[24px]">
            Our Mission
            </p>
            <p class="text-[#81AFDD] mt-5 md-xsm:w-auto  md:w-[900px]">
            We aim to make the world of cinema accessible to everyone, by bringing the best content directly to your screen. At [Your Website Name], movie night is always just a click away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
