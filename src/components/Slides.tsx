import React from 'react'

interface propsType{
    img: string;
    title: string;
    mainTitle: string;
}

const Slides:React.FC<propsType> = ({img, title, mainTitle}) => {
  return (
    <div className='outline-none border-none relative'>
        <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none"></div>
        <h3 className='text-white text-lg'>{title}</h3>
    </div>
  )
}

export default Slides