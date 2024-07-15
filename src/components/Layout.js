import React from 'react';
import Navbar from './Navbar';
import Scroller from './scroller';

function Layout({children}) {
  return (
    <div >
      <div>
        <Navbar></Navbar>
      </div>
      {/* <Scroller></Scroller> */}
      <main>{children}</main>
    </div>
    
  )
}

export default Layout
