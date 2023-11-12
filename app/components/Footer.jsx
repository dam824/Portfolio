import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 flex justify-between'>
            <Image src="/images/damien-logo.png" alt="logo damien" width={100} height={50} />
            <p className='text-slate-600'>Tout droits réservés</p>
        </div>
    </footer>
  )
}

export default Footer