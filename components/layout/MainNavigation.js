import Link from 'next/link';
import React from "react";


import classes from './MainNavigation.module.css';

 function MainNavigation() {
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img className='icons' src='\socialmedia\india-meetup-high.png' alt='logo' />
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/login'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;
