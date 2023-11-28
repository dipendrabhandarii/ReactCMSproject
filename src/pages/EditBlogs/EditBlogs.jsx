import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditBlogs = () => {
  const {id}= useParams()
  const navigate =useNavigate()
  const [blog,setBlog]= useState({})
  // console.log(id)

  const fetchBlogs = async()=> {
   const response= await axios.get("https://655c668825b76d9884fd268c.mockapi.io/blogs/"+ id )
   // console.log(response)
  if(response.status==200){
    setBlog(response.data)
    // console.log(blog)
  }
}
  useEffect(()=>{
    fetchBlogs()},[]
  )

  const edit = async(e)=> {
    e.preventDefault()
  const response = await axios.put("https://655c668825b76d9884fd268c.mockapi.io/blogs/"+ id,blog)
  console.log(response)
  if(response.status==200)
  {
    navigate("/singleblogs/"+id)
  }
  else{
    alert("something went wrong")
  }
  }



  return (
   
      <div>
        <div><Navbar /></div>
        <form onSubmit={edit} style={{ alignContent: "center", textAlign: "center", border: "2px dotted black" }}>
        
        <div className="form-group">
          <h1>Edit Blog</h1>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" onChange={(e)=>setBlog({...blog,title:e.target.value})} value={blog.title} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" value={blog.avatar} required onChange={(e)=>setBlog({...blog,avatar:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={blog.description} required onChange={(e)=>setBlog({...blog,description:e.target.value})}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Created At:</label>
          <input type="datetime-local" id="createdAt" name="createdAt" />
        </div>
        <input type="submit"  value ="Edit"  style={{marginLeft:"30px", fontSize:"20px"}}/>
      </form>
      </div>
  );
};

export default EditBlogs;
