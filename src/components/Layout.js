import React from 'react';
import Navbar from './Navbar';

function Layout({children}) {
  return (
    <div >
      <div>
        <Navbar></Navbar>
      </div>

      <main>{children}</main>
    </div>
    
  )
}

export default Layout
