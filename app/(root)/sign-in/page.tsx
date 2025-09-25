import React from 'react'
import AuthForm from '@/components/AuthForm'
import Image from 'next/image'

const page = () => {
  return (
    <section className='mx-auto m-[50%]'>
      <Image
      width={20}
      height={20}
      src='/icons/greenlogo.svg'
      alt='logo'
      className='w-[80%]'
      />
        <AuthForm type='sign-in'/>
    </section>
  )
}

export default page