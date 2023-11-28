import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './CreateBlogs.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import avatarImage from "c:/Users/user/Pictures/Picsart_23-01-31_09-32-02-946.jpg";

const CreateBlogs = () => {
  const [title,setTitle]= useState("")
  const [image,setImage]= useState("")
  const [description,setDescription]=useState("")
  const Navigate = useNavigate();

  
  const createBlog = async (e) => {
    e.preventDefault();
    
    const data = {
      title,
      description,
      avatar: image,
    };
    try {
      const response = await axios.post("https://655c668825b76d9884fd268c.mockapi.io/blogs/", data);
      console.log(response);
      if (response.status === 201) {
        Navigate("/");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };
  
  return (
    <div>
      <Navbar />
      <form onSubmit={createBlog} style={{alignContent:"center", textAlign:"center"}}>
        <div className="form-group" >
          <h1>Add Blog</h1>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title"  required onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image"  required onChange={(e)=>setImage(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description"  required onChange={(e)=>setDescription(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Created At:</label>
          <input type="datetime-local" id="createdAt" name="createdAt" />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
  )
}

export default CreateBlogs