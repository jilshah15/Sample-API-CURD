import React from 'react';
import {userData} from './common.js';

class Employee extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userData:userData,
			newUser:{
				id:null,
				name:'',
				batch:'',
			},
			addData:false,
		}
	}
	addNewUser=(event)=>{
		let newUser=this.state.newUser
		newUser['id']=this.state.userData.length+1
		newUser[event.target.name]=event.target.value
		this.setState({
			newUser
		},()=>console.log(this.state.newUser.name,this.state.newUser.batch))
	}
		handleSubmit=(event)=>{
			event.preventDefault();
			this.setState({
				userData:[...this.state.userData,this.state.newUser],
				newUser:{
						id:null,
						name:'',
						batch:'',
				},
				addData:false,
			})
		}

	render(){
		console.log(this.state.userData);
		return(
			<div>
				<div>
				<h1>Employee Registration</h1>
				<form onSubmit={this.handleSubmit}>
				
					<div>
						<label>Name</label>
						<input name="name" onChange={this.addNewUser} defaultValue={this.state.newUser.name}/>
					</div>
						<div>
							<label>Batch</label>
							<input name="batch" onChange={this.addNewUser} defaultValue={this.state.newUser.batch}/>
						</div>
							<button>Insert</button>
				</form>
            </div>
            	<table style={{ border: '1px solid black', marginLeft: '10%'}} >
            			<thead>
            				<tr>
	            				<th>ID</th>
	            				<th>Name</th>
	            				<th>Batch</th>
	            				<th>Action</th>
            				</tr>
            			</thead>
            				<tbody>
            					{this.state.userData.map((item,index)=>
            						(
            						<tr key={item.id}>
            						<td>{item.id}</td>
            						<td>{item.name}</td>
            						<td>{item.batch}</td>
            						
            					</tr>
            					)
            					        				
           					)}
            					</tbody>
            		</table>
            </div>
			)
	}
}
export default Employee;






