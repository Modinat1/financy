import React, { ReactNode } from 'react'

type ButtonPros = {
 icon?: ReactNode,
 text: string,
 className?: string,
 loadingState?: boolean
}

const Button = ({icon, text, className, loadingState}: ButtonPros) => {
  return (
    <button disabled={loadingState} className={`bg-[#299D91] text-xs text-[#FFFFFF] flex items-center px-4 py-1 rounded-sm ${className}`}>
        {text} 
        {icon}
    </button>
  )
}

export default Button