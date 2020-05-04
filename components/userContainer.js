import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchUserRequest,fetchUserSuccess,fetchUserFailure,fetchUser} from '../redux'
function UserContainer () {
  const users=useSelector(state=>state.user.users);
  const isLoading=useSelector(state=>state.user.isLoading);
  const error=useSelector(state=>state.user.error);
  const dispatch=useDispatch();
  const [searchName,setSearchName]=useState('');
  const [filteredUsers,setFilteredUsers]=useState([]);
  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  useEffect(()=>{
    console.log(searchName);
     if(searchName!==''){
      const userList=users.filter(user=>{
        return user.name.indexOf(searchName)!==-1;
        })
       setFilteredUsers(userList);
     } else {
       setFilteredUsers(users);
     }
  },[searchName,users])
  return (
    <React.Fragment>
    <input type="text" placeholde="Search by name" value={searchName} 
    onChange={(event)=>setSearchName(event.target.value)}/>
        {
          isLoading ?(<h2>Loading</h2>
            ):error?(<h2>{error}</h2>)
            :(filteredUsers && filteredUsers.length && filteredUsers.map(user=>{
            return <p id={user.id}>{user.name}</p>
          }))}
  </React.Fragment>
  )
}


export default UserContainer;