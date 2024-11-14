import React, { useContext } from 'react'
import { AuthContext } from '../provider/UserProvider';
import { NavLink } from 'react-router-dom';

export default function DashBord() {
	const { user,logout} = useContext(AuthContext) ?? {};

  return (
	<>
	{user &&<div>
		<h1>Welcome {user.name}</h1>
		<button onClick={()=>logout!()} >Login</button>



	</div> }
	{!user &&
	<div>
	<h1>Welcome Guest</h1> 
	<NavLink style={{fontSize:"50px", color:"blue"}} to={"/login"}>Login</NavLink>
	</div>
	}
	</>
  )
}
