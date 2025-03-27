"use client";

import React, { useState } from "react";
import { services } from "@/constants";
import FeatureCard from "@/components/FeatureCard";
import { useKeenSlider } from "keen-slider/react";

const ServicesOverview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      mode: "snap",
      slides: {
        perView: 1,
        spacing: 0,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 20 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });

          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });

          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <div className="my-20">
      <div className="px-4 sm:px-6 mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="md:max-w-3/4 mx-auto">
          <h1 className="text-center">
            We Offer a Wide Variety of IT Services
          </h1>

          <p className="text-center my-4 text-black/60">
            We blend logic, creativity, and curiosity to craft innovative
            solutions that drive success. From strategic business planning to
            robust security and cutting-edge web development, we empower
            businesses with the tools they need to grow, thrive, and stay ahead
            in a dynamic digital world.
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="overflow-hidden w-full">
            <div ref={sliderRef} className="keen-slider">
              {services.map((feature, idx) => (
                <div key={idx} className="keen-slider__slide px-0 md:px-2 py-2">
                  <div className="w-full h-full md:pr-2 service-container">
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      image={feature.image}
                      color={feature.color}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {loaded && instanceRef.current && (
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(services.length)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === idx ? "bg-black" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ServicesOverview;
