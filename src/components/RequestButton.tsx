type ButtonProps = {
  className?: string
}

function RequestButton({ className }:ButtonProps) {
  return (
        <button className={`${className} text-white z-30 px-7 py-2 rounded-full bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-80 transition-opacity`} type="button">Request Invite</button>
  )
}

export default RequestButton;
