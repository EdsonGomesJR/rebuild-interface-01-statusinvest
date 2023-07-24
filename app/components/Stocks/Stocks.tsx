import { MdArrowUpward, MdHelpOutline, MdOutlineArrowRight } from "react-icons/md";
import { StocksHeader } from "./StocksHeader";
import { StocksTables } from "./StocksTables";
import { DirectTreasureCard } from "../DirectTreasureCard";

export function Stocks() {
  return (
    <div className="flex flex-col items-center mt-10 w-full justify-center">
       <StocksHeader />
       <StocksTables />
      
    <div className="mt-10">

       <StocksHeader />
       <StocksTables />

    </div>
    <div className="mt-10">

       <StocksHeader />
       <StocksTables />

    </div>

    <div className="mt-10 flex items-center justify-center w-full bg-white">
     <div className="max-w-[1110px] w-full mt-10">
      <h2 className="text-[#00598a] uppercase font-black text-4xl">
       Tesouro Direto
      </h2>
     <div className="flex  flex-col  gap-4 mt-10 ">
      <span className="text-[#037e6d] font-black">TESOURO PREFIXADO</span>
      <div className="w-full grid grid-cols-2 gap-2  ">
       <DirectTreasureCard />
       <DirectTreasureCard />
       <DirectTreasureCard />
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
