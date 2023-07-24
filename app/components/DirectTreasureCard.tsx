import { MdHelpOutline, MdArrowUpward, MdOutlineArrowRight } from "react-icons/md";

export function DirectTreasureCard() {
  return (
    <div className="bg-[#f7f7f7] pl-3 py-3 w-full gap-2 flex flex-col text-[#505050] relative rounded-md">
          <h4 className="text-[11px] font-bold text-[#585858]"> Tesouro Prefixado 2026</h4>
          <div className='grid grid-cols-4'>
            <div className="flex flex-col">
              <span className="text-[12px]">Taxa</span> 
              <span className="text-sm leading-none font-black">10,21%</span>
            </div>
            
              <div className="flex flex-col">
              <div className="text-sm flex gap-1"><span>Variação 12M </span> <MdHelpOutline title="blabla" className="text-[#bd3800]"/></div> 
              <span className="font-black flex items-center "> <MdArrowUpward className="text-[#2e7d32]" size={24}/> 14,680%</span>
              </div>

            <div className="flex flex-col">
              <span>venda</span>
              <span className="font-black leading-none">R$ 786,08</span>
            </div>

            <div className="flex flex-col">
              <span>compra</span>
              <span className="font-black leading-none">R$ 788,18</span>
            </div>
          </div>
            <MdOutlineArrowRight  size={32} className="absolute text-[#03927e] -right-1 bottom-6 " />
        </div>
  )
}
