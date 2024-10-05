import React from 'react'
import Hello from './components/Hello.tsx'
import MyButton from './components/MyButton.tsx'

interface User {
  id: number;
  name: string;
}

const App = () => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked from the parent btn handler ',e)
  }

  // const isAdmin = true;

  // let users: User[] = [
  //   { id: 1, name: 'John' },
  //   { id: 2, name: 'Alex' }
  // ]

  return (
    <div>
      <MyButton customOnClick={handleClick} />
      {/* <h1>All users</h1>
      <ul>
        {
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })
        }
      </ul> */}
      {/* {isAdmin ? <Hello/> : <h1>Hello User</h1>} */}
      {/* <Hello /> */}
    </div>
  )
}

export default App