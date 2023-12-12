import React , {useState} from 'react';
import './Form.css';
const Form = () => {

  const[formData,setFormData]=useState({})

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData({...formData,[name]:value}) 
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }

  return (
<>
    <div >
<form  onSubmit={(e)=>handleSubmit(e)}>
  
      <label >Email
      <input type="email"  name='email'  value={formData.email} 
      onChange={(e)=> handleChange(e)}/> 
      </label>
   
    
      <label >Password
      <input type="password" name='password'  value={formData.password}
      onChange={(e)=> handleChange(e)}/>
      </label>
   
    
  <button type="submit" >Sign in</button>
</form> 
</div>  

</>
  )
}

export default Form

