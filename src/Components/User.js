import React, { useState } from 'react';

const User = (props) => {
    const {first_name, salary, companyName, email, phone, image} = props.user;
    const userStyle={border: '1px solid red',margin: '10px', padding: '10px', display:'flex'}
    const imgStyle ={padding:'10px' ,margin: '10px', height:'90px'}
    const nameStyle={padding:'10px' ,margin: '10px'}
    // const totalSalary={padding:'10px' ,margin: '10px'}
    console.log(props);
    const handleAddSalary = props.handleAddSalary;


    const [mobile, setMobile] = useState('');
    const showPhone = () => setMobile(phone)
    return (
        <div style={userStyle}>
            <div style={imgStyle}>
                
                <img src={image} alt="" />

           </div>
            <div style={nameStyle}>
                <h1>User: {first_name}</h1>
                <h3>Company: {companyName}</h3>
                <p><small>Phone: {mobile}</small></p>
                <p><small>Email: {email}</small></p>
                <p>yearly salary: ${salary}</p>
                <button onClick={showPhone}>show phone No</button>
                <button onClick={() => handleAddSalary(props.user)}>PLUS</button>
            </div>
            
{/* 
            <div style={totalSalary}>
                <h2>Total include:</h2>
                <p>TOTAL YEARLY SALARY:</p>
            </div> */}
        </div>
    );
};

export default User;