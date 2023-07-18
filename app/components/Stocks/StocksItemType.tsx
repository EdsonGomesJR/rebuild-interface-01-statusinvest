import { ReactElement } from "react"

interface StocksItemTypeProps {
 
  body: ReactElement
}
export function StocksItemType({ body}: StocksItemTypeProps) {
  return (
    <div className="flex w-full gap-2" >
       {body}
    </div>
  )
}
