import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleBlogs.css";
import Navbar from "../../components/Navbar/Navbar";


const SingleBlogs = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get(
      "https://655c668825b76d9884fd268c.mockapi.io/blogs/" + id
    );
    console.log(response.data);
    if (response.status == 200) {
      setBlog(response.data);
      console.log(blog);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, [id]);
  const navigate = useNavigate()
  
  //delete blog

 const deleteBlog =async () => {
    const response = await axios.delete("https://655c668825b76d9884fd268c.mockapi.io/blogs/" + id)
    console.log(response)
    if(response.status==200){
      navigate("/")
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="single-blog-container">
        <h1>{blog?.title}</h1>
        <p className="description">{blog?.description}</p>
        <img src={blog?.avatar} alt="Author Avatar" className="avatar" />
        <button
          style={{ textAlign: "right", marginLeft: "50px" }}
          onClick={deleteBlog} >Delete</button>
          <button style={{marginLeft:"55px"}} onClick={()=>navigate("/EditBlogs/" +id)}>Edit</button>
      </div>
    </div>
  );
};

export default SingleBlogs;
