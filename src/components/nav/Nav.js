import React from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
// import Resume from '../resume/Resume';





const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          
          <NavLink to='/resume' ><li>reume</li>
           
            {/* <a
              className='links'
              href='https://www.linkedin.com/in/evestockstill/'
            >
              LinkedIn
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                className='fa'
                id='linkedin'
              ></FontAwesomeIcon>
            </a> */}
          </NavLink>
          <li>
            <a className='links' href='https://www.github.com/evestockstill'>
              Github
              <FontAwesomeIcon
                icon={['fab', 'github']}
                className='fa'
                id='github'
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
