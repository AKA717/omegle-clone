import { useState } from "react"
import { Link } from "react-router-dom";

export const LandingPage = () => {

    const [name , setName ] = useState('');

    return <div>
        <input type="text" placeholder="enter the name"
            onChange={(e) => setName(e.target.value)}
        />

        <Link to={`/room/?name=${name}`}> Join </Link>

    </div>
}