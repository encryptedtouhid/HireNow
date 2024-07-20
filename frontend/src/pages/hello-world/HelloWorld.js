import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');
  const apiUrl = process.env.HIRENOW_APP_API_URL;


  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hire Now Application</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;