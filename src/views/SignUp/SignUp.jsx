import { useState } from 'react';

function SignUp() {
  
  const [user, setUser] = useState({});

  function handleSubmit(event){
    event.preventDefault();

    const form = new FormData(event.target);
    
    const userName = form.get('userName');
    const emailAddress = form.get('emailAddress');
    const gender = form.get('gender');
    const user = {userName, emailAddress, gender};

    setUser(user)
  }

  return (
    <>
    <h1>Sign up: {user.userName}, {user.emailAddress}, {user.gender}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='userName'>
          User name
          </label>
          <input type='text' name='userName'/> 
        </div>
        <div>
          <label htmlFor='emailAddress'>Email Address</label>
          <input type='email' name='emailAddress'/>
        </div>
        <div>
          <label>Female</label>
          <input type='radio' name='gender' value={'female'}/>
          <label>Male</label>
          <input type='radio' name='gender' value={'male'}/>
        </div>
        <button type='submit'>Sign up</button>
      </form>
    </>
  )
}
export default SignUp
