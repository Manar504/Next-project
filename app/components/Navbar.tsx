import Link  from 'next/link';
import React from 'react' ;
import Image from 'next/image';
import { NavLinks } from '@/constant';

const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'> 
        <Link href="/">
            <Image  
            src="/logo.svg"
            width={115}
            height={43}
            alt='Flexibble'
            
            />
        </Link> 
        <ul className='xl:flex hidden text-small gap-7'> 
    {NavLinks.map((link)=>(
    <Link href={link.href} key={link.key}
        > {link.text}</Link>
    ))}

        </ul>

        </div> 
<div className='flexCenter gap-4'>

</div>
    </nav>
  )
}

export default Navbar
