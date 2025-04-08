import React from "react";
import Image from "next/image";

const AboutOverview = () => {
  return (
    <div className="overview w-full bg-white" id="about">
      <div className="root-container mt-20 mb-20">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-10 items-center">
          <div className="flex flex-1 flex-col gap-5 relative mt-10 md:mt-0">
            <Image
              src="/images/about.jpg"
              alt="about"
              width={500}
              height={600}
            />
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <div className="flex items-center gap-2 float-left">
              <div className="border-t-2 border-t-[var(--color-dark)] w-5"></div>
              <h4 className="text-sm md:text-lg text-[var(--color-dark)] font-medium">
                About Us
              </h4>
            </div>

            <h1 className="text-black text-3xl md:text-5xl">
              Choose the Best IT Solution Company
            </h1>
            <p className="text-black/80 text-lg">
              Finding the right IT solution partner is essential for business
              growth. We provide expertise in software development, cloud
              computing, cybersecurity, and AI solutions to help businesses
              thrive. Our focus on innovation, scalability, and security ensures
              that we deliver cutting-edge technology tailored to your needs.
              Partner with us for reliable, future-ready IT solutions that drive
              success.
            </p>
            <div>
              {/*<Button variant="default" className=" font-bold h-12">*/}
              {/*  Learn More*/}
              {/*</Button>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutOverview;
