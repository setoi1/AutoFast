import React from 'react';

import './TopNav.css';

export default function TopNav() {
  const isAuth = false;

  return (
    <header id='top-nav-header'>
      <nav className='top-nav'>
        <ul className='top-nav-list'>
          <li>
            <span className='top-nav-logo'>AutoFast</span>
          </li>
          <li>
            <form className='top-nav-search'>
              <input className='top-nav-input'></input>
            </form>
          </li>
          {isAuth ? 
            (
              <li>
                <button className='top-nav-profile'>
                  <i />
                </button>
              </li>
            )
            :
            (
              <>
                <li>
                  <button>
                    Create account
                  </button>
                  <button>
                    Sign in
                  </button>
                </li>
              </>
            )
          }
        </ul>
      </nav>
    </header>
  );
}
