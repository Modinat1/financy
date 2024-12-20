import React from 'react'

type pagesHeaderProps = {
    pageTitle: string
}

const PagesHeader = ({pageTitle}: pagesHeaderProps) => {
  return (
    <header>
        <h2 className='text-[#878787] text-sm pb-2'>{pageTitle}</h2>
    </header>
  )
}

export default PagesHeader