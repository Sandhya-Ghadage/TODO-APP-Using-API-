import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { URL } from "./URL";
import axios from 'axios';
import { Link } from 'react-router-dom';
export const UserList = () => {

    const [user, setUser] = useState([]);

    const fetchData = async () => {
        let res = await axios.get(URL);
        console.log(res.data);
        setUser(res.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleDelet = async (id) => {
        await axios.delete(`${URL}/${id}`)
        setUser((preVal) => preVal.filter(val => val.id !== id))
    }

    return (
        <div>
            <Link to={"/adduser"}>
                <button type="button" class="btn btn-primary">Add User</button>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((val, ind) => {
                            return <tr key={ind}>
                                <th>{val.id}</th>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.city}</td>
                                <td>
                                    <Link to={`/updateuser/${val.id}`}>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <FontAwesomeIcon onClick={() => handleDelet(val.id)} icon={faTrash} style={{ marginLeft: "20px" }} />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
