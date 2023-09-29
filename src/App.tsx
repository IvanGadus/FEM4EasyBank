import Navigation from "./components/Navigation"
import SectionHero from "./components/SectionHero"
import BankPros from "./components/BankPros"
import BankArticle from "./components/BankArticle"
import { prosComponentData } from "./assets/data/bankProsData"
import { articleData } from "./assets/data/bankArticleData"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <Navigation />
      <SectionHero />

      <section className="flex-col justify-center w-full px-5 felx h-max bg-light-grayish-blue md:px-10 lg:px-20">
        <div className="flex flex-col items-center text-center md:text-left">
          <div className="flex flex-col items-center justify-center lg:block lg:w-full">
            <h2 className="w-48 mt-16 mb-5 text-3xl md:w-1/2 md:pt-[10px]">Why choose Easybank?</h2>
            <p className="mb-10 text-center text-gray-400 lg:w-1/2 lg:text-left">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
          </div>
          <div className="grid-flow-row grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
            {prosComponentData.map((item, index) => (
              <BankPros heading={item.heading} paragraph={item.paragraph} source={item.source} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center px-4 pb-12 bg-very-light-gray md:px-10 lg:px-20">
        <h3 id="article" className="pt-16 pb-6 text-3xl">Latest Articles</h3>
        <div className="grid-flow-row grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
          {articleData.map((article, index) => (
            <BankArticle author={article.author} heading={article.heading} paragraph={article.paragraph} source={article.source} key={index} />
          ))}
        </div>
      </section>

      <footer>
          <Footer />
      </footer>
    </div>
  )
}

export default App
