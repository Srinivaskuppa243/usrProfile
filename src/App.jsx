import { useState,useEffect } from 'react'
import UserList from './components/UserList'
import { Route,Routes } from 'react-router-dom'
import UsrDet from './components/UsrDet'

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setUsers(data))
          .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className='app'>
      <div className='text-center'>
        <h1 className='mt-4'>User Profiles</h1>
      </div>
        <Routes>
          <Route path='/' element={<UserList/>}/>
          <Route path="/usr/:id" element={<UsrDet users={users}/>} />
        </Routes>
    </div>
  )
}

export default App
