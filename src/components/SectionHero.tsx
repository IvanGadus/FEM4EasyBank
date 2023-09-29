import RequestButton from "./RequestButton";

function SectionHero() {
  return (
    <section className="w-screen h-screen md:mb-[-45px] md:h-95% md:pl-10 lg:pl-20">
        <div className="relative w-full h-1/2 md:h-full md:flex md:items-center md:justify-center">
          <img className="absolute w-full -bottom-14 md:hidden" src="/img/bg-intro-mobile.svg" alt="background" />

          <img className="absolute hidden w-full h-full md:right-[-40%] right-[-35%] md:block " src="/img/bg-intro-desktop.svg" alt="background" />

          <img className="absolute bottom-0 px-2 max-h-fit md:-bottom-14 md:w-8/12 md:-right-32" src="/img/image-mockups.png" alt="" />

          <div className="absolute left-0 flex-col hidden w-1/2 max-w-[430px] md:flex h-1/2 justify-evenly">
            <h1 className="text-4xl ">Next generation digital banking</h1>
            <p className="text-gray-400 ">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <RequestButton className="w-max"/>
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-h-full px-4 pb-10 h-1/2 justify-evenly md:hidden">
            <h1 className="text-4xl text-center ">Next generation digital banking</h1>
            <p className="px-4 text-center text-gray-400">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <RequestButton/>
        </div>
    </section>
  )
 





}

export default SectionHero;
