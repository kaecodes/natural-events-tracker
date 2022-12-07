import React from 'react'; 
import { Icon } from '@iconify/react'; 
import broadcast from '@iconify/icons-mdi/broadcast'; 

const Header = () => {
  return (
    <div className="bg-[#1425ba] text-[#fff] text-4xl py-4 font-bold">
      <h1 className="text-center"><Icon className="inline-block text-[#cf1711]" icon={broadcast}></Icon> Natural Events Tracker<Icon className="inline-block text-[#cf1711]" icon={broadcast}></Icon></h1>
      <h4 className="text-lg text-center">(Powered by NASA) </h4>
    </div>
  )
}

export default Header