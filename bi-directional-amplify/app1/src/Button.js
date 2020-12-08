import React from "react";

const style = {
  background: "#800",
  color: "#fff",
  padding: 12,
};

const onClick = (e) => {
  e.preventDefault();

  alert('Container\n- Navigate\n- Sign In/Out')
}

const Button = () => <button style={style} onClick={onClick}>App 1 Button</button>;

export default Button;
