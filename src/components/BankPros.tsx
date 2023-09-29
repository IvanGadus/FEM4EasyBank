
type BankProsProps = {
    source : string;
    heading : string;
    paragraph : string;
}

function BankPros({ source, heading, paragraph } : BankProsProps) {
  return (
    <div className="flex flex-col items-center w-full mb-10 text-center ">
        <img className="w-[72px] mb-5" src={source} alt={heading + "image"} />
        <h3 className="mb-5 text-xl">{heading}</h3>
        <p className="text-gray-400">{paragraph}</p>
    </div>
  )
}

export default BankPros;
