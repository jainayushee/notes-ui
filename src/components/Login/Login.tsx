import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { NoteDataService } from '../../Services/notes';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // const navigate = useNavigate();
    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        console.log(user);
        

        // NoteDataService.loginUser(user).then(() => {
        //     navigate("/")
        // })

    }
    return (
        <div>
            <input type="text" name="email" id="" placeholder='email' required onChange={(e) => setEmail(e.target.value)} />
            <input type="text" name='pass' placeholder='password' required onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submit}>Login</button>
        </div>
    )
}
