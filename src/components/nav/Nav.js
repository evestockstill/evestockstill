import React from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
// import Resume from '../resume/Resume';





const Nav = () => {
  const user = (
    <NavLink to='/resume' className='links'>
      Resume
      <FontAwesomeIcon
        icon='user'
        className='fa'
        id='resume'
        data='user'
      ></FontAwesomeIcon>
    </NavLink>
  );
  const linkedIn = (
    <a className='links' href='https://www.linkedin.com/in/evestockstill/'>LinkedIn
      <FontAwesomeIcon
        icon={['fab', 'linkedin']}
        className='fa'
        id='linkedin'
      ></FontAwesomeIcon>
    </a>
  );
  const github = (
    <a className='links' href='https://www.github.com/evestockstill'>
      Github
      <FontAwesomeIcon
        icon={['fab', 'github']}
        className='fa'
        id='github'
      ></FontAwesomeIcon>
    </a>
  );
  return (
    <>
      <nav>
        <ul>
          <li>
            {user}
          </li>
          <li>{linkedIn}</li>
          <li>
            {github}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
