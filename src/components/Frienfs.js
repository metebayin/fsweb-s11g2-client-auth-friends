import axios from "axios";
import { useEffect, useState } from "react"

export const Friends = () => {

    const [friends, setFrienfs] = useState ([]);


    useEffect(() => {
        const token = localStorage.getItem("token");

        token &&
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                Authorization: token,
            },
        })
        .then(res => {
            setFrienfs(res.data);
        });
    }, [])

    return (    
    <div>
        <h2>Friends List</h2>
            <ul>
                {friends.length === 0 && <h3>Lütfen Login Olunuz...</h3> }
                {friends.map((Frienfs) => (
                    <li>
                        {Frienfs.name} - {Frienfs.email}
                    </li>
                ))}
            </ul>
    </div>
    );
};