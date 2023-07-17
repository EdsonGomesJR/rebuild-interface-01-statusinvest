import {IconType} from 'react-icons'
interface NavBarButtonProps{
  icon: IconType
  text?: string
  textSmall?: string
  spanText?: string
}
export function NavBarButton({icon: Icon,text, textSmall, spanText}: NavBarButtonProps) {
  return (
   <button className='flex items-center uppercase text-sm'>
    <span className='flex flex-col leading-[0.9rem] '>
     <small className='block text-[75%] self-start'> {textSmall}</small>
     <span className='block '>{text}</span>
      <strong className='block self-start'>{spanText}</strong>
    </span> 
    <Icon size={14} />
   </button>
    
  )
}
