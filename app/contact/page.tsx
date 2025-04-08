import React from "react";

import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="my-20">
      <div className="px-4 sm:px-6 mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="shadow-2xl rounded-xl">
          <div className="flex flex-col flex-col-reverse md:flex-row">
            <div className="md:w-[50%] p-5 md:p-10">
              <ContactForm />
            </div>

            <div className="md:w-[50%] p-5 md:p-10">
              <div className="flex items-center gap-4 w-full mb-10">
                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex justify-center items-center">
                  <Image
                    src="/icons/phone.png"
                    alt="phone"
                    width={30}
                    height={30}
                  />
                </div>
                <Link href="tel:+94704318756">+94 704318756</Link>
              </div>
              <div className="flex items-center gap-4 w-full">
                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex justify-center items-center">
                  <Image
                    src="/icons/email.png"
                    alt="email"
                    width={30}
                    height={30}
                  />
                </div>
                <Link href="#">hello@tescobit.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
