// react
import React from 'react';
// navigation
import {Outlet} from 'react-router-dom';
// components
import { MenuPanel } from '../../components';
// styles
import styles from './styles.module.scss';

const Dashboard = () => {
    return (
      <div className={styles.dashboard}>
        <MenuPanel />
        <div className={styles.dashboard__content}>
          <Outlet />
        </div>
      </div>
    );
}

export default Dashboard;