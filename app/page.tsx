import React from "react";

import Overview from "@/components/Overview";
import FeaturesOverview from "@/components/FeaturesOverview";
import AboutOverview from "@/components/AboutOverview";
import ServicesOverview from "@/components/ServicesOverview";

const Page = () => {
  return (
    <>
      <Overview />
      <FeaturesOverview />
      <AboutOverview />
      <ServicesOverview />
    </>
  );
};
export default Page;
