import React from 'react';
import './Project.scss';
import { text } from '@fortawesome/fontawesome-svg-core';
// import { NavLink } from 'react-router-dom';

const Project = () => {
  return (
    <section className='section-main'>
      <div className='title'>
        <div className='title-text'>
          <h3 className='section-title'>Projects</h3>
        </div>
      </div>
      <div className='project-container'>
        <article className='project-item project-item-black'>
          <div className='front-text'>
            <h1>Pet Pals</h1>
          </div>
          <div className='back-text'>
            <h1>Pet Pals</h1>
            <p>
              Pet Pals is an app that connects neighbors and their dogs to each
              other to exchange a quick walk or bathroom break when working
              opposite shifts. Done in a week long sprint with mob, pair, and
              solo coding. I was responsible for the design wire frame and
              applied the styling for most of the project. I also worked on the
              back end creating models and routes. Created with
              React and React Hooks. React, Hooks, MongoDB, socket.io, SASS,
              npx, Jest
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
