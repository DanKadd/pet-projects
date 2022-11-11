import React, { useState, useEffect } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [invaited, setInvaited] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onClickInvited = (id) => {
    if (invaited.includes(id)) {
      setInvaited((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvaited((prev) => [...prev, id]);
    }
  };

  const onClickSuccess = () => setSuccess(true);

  return (
    <div className="App">
      {success ? (
        <Success count={invaited.length} />
      ) : (
        <Users
          isLoading={isLoading}
          items={users}
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          invaited={invaited}
          onClickInvited={onClickInvited}
          onClickSuccess={onClickSuccess}
        />
      )}
    </div>
  );
}

export default App;
