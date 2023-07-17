import Image from 'next/image'
import {FaArrowRight} from 'react-icons/fa'

import { NavBar } from './components/NavBar/NavBar'
import { Card } from './components/Cards/Card'
import { Stocks } from './components/Stocks/Stocks'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      {/* NavBar */}
      {/* <div className='w-full sticky  z-40 top-0 h-[70px] text-center border'>NavBar</div> */}
      <NavBar />
      <div className='w-full mt-[60px] bg-[url("/images/home_1000.jpg")] bg-cover  bg-no-repeat'> 
       <div className='flex flex-col text-white items-center gap-4 justify-center pt-[14px] pb-7 px-[137px]'>
        <div className='w-full rounded-md h-[50px] bg-[#ed6d23]'/>
        <div className='flex gap-20 '>
          <div className='flex flex-col items-center justify-center gap-2 '>
            <h1 className=' [text-shadow:_1px_1px_5px_rgb(0_0_0_)] font-black self-start text-4xl '>
              GERENCIE TODOS SEUS <br/>INVESTIMENTOS EM  <br/>UM LUGAR SÓ!
            </h1>
             <h3 className='[text-shadow:_1px_1px_5px_rgb(0_0_0_)] self-start   text-2xl'>Uma plataforma completa para você acompanhar os<br/> seus investimentos com segurança</h3>
             <button className='flex items-center gap-2 self-start uppercase mt-2 text-sm rounded-[0.3rem] bg-[#d64000] p-2'>Conheça os <strong>Nossos planos</strong>
             <FaArrowRight/></button>
          </div>
          <div className='flex flex-col gap-4 '>
          <Card mainText='Ibovespa' value={117.740} valueType='pts' variation={120.420} variationType='pts' />
          <Card mainText='CDI' mainComparison value={'13,545'} valueType='%' comparison variation={'1,072'} variationType='%'/>
          <Card mainText='IPCA' mainComparison value={'3,162'} valueType='%' comparison variation={'-0,080'} variationType='%'/>
          </div>
         
        </div>
        
        
      </div>
      </div>
      <Stocks />
      <div className='w-full bg-yellow-300'>FII</div>
      <div className='w-full bg-teal-300'>BDR</div>
      <div className='w-full bg-rose-300'>TESOURO</div>
    </main>
  )
}
