import Image from "next/image"

interface StocksItemHeadingProps{
  ticker: string
  name:string
}
export function StocksItemHeading({ticker, name}:StocksItemHeadingProps) {
  return (

    <div className="flex items-center w-full max-w-[200px] leading-none gap-1">
    <strong className="text-[11.2px]  leading-none uppercase">{ticker}</strong>
    <span className="text-[9.8px] leading-none font-light uppercase truncate">{name}</span>
    </div>
  )
}
