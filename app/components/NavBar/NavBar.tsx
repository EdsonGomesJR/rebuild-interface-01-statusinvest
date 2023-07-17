'use client'

import { useState, useEffect } from "react";
import {FaSearch} from 'react-icons/fa'
import {MdArrowDropDown} from 'react-icons/md'
import logo from '@/public/images/logo-main.png'
import Image from "next/image";
import { NavBarButton } from "./NavBarButton";
export function NavBar() {
  const [navbarReduced, setNavbarReduced] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarReduced(true);
      } else {
        setNavbarReduced(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
       <>
        <nav className={`bg-gradient-to-l from-[#00598a] to-[#04ab94] z-10 text-white flex items-center justify-center px-[15px] fixed top-0 left-0 right-0 transition-all ease-in-out ${navbarReduced ? 'h-[40px] bg-opacity-75': 'h-[60px]'}`}>
          <div className="flex justify-between items-center w-3/4">
            <Image src={logo} alt='Logo' width={60} height={50}/>
            <div className="flex items-center gap-4">
              <FaSearch />
            <NavBarButton icon={MdArrowDropDown} textSmall="Nossos" spanText="Planos" />
            <NavBarButton icon={MdArrowDropDown} text="Internacional"  />
            <NavBarButton icon={MdArrowDropDown} text="Ações"  />
            <NavBarButton icon={MdArrowDropDown} text="FIIS"  />
            <NavBarButton icon={MdArrowDropDown} text="BDRS"  />
            <NavBarButton icon={MdArrowDropDown} text="Fundos"  />
            <NavBarButton icon={MdArrowDropDown} text="Fundos"  />
            <NavBarButton icon={MdArrowDropDown} text="Outros"  />
            
             
            </div>
            <button className=" text-sm bg-[#d64000] shadow font-black uppercase px-[10px] hover:bg-opacity-90 transition-all py-[6px] rounded-[2px]">Entrar</button>
          </div>  
        </nav>
  
       
  
       
     </>
  )
}
