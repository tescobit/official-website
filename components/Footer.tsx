import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20 bg-white">
      <div
        className="px-4 sm:px-6 mx-auto py-16 border-b border-black/20"
        style={{ maxWidth: "1280px" }}
      >
        <div className="flex justify-between flex-col md:flex-row gap-10 md:gap-0">
          <div className="flex flex-col items-center md:items-start gap-5 md:max-w-[33%]">
            <Image src="./images/logo.png" alt="logo" width={100} height={50} />
            <p className="text-[#6A6A6A] text-sm text-center md:text-start">
              We built an elegant solution. Our team believe that the success of
              our company is a result of our clients growth.
            </p>

            <div className="flex gap-4 items-center">
              <Link href="facebook">
                <Image
                  src="./icons/facebook.png"
                  alt="facebook"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="facebook">
                <Image
                  src="./icons/instagram.png"
                  alt="instagram"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </Link>
              <Link href="facebook">
                <Image
                  src="./icons/linkedin.png"
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-between md:gap-80">
            <div>
              <h2 className="text-[var(--color-primary)] font-bold mb-4">
                Company
              </h2>

              <ul>
                <li className="mb-3.5">
                  <Link href="#features" className="nav-item ">
                    Features
                  </Link>
                </li>

                <li className="mb-3.5">
                  <Link href="#about" className="nav-item">
                    About Us
                  </Link>
                </li>
                <li className="mb-3.5">
                  <Link href="#services-overview" className="nav-item">
                    Services
                  </Link>
                </li>

                <li className="mb-3.5">
                  <Link href="/contact" className="nav-item">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[var(--color-primary)] font-bold mb-4">
                Contact
              </h2>

              <ul>
                <li className="mb-3.5 flex items-center gap-2">
                  <span>Email :</span>
                  <Link href="#">hello@tescobit.com</Link>
                </li>
                <li className="mb-3.5 flex items-center gap-2">
                  <span>Phone :</span>
                  <Link href="tel:+94704318756">+94 704318756</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        © {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
