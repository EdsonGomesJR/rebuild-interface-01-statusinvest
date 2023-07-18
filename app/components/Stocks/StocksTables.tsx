import { StocksItem } from "./StocksItem";

export function StocksTables() {
  return (
    <div className="grid grid-cols-4 justify-items-center  mt-[20px] gap-4">
       <div className=" w-full">
        <h3 className="block text-[1.5rem] uppercase   font-light mb-2">ALTAS</h3>
        <div className="grid   grid-rows-6 divide-y-2 bg-white ">
            <StocksItem isHigher stockName="yduqs"  stockTicker="yduq3" imageId={252} price="19,57" variationPercentage="3,00"/>
            <StocksItem isHigher stockName="alpargatas"  stockTicker="alpa4" imageId={488} price="9,15" variationPercentage="2,69"/>
            <StocksItem isHigher stockName="MRV ENGENHARIA E PARTICIPAÇÕES"  stockTicker="MRVE3 " imageId={238} price="13,53" variationPercentage="2,27"/>
            <StocksItem isHigher stockName="yduqs"  stockTicker="yduq3" imageId={224} price="18,34" variationPercentage="3,00"/>
            <StocksItem isHigher stockName="yduqs"  stockTicker="yduq3" imageId={406} price="42,87" variationPercentage="3,00"/>
            <StocksItem isHigher stockName="yduqs"  stockTicker="yduq3" imageId={189} price="35,97" variationPercentage="3,00"/>
        </div>
       </div>
       <div className=" w-full">
        <h3 className="block text-[1.5rem] uppercase font-light mb-2">baixas</h3>
        <div className="grid   grid-rows-6 divide-y-2 bg-white ">
            <StocksItem   />
            <StocksItem  />
            <StocksItem />
            <StocksItem />
            <StocksItem />
            <StocksItem />
        </div>
       </div>
       <div className=" w-full">
        <h3 className="block text-[1.5rem] uppercase font-light mb-2">dividendos</h3>
        <div className="grid   grid-rows-6 divide-y-2 bg-white ">
            <StocksItem  />
            <StocksItem />
            <StocksItem />
            <StocksItem />
            <StocksItem />
            <StocksItem />
        </div>
       </div>
       <div className=" w-full">
        <h3 className="block text-[1.5rem] uppercase font-light mb-2">Comunicados</h3>
        <div className="grid   grid-rows-6 divide-y-2 bg-white ">
            <StocksItem  />
            <StocksItem />
            <StocksItem />
            <StocksItem />
            <StocksItem />
            <StocksItem />
        </div>
       </div>
       
    </div>
  )
}
