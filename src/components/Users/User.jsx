import './User.css';
import Card from '../UI/Card'

function User({username, age}) {
  
    return ( 
      <Card className="user">
          <div className="user__username">{username}</div>
          <div className="user__age">{age}</div>
          <input class="user__button" type="button" value="Delete"/>
      </Card>
    )
}

export default User;
