import React from 'react'
import Navbar from './Navbar';

type HeaderProps = {
    children: JSX.Element | JSX.Element[];
    classNames?: string;
}

const Header = ({ children, classNames }: HeaderProps) => {
  return (
    <div className={`gradient-overlay pb-20 ${classNames && classNames}`}>
        <Navbar />
        <main>
            { children }
        </main>
    </div>
  )
}

export default Header;