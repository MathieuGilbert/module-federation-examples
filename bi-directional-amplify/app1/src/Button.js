import Amplify, { Auth } from 'aws-amplify';
import React, { useEffect } from "react";
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const style = {
  background: "#800",
  color: "#fff",
  padding: 12,
};

const currentUser = async () => {
  try {
    await Auth.currentSession() // refreshes token if needed
    return await Auth.currentAuthenticatedUser()
  } catch (error) {
    alert('Redirect to /login!')
  }
}

const Button = () => {
  useEffect(() => {
    currentUser()
  })

  const onClick = async (e) => {
    e.preventDefault();

    const user = await currentUser();
    console.log('Current user from App1.Button:', user?.username ?? 'NO USER')

    alert('Container\n- Navigate\n- Sign In/Out')
  }

  return <button style={style} onClick={onClick}>App 1 Button</button>;
}

export default Button;
