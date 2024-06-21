const UserCard =({image, fullName})=>{
    return(
        <div>
            <img src={image} alt={`${fullName}`} />
            <h3>{fullName}</h3>
        </div>
    )
}
export default UserCard;