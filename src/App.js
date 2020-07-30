import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import './App.css';

const App = () => {
  return (
    <>
    <Route component={HomePage} path={['/@:username','/']} exact />
    <Route component={LoginPage} path="/login"/>
    <Route component={RegisterPage} path="/register"/>
    <Route component={WritePage} path="/write"/>
    <Route component={PostPage} path="/@:username/:postId"/>
    </>
  );
};

export default App;