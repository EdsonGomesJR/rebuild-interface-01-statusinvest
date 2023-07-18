import {FaArrowDown, FaArrowRight} from 'react-icons/fa'
export function StocksHeader() {
  return (
    <div className="flex flex-col gap-4 max-w-[1140px] w-full p-2">
       <div className="flex justify-between w-full gap-2">
        <div className='flex items-center gap-3'>

        <h1 className='text-[#00598a] uppercase font-black text-4xl'>Ações</h1> 
        <span className='font-bold text-slate-600 text-xs mt-2'>BOVESPA e BM&F</span>
        </div>
        <div className="grid grid-cols-4 h-auto  gap-4  ">
        <div className='flex flex-col border-[#c1c1c1] mr-4 w-[110%] border rounded-[0.3rem] py-2 px-2 relative'>
          <h3 className='text-xs mb-1 font-bold text-slate-[#505050]'>IBOVESPA</h3>
          <div className='flex font-light ml-2 items-center'>
            <FaArrowDown size={14} className='text-[#d0181e] mr-[2px]' />
            <span>{'-0,41%'}</span>
          <FaArrowRight size={14} className='absolute text-[#00598a] bottom-2 right-2'/>
          </div>
        </div>
        <div className='border border-[#c1c1c1] text-slate-[#505050] rounded-[0.3rem] ml-3 p-2'>
          <h3 className='text-xs mb-1 font-bold'>EMPRESAS</h3>
            <span className='font-light'>422</span>
        </div>
        <div className='border border-[#c1c1c1]  text-slate-[#505050] rounded-[0.3rem] p-2'>
          <h3 className='text-xs mb-1 font-bold'>SEGMENTOS</h3>
            <span className='font-light'>96</span>
        </div>
        <div className='border border-[#c1c1c1]  text-slate-[#505050] rounded-[0.3rem] relative p-2'>
          <h3 className='text-xs mb-1 font-bold'>IPO</h3>
          <span className='font-light'>100
            
          </span>
          <FaArrowRight className='text-[#00598a] absolute right-2 bottom-2' />
        </div>
        </div>
       </div>
       <div className='flex w-1/2 items-center justify-center gap-8 flex-col self-center mt-10'>
       <div className='flex  w-full'>
       <button className='px-6 py-2 w-full text-sm border-b-2 bg-[#00598a1f] text-[#003857] uppercase font-semibold border-b-[#00598a]'>Hoje</button>
        <button className='px-6 py-2 w-full  text-sm text-[#0070ae] font-semibold uppercase'>Eventos</button>
       </div>
       <div className='flex w-full p-2 rounded bg-white flex-col'>
        <label htmlFor="filtro" className='text-xs font-semibold text-[#bd3800]'>FILTRO POR ÍNDICE</label>
        <select  id='filtro' placeholder='Ibovespa' name='filtro' className='outline-none border-b-2 border-[#9e9e9e]'>
         <option value="ibovespa">Ibovespa</option>  
         <option value="cdi">CDI</option>  
         <option value="ipca">IPCA</option>  
         </select>
       </div>
       </div>
    </div>
  )
}
