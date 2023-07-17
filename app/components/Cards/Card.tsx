import {IconType} from 'react-icons'
import {FaArrowRight} from 'react-icons/fa'
interface CardProps{
  mainText: string
  mainComparison?: boolean
  value: number | string
  valueType: string
  icon?: IconType
  variation: number | string
  variationType: string 
  comparison?: boolean

}
export function Card({mainText, mainComparison, value, valueType, icon:Icon, variation, variationType, comparison}:CardProps) {
  return (
  <div className='  '>
     <div className="flex flex-col   bg-white  items-center relative shadow-[0_2px_2px_0px_rgba(0,0,0,0.14)] rounded-[7px] p-4 w-[250px]  text-[#00598a]">
      <div className='flex gap-2 items-center'>
        <strong className='text-xl'>{mainText}</strong> 
        <small className='text-[11.2px]'>{mainComparison ? '(últ. 12m)' : ''}</small>
      </div>
      <strong className='font-extralight text-[42px]'>{value}<span className='text-[28px]'>{valueType}</span></strong>
      <div className='flex gap-1 items-center justify-between'> 
          <strong className='block text-sm'>{variation}<span>{variationType}</span></strong> 
          {/* mes atual - 1 ou max 52 semanas do ibovespa*/}
          <span className='block font-light self-end text-[9.8px]'> {comparison ? 'Junho de 2023': 'máx. 52 semanas'}</span>
      </div>
         <FaArrowRight className=' font-normal absolute right-[14px] bottom-[16px]' />
     </div>
  </div>
  )
}
