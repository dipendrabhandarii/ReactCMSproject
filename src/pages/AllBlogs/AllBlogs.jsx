import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AllBlogs.css";
import avatarImage from "c:/Users/user/Pictures/Picsart_23-01-31_09-32-02-946.jpg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get(
      "https://655c668825b76d9884fd268c.mockapi.io/blogs/"
    );
    // console.log(response.data)
    if (response.status == 200) {
      setBlogs(response.data);
      console.log(blogs,"bh")
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  const navigate= useNavigate()

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          textAlign:"center"
        }}
      >
        {blogs.map((blog) => {
          return (
            <div className="card" key={blog.id}>
              <img src={blog.avatar} alt="Avatar" width={"100%"} />
              <div className="container">
                <h4>
                  <b>{blog.title}</b>
                </h4>
                <p style={{color:"red",textAlign:"center"}}>{blog.description}</p>
                <p>{blog.createdAt}</p>
                <p  style={{cursor:"pointer"}} onClick={()=>navigate("/SingleBlogs/" + blog.id)} >See More</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBlogs;
