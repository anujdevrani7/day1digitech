
import React, { useState } from 'react';

export default function Numbervalidation(prop) {
    const [number, setCount] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    function handelonchange(event) {
        if (event.target.value.length <= 10) {
            setCount(event.target.value)
            if (event.target.value.length === 10) {
                document.getElementById("phone").classList.remove("error");

            }
            else {
                document.getElementById("phone").classList.add("error");

            }

        }
        
    }
    function handelname(event) {
        setName(event.target.value);
    }
    function handelemail(event) {
        setEmail(event.target.value);
    }
    function handelpassword(event) {
        setPassword(event.target.value);
    }
    return (
        <>

            <table>
                <tr>
                    <td><label htmlFor="fullname">Full Name</label></td>
                    <td><input type="text" id="fullname" onChange={handelname} value={name} name="fullname" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="email">Email</label></td>
                    <td><input type="email" id="email" onChange={handelemail } value={email} name="email" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="password">Password</label></td>
                    <td><input type="password" id="password" onChange= {handelpassword } value={password} name="password" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="phone">Phone</label></td>
                    <td><input type="number" onChange={handelonchange} id="phone"   name="phone" value={number} /></td>
                </tr>




            </table>

            <h1 align="center" className="heading">Gettig values by useState hook</h1>

            {/* {number.length} words */}
            <table  cellPadding="3" cellSpacing="2">
                <tr>
                    <td>Name</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>password</td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td>phone</td>
                    <td>{number}</td>
                </tr>
            </table>
        </>



    )
}
