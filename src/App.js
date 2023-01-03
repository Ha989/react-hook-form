import React from 'react';
import {useForm} from 'react-hook-form';
import './App.css';

function App() {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = data =>
  console.log(data) 


  return (
    <div className="App">

      <h1> React Hook Form</h1>
      <div className='container'>
      <hr/>
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <div>
        <label htmlFor='username'>Username</label>
        <br/>
        <input 
        className='plholder'
        name='username'
        type="text"
        autoComplete='off'
        {...register('username')}
        /> 
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <br/>
        <input 
        className='plholder'
        name='email'
        type="text"
        autoComplete='off'
        {...register("email", {required: true})}
        /> 
        {errors.email && <p>Email is required!</p>}
      </div>
      <div>
        <label>Language{" "}
           <select {...register('language')}>
           <option value='VN'>VN</option>
           <option value='EN'>EN</option>
           <option value='DE'>DE</option>
           </select>
        </label>
       </div>
       <input className="submit" type="submit" />
       </form>
       </div>
    </div>
  );
}

export default App;
