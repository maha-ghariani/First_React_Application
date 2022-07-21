import React from 'react';

const navbarStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft:"20px",
    boxShadow: "10px 5px 5px 5px gray",
    height: "50px",
  };
  const buttonStyleAcceuil = {
    backgroundColor: "#3d83df",
    color: "white",
    border: "none",
    fontWeight: "bold",
    width: "70px",
    height:"30px"
  };  
  const buttonSecpnd = { ...buttonStyleAcceuil, backgroundColor: "#FF007F" ,borderRadius:"100%",height:"45px",width:"45px"};
function CustomNavbar() {
    // interaction serveur
    const user="Maha Ghariani";
    const arrCar=user.split(' ');
    const carOne=arrCar[0][0];
    const carTwo=arrCar[1][0];
  return (
    <div style={navbarStyle}>
      <button style={buttonStyleAcceuil}>Acceuil</button>
      <button style={buttonSecpnd}>{`${carOne} ${carTwo}`}</button>
    </div>
  );
}

export default CustomNavbar;
