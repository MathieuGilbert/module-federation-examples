import React from "react";

const style = {
  background: "#00c",
  color: "#fff",
  padding: 12,
};

const Button = ({ currentUser }) => {
  const onClick = async (e) => {
    e.preventDefault;

    if (currentUser == null) {
      alert('No currentUser function provided!')
      return
    }

    // Get currently authenticated user, with refreshed access tokens
    const user = await currentUser();

    // Use idToken.jwtToken or accessToken.jwtToken to make API calls
    // const { idToken, accessToken } = user.signInUserSession;

    alert(`Greetings, ${user.username}!`);
  }


  return <button style={style} onClick={onClick}>App 2 Button</button>;
}

export default Button;
