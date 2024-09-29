import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-br  font-manrope from-[#002853] to-[#040C18] min-h-full  flex flex-col items-center justify-center p-7">
      <div className="grid grid-flow-row gap-3 bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent text-[62px] font-extrabold mt-1 leading-[90px] md-xsm:text-3xl">
        A World of Movies Awaits You <br />
        Watch What You Love, Anytime!
      </div>
      <div className="flex flex-col md-xsm:p-2 md:w-[800px]">
        <div className="grid grid-flow-row   text-[20px]  mb-[124px] text-[#81AFDD] mt-5 md-xsm:-w-auto">
          Watching movies can enrich our everyday lives by providing
          entertainment, relaxation, and even educational insights. Films often
          introduce us to new cultures, perspectives, and ideas, broadening our
          understanding of the world. They can teach us valuable life lessons,
          inspire creativity, and enhance our emotional intelligence by allowing
          us to experience different emotions and situations through characters'
          stories. Additionally, movies often serve as a way to unwind after a
          long day, offering a break from routine while sparking conversations
          and new interests in various subjects like history, science, or human
          relationships.
        </div>
        <p className=" text-white text-[20px] font-abold mt-1 leading-[20px] text-right mb-4">
          Surya  Majhi
        </p>
      </div>
    </div>
  );
};

export default Home;
