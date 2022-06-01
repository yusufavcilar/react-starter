import PropTypes from "prop-types";

function User({name , surname , age , isLogin , friends}){
    return (
    <>
    <h1>
         {isLogin  ? `${name} ${surname} ${age}`: "Giriş yapınız"} 
    </h1>
  {
      friends.map((friend) => 
      <div key={friend.id} >
          {friend.name}
          </div>)
  }

    </>
    )
}

User.propTypes = {
    name: PropTypes.string,
    surname : PropTypes.string,
    age : PropTypes.number,
    isLogin: PropTypes.bool,
    friends: PropTypes.array


}

export default User;