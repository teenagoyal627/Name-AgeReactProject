import React, { useState } from 'react';
// import UsersList from './Component/UserDetails/UsersList';
import AddUser from './Component/Users/AddUser';
import UsersList from './Component/Users/UsersList';

// import AddUser from './component/Users/AddUser';
// import UsersList from './component/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    < >
      <AddUser
       onAddUser={addUserHandler} />
      <UsersList
      users={usersList} />
    </>
  );
}

export default App;