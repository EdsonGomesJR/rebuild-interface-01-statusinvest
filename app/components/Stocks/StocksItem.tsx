
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
  announcementsQty?: string
  
}

export function StocksItem({isHigher, announcementsQty='1',type ,price, dividendDate, dividendType,dividendValue, imageId, stockName, stockTicker, variationPercentage} : StocksItemProps) {

  let bodyContent = (
 
    <div className="flex w-full justify-between  ">
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
      <div className="items-center w-[95%] flex justify-between leading-none ">
          <span className="flex items-center text-[16px] leading-none " title="Valor a ser distribuído aos acionistas">
            <span className=" leading-none  text-[18px] font-extralight">R$</span>{dividendValue}
            </span>
        <div className="text-center items-center flex gap-[1px] flex-col" title="Data limite de direito ao provento, após esta data, o ativo fica ex-dividendo">
          <span className=" text-[9px]    font-bold">
             {dividendDate}
          </span>
          <div className="flex items-center leading-none  w-full md:w-1/2  text-[9px] justify-center bg-[#026558] text-white py-[1px] px-[7px] font-semibold rounded-xl">
           <span className="leading-none " title="Tipo do provento">{dividendType}</span>
          </div>
        </div>
      </div>
    )
  }

  if(type === 'announcement') {
    bodyContent = (
      <div className="flex items-center justify-center w-full text-[11px] gap-[3px] mt-[2px] leading-none">
        <div className="text-[11px] leading-none w-5 h-5 border rounded-[0.3rem]  border-[#868686] font-black flex items-center justify-center p-[1.4px]"> 
         <span>{announcementsQty}</span>
        </div>
          <span className="text-[11.6px] text-[#565656] font-semibold">comunicados</span>
          <span className="text-[10.2px] text-[#026558] font-semibold">novos/atualizados</span>
      </div>
    )
  }
  return (
    <div className="flex w-full py-[7px] pl-[7px] pr-[9.8px] gap-2 leading-none">
     <Image  className="rounded-md" src={`https://statusinvest.com.br/img/company/avatar/${imageId}.jpg?v=33`} width={40} height={40} alt='Stock logo'/>
     
      <div className="flex flex-col w-full leading-none">
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
