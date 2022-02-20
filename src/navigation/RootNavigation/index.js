// react
import React from 'react';
// navigation
import {Routes, Route} from 'react-router-dom';
// pages
import {Dashboard, Characters, WatchList} from '../../pages';


const RootNavigation = () => {
    return (
      <Routes>
        <Route path={"/"} element={<Dashboard />}>
          <Route index element={<Characters/>}/>
          <Route path={'/watch-list'} element={<WatchList/>}/>
        </Route>
      </Routes>
    );
}

export default RootNavigation;