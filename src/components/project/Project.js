import React from 'react';
import './Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

const Project = () => {
  const githubPet = (
    <a
      target='_self'
      href='https://github.com/Pet-Project-Alchemy'
      className='linkbtn'
    >
      Github Repo
    </a>
  );
  const petweb = (
    <a
      target='_self'
      href='https://pet-pals-staging.netlify.com/'
      className='linkbtn'
    >Website</a>
  );
  const githubMusic = (
    <a
      target='_self'
      href='https://github.com/evestockstill/musicLab'
      className='linkbtn'
    >
      Github Repo
    </a>
  );
  const musicweb = (
    <a
      href='https://elastic-goldberg-d50ed5.netlify.com'
      className='linkbtn'
    >
      Website
    </a>
  );
  const gitfront = (
    <a
      target='_self'
      href='https://github.com/Alchemy-Frontpage'
      className='linkbtn'
    >
      Github Repo
    </a>
  );
  const frontweb = (
    <a
      target='_self'
      href='https://front-pagenews.herokuapp.com/'
      className='linkbtn'
    >
      Website
    </a>
  );
//   const githubPet = (
//     <a
//       target='_self'
//       href='https://github.com/Pet-Project-Alchemy'
//       className='linkbtn'
//     >
//       Github Repo
//     </a>
//   );
//   const petweb = (
//     <a
//       target='_self'
//       href='https://pet-pals-staging.netlify.com/'
//       className='linkbtn'
//     >Website</a>
//   );
  return (
    <>
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
                Pet Pals is an app that connects neighbors and their dogs to
                each other to exchange a quick walk or bathroom break when
                working opposite shifts. Done in a week long sprint with mob,
                pair, and solo coding. I was responsible for the design wire
                frame and applied the styling for most of the project. I also
                worked on the back end creating models and routes. Created with
                React and React Hooks. React, Hooks, MongoDB, socket.io, SASS,
                npx, Jest
              </p>
              <span>{githubPet}</span>
              <span>{petweb}</span>
              <span>{githubMusic}</span>
              <span>{musicweb}</span>
              <span>{gitfront}</span>
              <span>{frontweb}</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Project;
