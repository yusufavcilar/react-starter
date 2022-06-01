import PropTypes from "prop-types";

function User({name , surname , age , isLogin , friends , address}){
if (!isLogin) {
    return <div>Giriş yapınız</div>
}

    return (
    <>
    <h1>
         {`${name} ${surname} ${age}`} 
    </h1>
      {address.title} {address.zip}
  
  {
      friends && friends.map((friend) => 
      <div key={friend.id} >
          {friend.name}
          </div>)
  }
    </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    age : PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    isLogin: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({title:PropTypes.string, zip:PropTypes.number})
}

User.defaultProps = {
    isLogin : false,
}

export default User;