import React, { useEffect, useContext, useState } from 'react';
import { Context } from './index';

import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import UserService from './services/UserService';

const App = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  async function getUsers() {
    try {
      const response = await UserService.fetchUserData();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (store.isLoading) {
    return <div>Loadnig...</div>;
  }

  if (!store.isAuth) {
    return (
      <LoginPage/>
    )
  }

  return (
    <div>
      <button onClick={store.logout}>Log out</button>
      <MainPage/>
      <button onClick={getUsers}>Get Users</button>
      {users.map(user => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
};

export default observer(App);