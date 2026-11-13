import { useState } from 'react'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 z-50 w-full bg-[#C6FFA0] text-[#1A1A19] px-8 py-4 text-black shadow-md md:flex md:justify-between'>

      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>Portfolio</h1>

        {/* hamburger button */}
        <button onClick={() => setOpen(!open)} className='md:hidden'>☰</button>
      </div>

      <ul
        className={`${open ? 'flex' : 'hidden'}
        absolute right-6 top-12 w-48 flex-col gap-4 rounded-lg bg-[#C6FFA0] p-4 text-center text-[#1A1A19] shadow-lg
        md:static md:flex md:w-auto md:flex-row md:gap-6 md:rounded-none md:bg-transparent md:p-0 md:py-1 md:shadow-none`}
      >

        <li><a href='#Home' onClick={() => setOpen(false)}>Home</a></li>
        <li><a href='#About' onClick={() => setOpen(false)}>About</a></li>
        <li><a href='#Education' onClick={() => setOpen(false)}>Education</a></li>
        <li><a href='#Projects' onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href='#Contacts' onClick={() => setOpen(false)}>Contacts</a></li>
      </ul>

    </nav>
  )
}