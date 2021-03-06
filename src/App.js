import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingPage from './pages/SettingPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import CategoryPage from './pages/CategoryPage';
import ToolBarContiner from './components/common/ToolBarContiner';

const App = () => {
  return (
    <>
      <ToolBarContiner />
      <Route component={HomePage} path={['/@:id', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={SettingPage} path="/setting" />
      <Route component={WritePage} path="/write" />
      <Route component={CategoryPage} path="/category" />
      <Route component={PostPage} path="/@:id/:postId" />
    </>
  );
};

export default App;
