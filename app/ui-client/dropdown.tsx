"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation';


export default function Dropdown({ list, name } : {
    list: Array<{ url: string; name: string; }>;
    name: string;
}) {
    const [state, setState] = useState("");
    const router = useRouter();

    const handleClick = () => {
        (state === "show") ? setState("dropdown-content") : setState("show");
    }
    const handleNavigation = (url: string) => {
        setState("");
        router.push(url);   
    }

    const btnState = (state === "show")? "btn-minus" : "btn-plus";
    return (
        <li className="dropdown">
            <button onClick={handleClick} className="dropdown-btn">{name} <span className={btnState}></span></button>
            <ul className={`dropdown-content ${state}`} >
            {
                list.map(({url, name}, idx) => <li key={idx} onClick={() => handleNavigation(url)}>{name}</li>)
            }
            </ul>
        </li>
    );
}

