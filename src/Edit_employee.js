import React from 'react';
import {userData} from './common.js';
class EditApi extends React.Component{

	constructor(props){
		super(props);
		this.state={
			userData:userData,
			newUser:{id:null,
				     name:'',
				     batch:''
				     },
			editable:false,
		}
	}
//==================================================================================================
	handleChange=event=>{    //inputbox

		let newuser=this.state.newUser
		newuser['id']=this.state.editable?newuser['id']:userData.length+1;
		const{name,value}=event.target;
		newuser[name]=value
	}
//===================================================================================================
	handleClick=(e,currentUser)=>{     //edit operation

		this.setState({
			newUser:currentUser,
			editable:true,
		})
	}
//===================================================================================================
	handleSubmit=event=>{                     //form onsubmit click
		event.preventDefault();
		let newuser=this.state.newUser;
		if((newuser['name']||newuser['batch'])==='')
		{
			return
		}
		if(this.state.editable){
			console.log(newuser)
			let alluser=this.state.userData
			this.setState({
				userData:alluser},()=>console.log(userData))
		}else{
			this.setState({
				userData:[...this.state.userData,this.state.newUser]
			})
		}
	}
//======================================================================================================
	handleDelete=(e,id)=>{                           //delete record
		let users = this.state.userData
		let userData = users.filter(user => user['id'] !== id)
		this.setState({
			userData
		})
		
	}
//============================================================================================

render(){
			console.log(this.state.userData)
		  	const{editable,newUser,userData}=this.state
			return(
					<div>
						<form onSubmit={this.handleSubmit}>
							<label>Name:</label>
							<input name="name" onChange={this.handleChange} defaultValue={newUser.name}/><br/>
							
							<label>Batch:</label>
							<input name="batch" onChange={this.handleChange} defaultValue={newUser.batch}/><br/>
							<div>
							{editable?
							<button>Update data</button>:
						     <button onClick={this.handleSubmit}>Add data</button>
						 		}
						 	</div>
						</form>
	<table style={{ border: '1px solid black', marginLeft: '10%'}} >
	<thead>
		<tr>
			<th>ID</th>
			<th>NAME</th>
			<th>Batch</th>
			<th>ACTIONS</th>
		</tr>
	</thead>

	<tbody>
			{userData.map((item,index)=>
			(
			  <tr key={item.id}>
			  <td>{item.id}</td>
			  <td>{item.name}</td>
			  <td>{item.batch}</td>
			 
			 <td><button onClick={(e,currentUser)=>this.handleClick(e,item)}>Edit</button></td>
			 
			 <td><button onClick={(e,id)=>this.handleDelete(e,item.id)}>Delete</button></td>
			  </tr>
		)	
		)}
	</tbody>
	</table>

				</div>
				)
		}
	}
export default EditApi;