import './App.css'
import { useState } from 'react'

import ScanerBlock from './components/Scaner/ScanerBlock'
import UsersList from './components/Users/UsersList'

const INITIAL_DATA = [
  {
    username: "User Name",
    age: 18
  },
  {
    username: "User Name",
    age: 19
  }
]

export default function App() {
  const [users, setUsers] = useState(INITIAL_DATA);

  const onResultScanHandler = (result) => {
    setUsers([{ username: result?.username, age: result?.age }, ...users]);
  };

  const onDeleteUserHandler = (username) => {
  }

  return (
    <div>
      <ScanerBlock onResultScan={onResultScanHandler} />
      <UsersList users={users} onDeleteUser={onDeleteUserHandler}/>
    </div>
  )
}
