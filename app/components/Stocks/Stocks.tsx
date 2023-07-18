import { StocksHeader } from "./StocksHeader";
import { StocksTables } from "./StocksTables";

export function Stocks() {
  return (
    <div className="flex flex-col items-center mt-10 w-full justify-center">
       <StocksHeader />
       <div className="max-w-[1110px]  w-full">
        <StocksTables />

       </div>
    </div>
  )
}
