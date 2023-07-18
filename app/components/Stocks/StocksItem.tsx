
import Image from "next/image";
import { MdArrowDownward, MdArrowUpward, MdOutlineArrowRight } from "react-icons/md";
import { StocksItemType } from "./StocksItemType";
import { StocksItemHeading } from "./StocksItemHeading";

interface StocksItemProps{
  imageId: number
  stockTicker: string
  stockName: string
  variationPercentage?: string
  price?: string
  isHigher?: boolean
  type?: string
  dividendDate?: string
  dividendValue?: string
  dividendType?: string
  
}

export function StocksItem({isHigher, type ,price, dividendDate, dividendType,dividendValue, imageId, stockName, stockTicker, variationPercentage} : StocksItemProps) {

  let bodyContent = (
 
    <div className="flex w-full justify-between ">
     <div className="flex items-center">
     {isHigher ? 
     <MdArrowUpward className="text-[#2E7D32]"/>
     :
     <MdArrowDownward className="text-[#D0181e]" />
   }
       <strong>{variationPercentage}<span className="font-extralight">%</span></strong>
     </div>
      <div className="flex items-center gap-[0.1rem]">
        <small className="text-sm font-light">R$</small>
        <strong className="text-[15.4px]">{price}</strong>
      </div>
 
     </div>



   
  )

  if(type === 'dividend') {

    bodyContent = (
      <div className="items-center w-[95%] flex justify-between">
          <span className="flex items-center text-lg" title="Valor a ser distribuído aos acionistas">
            <span className="mark text-xl font-extralight">R$</span>{dividendValue}
            </span>
        <div className="text-center items-center flex flex-col" title="Data limite de direito ao provento, após esta data, o ativo fica ex-dividendo">
          <span className="block text-[0.7rem]  leading-[0.7rem]  font-bold">
             {dividendDate}
          </span>
          <div className="flex items-center w-full md:w-1/2 leading-[0.5rem] text-[0.7rem] justify-center bg-[#026558] text-white py-[2.8px] px-[7px] font-semibold rounded-xl">
           <span className="tag " title="Tipo do provento">{dividendType}</span>
          </div>
        </div>
      </div>
    )
  }

  if(type === 'announcement') {
    bodyContent = (
      <div className="flex items-center jc text-[11px] gap-[2px]">
        <div className="text-[11px] leading-[14px] w-5 h-5 border rounded-[0.3rem]  border-[#868686] font-black flex items-center justify-center p-[1.4px]"> 
         <span>3</span>
        </div>
          <span className="text-[12.6px] text-[#565656] font-semibold">comunicados</span>
          <span className="text-[11.2px] text-[#026558] font-semibold">novos/atualizados</span>
      </div>
    )
  }
  return (
    <div className="flex w-full py-[7px] pl-[7px] pr-[9.8px] gap-2 ">
     <Image  className="rounded-md" src={`https://statusinvest.com.br/img/company/avatar/${imageId}.jpg?v=33`} width={40} height={40} alt='Stock logo'/>
     
      <div className="flex flex-col w-full">
       <StocksItemHeading ticker={stockTicker} name={stockName}/>
       <div className="flex w-full items-center gap-2">
       <StocksItemType body={bodyContent}/>
         <div className="flex   relative">
        <MdOutlineArrowRight size={28} className="absolute -left-[14px] -bottom-2 text-[#03927e]"/>
        </div>
       
      </div>
     
     </div>
      
    </div>
  )
}
