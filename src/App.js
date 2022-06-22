import './App.css';
import Form from './Form';
import React, { useState, useEffect } from 'react'
import Teammate from './Teammate';
import axios from 'axios';

const initialVals = {
  username: '',
  email: '',
  role: '',
}

const myTeammates = [
  {
    username: 'mdeck',
    email: 'mdeck113@gmail.com',
    role: 'Front-End Engineer'
  },
  {
    username: 'jgrif',
    email: 'jgrifidk@gmail.com',
    role: 'Back-End Engineer'
  }
]

export default function App() {
  const [teammates, setTeammate] = useState(myTeammates);
  const [formValues, setFormValues] = useState(initialVals);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  };

  const submitForm = () => {
    
    const newTeammate = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newTeammate.username || !newTeammate.email || !newTeammate.role) {
      setError("Please fill in all fields");
      return;
    }
    
    setTeammate(teammates.concat(newTeammate));
    setFormValues(initialVals);
    
  }

  return (
    <div className = 'container'>
      <h1>Teammate App</h1>
      { error && <h2 className="error">{error}</h2>}
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

      {
        teammates.map((teammate, index) => {
          return (
            <Teammate key={index} details={teammate}/>
          )
        })
      }
  
    </div>
  )
  
}
