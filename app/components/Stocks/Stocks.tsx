import { MdArrowUpward, MdHelpOutline, MdOutlineArrowRight } from "react-icons/md";
import { StocksHeader } from "./StocksHeader";
import { StocksTables } from "./StocksTables";
import { DirectTreasureCard } from "../DirectTreasureCard";
import { Footer } from "../Footer";

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

        <div className="text-[#d64000] uppercase mt-4 mb-4">indisponível para compra</div>
        <div className="w-full grid grid-cols-2 gap-2">
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
        </div>

        <div className="uppercase text-[#037e6d] font-black m-4 text-xl">tesouro igpm +</div>
        <div className="uppercase text-[#d64000] font-normal ml-4 mb-2 text-xl">Indisponível para compra</div>
        <div className="w-full grid grid-cols-2 gap-2">
        <DirectTreasureCard />
        </div>

        <span className="uppercase text-[#037e6d] font-black m-4 text-xl">tesouro ipca +</span>
        <div className="w-full grid grid-cols-2 gap-2">
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        <DirectTreasureCard />
        </div>
        <span className="uppercase text-xl text-[#d64000] mt-4 mb-1 ml-4 font-extralight">indisponível para compra</span>
        <div className="w-full grid grid-cols-2 gap-2">
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
          <DirectTreasureCard />
        </div>
        <span className="uppercase text-[#037e6d] font-black m-4 text-xl">tesouro selic +</span>
        <div className="grid grid-cols-2 gap-2">
          <DirectTreasureCard/>
          <DirectTreasureCard/>
        </div>
        <span className="uppercase text-xl text-[#d64000] mt-4 mb-1 ml-4 font-extralight">indisponível para compra</span>
        <div className="grid grid-cols-2 gap-2">
          <DirectTreasureCard/>
          <DirectTreasureCard/>
          <DirectTreasureCard/>
        </div>
        <div className="flex flex-col  text-[#037e6d] uppercase mt-4  items-center justify-center">
          <span className="text-2xl"><strong className="font-black">Termos </strong>Do Mercado</span>
          <div className="flex gap-4 mt-2">
            <span>#
            </span>  
            <span>A
            </span>  
            <span>B
            </span>  
            <span>C
            </span>  
            <span>D
            </span>  
            <span>E
            </span>  
            <span>F
            </span>  
            <span>G
            </span>  
            <span>H
            </span>  
            <span>I
            </span>  
            <span>J
            </span>  
            <span>K
            </span>  
            <span>L
            </span>  
            <span>M
            </span> 
              </div>
              <div className="flex gap-4 ml-1 mb-10">
                <span>N</span>
                <span>O</span>
                <span>P</span>
                <span>Q</span>
                <span>R</span>
                <span>S</span>
                <span>T</span>
                <span>U</span>
                <span>V</span>
                <span>W</span>
                <span>X</span>
                <span>Y</span>
                <span>Z</span>
              </div>
        </div>
      </div>
    </div>
    </div>
              <Footer />
    </div>
  )
}
