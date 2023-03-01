import User from './User';
import './UsersList.css';

const UsersList = ({users}) => {
  
  if (users.length === 0) {return <h2 className="users-list__fallback">nobody</h2>};
  
  return (
    <ul className="users-list">
      {users.map(x => 
          <User
            username={x.username} 
            age={x.age} />
      )}
    </ul>
  )
  
}

export default UsersList;
