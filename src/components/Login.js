import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = ({token, setToken}) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const history = useHistory();       

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();

        console.log("login > ", formData);

        axios.post("http://localhost:9000/api/login", formData)
            .then((res) => {
                console.log("res > ", res);
                localStorage.setItem("token", res.data.token);  
                setToken(res.data.token);
                history.push("/friends");
            })
            .catch((error) => {
                console.error("Error occurred:", error);
                // Handle error here
            });
    };

    return (
        <form onSubmit={formSubmit}>
            <h2>Login</h2>
            <div>
                <label>
                    UserName:
                    <input type="text" name="username" onChange={inputChangeHandler}/>
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" name="password" onChange={inputChangeHandler}/>
                </label>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};