import { useState } from 'react';


export default function Form() {
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState('Taylor');
    const [lastName, setLastName] = useState('Swift');
    const [loggedIn, setLoggedIn] = useState(false);

    const name = firstName + ' ' + lastName;

    function handleLogin() {
        setLoggedIn(!loggedIn);
    }

    return (
        <>
            <button onClick={() => setShow((s) => !s)}>
                {show ? 'Hide' : 'Show'} form
            </button>
            <br />
            <hr />
            {show && (
                <>
                    <label>
                        Enter your first name:
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            disabled={loggedIn}
                        />
                    </label>
                    <label>
                        Enter your last name:
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            disabled={loggedIn}
                        />
                    </label>
                    <button onClick={handleLogin}>{loggedIn ? "Log out" : "Log in"}</button>
                </>
            )}
            {loggedIn && <p>Welcome {name}</p>}
        </>
    );
}