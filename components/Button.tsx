import React, { ReactNode } from 'react'

type ButtonPros = {
 icon?: ReactNode,
 text: string,
 className?: string,
 loadingState?: boolean
 onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({icon, onClick, text, className, loadingState}: ButtonPros) => {
  return (
    <button onClick={onClick} disabled={loadingState} className={`bg-[#299D91] text-xs flex items-center gap-1 px-3 py-1 rounded-sm ${className}`}>
        <p className='text-sm'>{text}</p> 
        {icon}
    </button>
  )
}

export default Button