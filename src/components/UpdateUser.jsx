import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { URL } from './URL';
import axios from 'axios';

export const UpdateUser = () => {
  const { pathname } = useLocation();
  const Id = parseInt(pathname.replace("/updateuser/", ""));

  const [user, setUser] = useState({
    name: "",
    email: "",
    city: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preVal) => ({
      ...preVal, [name]: value
    }))
  };

  const navigate = useNavigate();

  useEffect(() => {
    (
      async () => {
        let res = await axios.get(`${URL}/${Id}`);
        const { name, email, city } = res.data;
        setUser({ name, email, city })
      }
    )();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${URL}/${Id}`, {
      name: user.name,
      email: user.email,
      city: user.city
    });
    navigate("/")
  }

  return (
    <div style={{ textAlign: "left" }}>
      <h3>Add user</h3>
      <form onSubmit={handleSubmit}>
        <div class="mb-3 w-25">
          <label class="form-label" style={{ float: "left" }}>UserName</label>
          <input class="form-control" type="text" placeholder="Enter your name" aria-label="default input example" name='name' value={user.name} onChange={handleChange} />
        </div>
        <div class="mb-3 w-25">
          <label class="form-label" style={{ float: "left" }}>UserEmail</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={user.email} onChange={handleChange} />
        </div>
        <div class="mb-3 w-25">
          <label class="form-label" style={{ float: "left" }}>UserCity</label>
          <input class="form-control" type="text" placeholder="Enter your city" aria-label="default input example" name='city' value={user.city} onChange={handleChange} />
        </div>

        <button class="btn btn-primary">Update User</button>

      </form>
    </div>
  )
}

