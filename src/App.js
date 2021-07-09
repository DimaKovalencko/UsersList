import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UsersList';

function App() {
  return (
    <div className="container pt-5">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
