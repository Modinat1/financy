import AuthForm from '@/components/AuthForm'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section className=' grid place-items-center w-[50%] mx-auto'>

<Image
      width={20}
      height={20}
      src='/icons/greenlogo.svg'
      alt='logo'
      className='w-[80%]'
      />

        <AuthForm type='forgot-password'/>
    </section>
  )
}

export default page