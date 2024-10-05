import React from 'react'
import Hello from './components/Hello.tsx'


interface User {
  id: number;
  name: string;
}

const App = () => {

  const isAdmin = true;

  let users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alex' }
  ]

  return (
    <div>
      <h1>All users</h1>
      <ul>
        {
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })
        }
      </ul>
      {/* {isAdmin ? <Hello/> : <h1>Hello User</h1>} */}
      {/* <Hello /> */}
    </div>
  )
}

export default App