import React,{useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../Store/auth-context';

const Navigation = (props) => {
    const ctx = useContext(AuthContext)
  return (
            <nav className={classes.nav}>
            <ul>
            {props.isLoggedIn && (
            <li>
                <a href="/">Users</a>
            </li>
        )}
            {props.isLoggedIn && (
            <li>
                <a href="/">Admin</a>
            </li>
            )}
            {props.isLoggedIn && (
            <li>
                <button onClick={ctx.onLogout}>Logout</button>
            </li>
            )}
      </ul>
    </nav>
        );
};

export default Navigation;
