import RequestButton from "./RequestButton";

function Footer() {
  return (
    <div className="flex flex-col items-center py-10 md:px-10 lg:px-20 bg-dark-blue md:grid md:grid-cols-5 md:grid-rows-3 md:grid-flow-row lg:m-0 md:auto-rows-auto">
        <img className="mb-7 md:m-0 invert sepia-0 saturate-[2%] hue-rotate-[82deg] brightness-[110%] contrast-[101] "  src="/img/logo.svg" alt="" />
        <div className="flex col-start-1 row-start-3 gap-4 md:m-0 w-max mb-7">
            <button><img src="/img/icon-facebook.svg" alt="facebook" /></button>
            <button><img src="/img/icon-youtube.svg" alt="youtube" /></button>
            <button><img src="/img/icon-twitter.svg" alt="twitter" /></button>
            <button><img src="/img/icon-pinterest.svg" alt="pinterest" /></button>
            <button><img src="/img/icon-instagram.svg" alt="instagram" /></button>
        </div>
        <ul className="text-white lg:col-span-2 md:row-span-3 md:col-span-3 md:m-0 md:grid md:grid-rows-3 md:grid-flow-col md:h-full md:gap-y-2 lg:gap-x-7">
            <a href="#"><li className="pb-2 text-center md:flex md:justify-center md:items-center md:h-full md:pb-0 lg:justify-start lg:pl-5 hover:text-lime-green">About Us</li></a>
            <a href="#"><li className="pb-2 text-center md:flex md:justify-center md:items-center md:h-full md:pb-0 lg:justify-start lg:pl-5 hover:text-lime-green">Contact</li></a>
            <a href="#"><li className="pb-2 text-center md:flex md:justify-center md:items-center md:h-full md:pb-0 lg:justify-start lg:pl-5 hover:text-lime-green">Blog</li></a>
            <a href="#"><li className="pb-2 text-center md:flex md:justify-center md:items-center md:h-full md:pb-0 lg:justify-start lg:pl-5 hover:text-lime-green">Careers</li></a>
            <a href="#"><li className="pb-2 text-center md:flex md:justify-center md:items-center md:h-full md:pb-0 lg:justify-start lg:pl-5 hover:text-lime-green">Support</li></a>
            <a href="#"><li className="pb-2 text-center md:flex md:justify-center md:items-center md:h-full md:pb-0 lg:justify-start lg:pl-5 hover:text-lime-green mb-7 md:mb-0">Privay Policy</li></a>
        </ul>
        <div className="flex justify-end col-start-5 md:row-span-2 lg:row-span-1">
          <RequestButton className="md:m-0 w-max md:px-3 lg:px-7"/>
        </div>
        <p className="flex justify-end col-start-5 row-start-3 mt-10 text-right text-gray-400 md:m-0">© Easybank. All Rights Reserved</p>
    </div>
  )
}

export default Footer;
