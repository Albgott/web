import { AlbgottLogo } from "../assets/logos/AlbgottLogo";

export const Footer = () => {
  return (
    <footer className="pt-10   lg:pb-12 bg-customDark3 radius-for-skewed -mb-2">
      <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
        <div className="w-full lg:w-1/3 mb-2 lg:mb-0">
          <div className="flex justify-center lg:justify-start items-center grow basis-0">
            <div className="text-white mr-2 text-6xl">
              <AlbgottLogo />
            </div>
            <div className="text-white font-['Inter'] font-bold text-xl">
              Albgott
            </div>
          </div>
          <p className="pb-4 mt-4 sm:w-[22rem] lg:w-[26rem] xl:w-[36rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
           Effortlessly manage inventory, invoices, clients, and catalogs all in one place. Boost efficiency, save time, and elevate your business with our intuitive solution.
          </p>
        </div>
      </div>
    </footer>
  );
};
