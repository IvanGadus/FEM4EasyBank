
type BankArticleDataProps = {
    source: string;
    author: string;
    heading: string;
    paragraph: string;
}

function BankArticle( { source, author, heading, paragraph }: BankArticleDataProps ) {
  return (
    <article className="flex flex-col mx-6 mb-4 overflow-hidden bg-white rounded-lg sm:mx-0">
        <img className="object-cover w-full mb-6 h-60 sm:h-fit sm:max-h-52 min-h-[208px]" src={source} alt={heading + "image"} />
        <div className="mx-6 mb-12">
            <small className="block mb-2 text-gray-400">{author}</small>
            <h4 className="mb-2 text-lg leading-6 cursor-pointer hover:text-lime-green">{heading}</h4>
            <p className="text-[14px] text-gray-400">{paragraph}</p>
        </div>
    </article>
  )
}

export default BankArticle;
