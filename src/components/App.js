import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons';
import  Resume  from '../components/resume/Resume';
import  Header from '../components/header/Header';

library.add(fab, faUser, faCoffee);

export default function App() {
  return (
    <>
      <Router>
       
        <Route exact path='/' component={Header} />
        <Route path='/resume' component={Resume} />
            
       
      </Router>
    </>
  );
}
