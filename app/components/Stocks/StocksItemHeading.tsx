import Image from "next/image"

interface StocksItemHeadingProps{
  ticker: string
  name:string
}
export function StocksItemHeading({ticker, name}:StocksItemHeadingProps) {
  return (

    <div className="flex items-center w-full max-w-[200px]  gap-1">
    <strong className="text-[11.2px] uppercase">{ticker}</strong>
    <span className="text-[9.8px] font-light uppercase truncate">{name}</span>
    </div>
  )
}
