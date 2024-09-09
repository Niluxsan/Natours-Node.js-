/*eslint-disable*/

// import axios from 'axios';
// const axios = require('axios');
// script(src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js');

function loadAxios() {
  return new Promise((resolve, reject) => {
    // Create a script element
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js';
    script.onload = () => {
      resolve(); // Resolve the promise when the script is loaded
    };
    script.onerror = () => {
      reject(new Error('Failed to load Axios'));
    };

    // Append the script to the document head
    document.head.appendChild(script);
  });
}

const login = async (email, password) => {
  console.log(email, password);
  loadAxios().then(() => {
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:7500/api/v1/users/login',
      data: {
        email,
        password
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  });
};

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
