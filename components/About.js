"use client";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
  });

  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Function to start the counter animation
    const startCounterAnimation = () => {
      const counters = [
        { id: "count1", start: 0, end: 89, duration: 1000 },
        { id: "count2", start: 0, end: 80, duration: 1000 },
        { id: "count3", start: 0, end: 240, duration: 1000 },
        { id: "count4", start: 0, end: 156, duration: 1000 },
      ];

      counters.forEach(({ id, start, end, duration }) => {
        let current = start;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));

        const timer = setInterval(() => {
          current += increment;
          setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.min(Math.max(current, start), end),
          }));
          if (current === end) {
            clearInterval(timer);
          }
        }, stepTime);

        // Cleanup function to clear the interval
        return () => clearInterval(timer);
      });
    };

    // IntersectionObserver callback
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
        startCounterAnimation();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when at least 50% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);
  return (
    <div className="w-full min-h-screen p-10 sm:mt-20 mt-14 ">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <div className="flex gap-3 mb-3 sm:gap-8">
            <div className="flex items-center gap-2">
              <img
                className="sm:w-[2rem] w-[1rem] "
                src="/images/handshake.png"
              ></img>
              <h1 className="text-xs sm:text-[1rem]">Engagement</h1>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="sm:w-[2rem] w-[1rem] "
                src="/images/paper-plane.png"
              ></img>
              <h1 className="text-xs sm:text-[1rem]">Publishing</h1>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="sm:h-[1.7rem] h-[1rem]  "
                src="/images/analysis.png"
              ></img>
              <h1 className="text-xs sm:text-[1rem]">Analysis</h1>
            </div>
          </div>
          <h1 className="text-4xl font-semibold text-center sm:text-5xl">
            Our superior service
          </h1>
          <h1 className="text-[1rem] leading-6 text-center sm:text-xl sm:leading-none">
            We serve companies with excellent service options for more than 5
            years.
          </h1>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-16 my-6 sm:my-16 sm:gap-36">
            <div className="flex sm:flex-row flex-col  sm:gap-[7rem] gap-5">
              <div className="flex flex-col items-start justify-center order-2 gap-2 sm:gap-4 sm:order-1 ">
                <h1 className="text-2xl font-semibold sm:text-5xl">
                  Customer care
                </h1>
                <h1 className="sm:w-[20rem] w-[16rem] sm:leading-normal leading-6 sm:text-xl text-lg ">
                  AI helps speed up the customer relationship process
                  efficiently, making it more practical.
                </h1>
                <button className="px-4 py-2 mt-3 text-white sm:text-lg sm:px-6 sm:py-3 sm:mt-8 bg-blue rounded-3xl">
                  Learn more
                </button>
              </div>

              <div className="sm:w-[40rem] sm:h-[25rem] w-[18rem] h-[15rem] sm:order-2 order-1">
                <img
                  className="object-cover w-full h-full rounded-3xl"
                  src="./images/service-image.jpg"
                ></img>
              </div>
            </div>
            <div className="flex sm:flex-row items-center flex-col sm:gap-[6rem] gap-5">
              <div className="sm:w-[40rem] sm:h-[25rem] w-[18rem] h-[15rem]">
                <img
                  className="object-cover w-full h-full rounded-3xl"
                  src="./images/service-image2.jpeg"
                ></img>
              </div>
              <div className="flex flex-col items-start justify-center gap-4 ">
                <h1 className="text-2xl font-semibold sm:text-5xl">
                  Data Intelligence
                </h1>
                <h1 className="sm:w-[20rem] w-[18rem] sm:leading-7 leading-6 sm:text-xl text-lg ">
                  View critical (and easy to understand) insights to make
                  data-backed business decisions and keep up with your growth
                  plans.
                </h1>
                <button className="px-4 py-2 mt-3 text-white sm:text-lg sm:px-6 sm:py-3 sm:mt-8 bg-blue rounded-3xl">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <section ref={sectionRef}>
          <div className="flex flex-col items-center justify-center py-6 sm:gap-40 sm:flex-row sm:py-14">
            <h1 className="sm:text-3xl text-xl w-[18rem] text-center sm:text-left font-semibold sm:w-[31rem] sm:mb-32 mb-10">
              Our portfolio has been proven to help increase company growth by
              up to 25% per year.
            </h1>
            <div className="flex flex-col gap-6 sm:gap-10">
              <div className="flex flex-col items-center justify-center gap-5 sm:gap-16 sm:flex-row">
                <div className="flex flex-col items-center gap-2 sm:items-start">
                  <h1
                    id="count1"
                    className="text-3xl font-semibold sm:text-5xl text-blue"
                  >
                    {counts.count1}%
                  </h1>
                  <h1 className="sm:w-[11rem] sm:text-lg text-[1rem] leading-6 text-center sm:text-left">
                    Increase in total social engagements.
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-2 sm:items-start">
                  <h1
                    id="count2"
                    className="text-3xl font-semibold sm:text-5xl text-blue"
                  >
                    {counts.count2}%+
                  </h1>
                  <h1 className="sm:w-[11rem] text-center sm:text-left text-[1rem] sm:text-lg">
                    Reduction in average time to first response.
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-5 sm:gap-16 sm:items-start sm:flex-row">
                <div className="flex flex-col items-center gap-2 sm:items-start">
                  <h1
                    id="count3"
                    className="text-3xl font-semibold sm:text-5xl text-blue"
                  >
                    ${counts.count3}k
                  </h1>
                  <h1 className=" sm:text-lg text-[1rem] w-[11rem] sm:text-left text-center leading-6">
                    In marketing costs saved.
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-1 sm:items-start">
                  <h1
                    id="count4"
                    className="text-3xl font-semibold sm:text-5xl text-blue"
                  >
                    {counts.count4}+
                  </h1>
                  <h1 className="sm:w-[11rem]  leading-6 sm:text-lg text-[1rem]  sm:text-left text-center ">
                    Countries in the world use Foxyline.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
