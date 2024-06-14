import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddFriend = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: 0,
        email: "",
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

        console.log("addFriend > ", formData);

        axios.post("http://localhost:9000/api/friends", formData)
            .then((res) => {
                console.log("res > ", res);
                localStorage.setItem("token", res.data.token);  
                history.push("/friends");
            })
            .catch((error) => {
                console.error("Error occurred:", error);
                // Handle error here
            });
    };

    return (
        <div>
            <h2>Add Friend Form</h2>
            <form onSubmit={formSubmit}>
                <div>
                    <label>
                        Name
                        <input type="text" name="name" onChange={inputChangeHandler}/>
                    </label>
                </div>
                <div>
                    <label>
                        Age
                        <input type="number" name="age" onChange={inputChangeHandler}/>
                    </label>
                </div>
                <div>
                    <label>
                        Email
                        <input type="email" name="email" onChange={inputChangeHandler}/>
                    </label>
                </div>

                <div>
                    <button type="submit">Save</button>
                </div>

            </form>
        </div>
    );
};