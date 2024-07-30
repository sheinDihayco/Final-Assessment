import React from "react";

export default function Citizen({name, age, address, status}){
    return (
        <li>
            {name} {age} {address} {status} 
        </li>
    );
}