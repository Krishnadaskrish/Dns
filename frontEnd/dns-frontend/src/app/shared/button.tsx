import React from 'react'

interface ButtonProps {
    content : string;
  }


const CustomButton: React.FC<ButtonProps> = ({ content }) => {
  return (
    <button className='text-white bg-blue-500 border w-[200px] py-2 border-blue-500 '>{content}</button >
  )
}

export default CustomButton