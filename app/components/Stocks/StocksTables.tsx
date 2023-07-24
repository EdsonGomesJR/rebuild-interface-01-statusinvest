import { HiOutlinePlusSm } from "react-icons/hi";
import { StocksItem } from "./StocksItem";
import { SeeAllButton } from "../SeeAllButton";
let stocks = [{
  ticker: 'yduq3',
  name: 'yduqs',
  imageId: 252,
  price: '19,57',
  variationPercentage: '3,00'
},
{
  ticker: 'alpa4',
  name: 'alpargatas',
  imageId: 488,
  price: '19,57',
  variationPercentage: '3,00'
}, {
  ticker: 'MRVE3',
  name: 'MRV ENGENHARIA E PARTICIPAÇÕES',
  imageId: 238,
  price: '13,53',
  variationPercentage: '2,27'
},
{
  ticker: 'BRAP4',
  name: 'BRADESPAR',
  imageId: 381,
  price: '22,81',
  variationPercentage: '1,38'
},
{
  ticker: 'goau4',
  name: 'metalurgica gerdau',
  imageId: 399,
  price: '12,98',
  variationPercentage: '1,33'
},
{
  ticker: 'csna3',
  name: 'CSN',
  imageId: 397,
  price: '12,86',
  variationPercentage: '1,26'
}]
export function StocksTables() {
  return (
    <>

   

   
    <div className="grid grid-cols-4 justify-items-center  mt-[20px] gap-4">
       <div className=" w-full">
        <h3 className="block text-[1.5rem] uppercase   font-light mb-2">ALTAS</h3>
        <div className="grid   grid-rows-6 divide-y-2 bg-white ">
          {stocks.map((stock)=> (
            <StocksItem key={stock.ticker} isHigher stockName={stock.name}  stockTicker={stock.ticker} imageId={stock.imageId} price={stock.price} variationPercentage={stock.variationPercentage}/>
          ))}
        </div>
        <SeeAllButton />
       </div>
       <div className=" w-full">
        <h3 className="block text-[1.5rem] uppercase font-light mb-2">baixas</h3>
        <div className="grid   grid-rows-6 divide-y-2 bg-white ">
            <StocksItem imageId={291} stockTicker="brfs3" stockName="brf" variationPercentage="-2,06" price="8,54"  />
            <StocksItem imageId={488} stockTicker="alpa4" stockName="alpargatas" variationPercentage="-1,87" price="8,40" />
            <StocksItem imageId={647} stockTicker="cash3" stockName="méliuz s.a" variationPercentage="-1,84" price="7,48" />
            <StocksItem imageId={315} stockTicker="also3" stockName="Aliascsonae" variationPercentage="-1,60" price="23,96" />
            <StocksItem imageId={435} stockTicker="tots3" stockName="totvs" variationPercentage="-1,52" price="28,57" />
            <StocksItem imageId={577} stockTicker="lwsa3" stockName="locaweb serviços de internet" variationPercentage="-1,51" price="7,19" />
            <SeeAllButton />

        </div>
       </div>
       <div className=" w-full">
        <h3 className="block text-[1.5rem] uppercase font-light mb-2">dividendos</h3>
        <div className="grid   grid-rows-6 divide-y-2 bg-white ">
            <StocksItem imageId={343} type="dividend" stockTicker="sanb11" stockName="banco santander" dividendType="JCP" dividendDate="20/07/2023" dividendValue="0,4033"/>
            <StocksItem imageId={344} type='dividend' stockTicker="itub4" stockName="banco itau unibanco" dividendType="JCP" dividendDate="31/07/2023" dividendValue="0,0177"/>
            <StocksItem imageId={330} type='dividend' stockTicker="bbdc3" stockName="bradesco" dividendType="JCP" dividendDate="01/08/2023" dividendValue="0,0172"/>
            <StocksItem imageId={330} type='dividend' stockTicker="bbdc4" stockName="bradesco" dividendType="JCP" dividendDate="01/08/2023" dividendValue="0,0190"/>
            <StocksItem imageId={344} type='dividend' stockTicker="itub4" stockName="banco itau unibanco" dividendType="JCP" dividendDate="31/08/2023" dividendValue="0,0177"/>
            <StocksItem imageId={330} type='dividend' stockTicker="bbdc3" stockName="bradesco" dividendType="JCP" dividendDate="01/09/2023" dividendValue="0,0172"/>
            <SeeAllButton />

        </div>
       </div>
      <div className=" w-full">
         <h3 className="block text-[1.5rem] uppercase font-light mb-2">Comunicados</h3>
        <div className="grid   grid-rows-4 divide-y-2 bg-white ">
            <StocksItem imageId={408} type="announcement" stockTicker="petr4" stockName="petrobras"  />
            <StocksItem imageId={189} type="announcement" stockTicker="wege3" stockName="weg"/>
            <StocksItem imageId={407} type="announcement" stockTicker="vbbr3" stockName="vibra energia s.a"/>
            <StocksItem imageId={381} type="announcement" stockTicker="brap4" stockName="bradespar"/>
        
            <SeeAllButton />

        </div>
      </div>
      </div>
        <div className="flex mt-8  items-center  justify-center gap-2 ">
          <button className="flex items-center gap-4 border-2 px-3 py-2 rounded-[4px] text-[#bd3800] border-[#bd3800]">
          <HiOutlinePlusSm />
          <span className="block uppercase font-bold">detalhe sobre ações</span>
          </button>
        </div>
    </>
  )
}

