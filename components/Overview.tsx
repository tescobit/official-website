import React from "react";

import { Button } from "@/components/ui/button";

const Overview = () => {
  return (
    <section className="overview bg-image h-[70vh] md:h-[86vh] w-full">
      <div className="root-container mt-20 md:mt-0">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-1 flex-col gap-5">
            <h1>
              Delivering <br />
              Result-Oriented Digital Solutions
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              aperiam doloribus ea enim eum excepturi facere ipsa laboriosam
              libero maiores, minus quae qui quibusdam, rem rerum sed similique,
              sit voluptatibus.
            </p>

            <div className="w-full md:w-44">
              <Button className="!bg-[var(--color-secondary)] !hover:bg-[var(--color-secondary)]/80 md:h-14 w-full md:text-lg cursor-pointer">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Overview;
