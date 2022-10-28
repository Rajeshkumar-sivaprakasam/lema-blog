import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Menu } from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const postId = location.pathname.split("/")[2];

  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get("/api/post");
  //     setPosts(res.data);
  //   } catch (e) {}
  // };

  const handleDelete = async () => {
    console.log("post insdide delete", postId);
    try {
      await axios.delete(`${postId}`);
      navigate("/");
    } catch (e) {}
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("post", postId);
      try {
        console.log("res");
        const res = await axios.get(`${postId}`);
        console.log("res2", res);

        setPost(res.data);
      } catch (e) {}
    };

    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        {post.userImg && <img src={post.userImg} alt="blog img" />}
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user img"
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {console.log(currentUser, "  asdasas ", post, "")}
          {/* {currentUser.id === post.id ? ( */}
          <div className="edit">
            <Link to={`/write?edit=${postId}`} state={post}>
              <img src={Edit} alt="edit" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="delete" />
          </div>
          {/* ) : (
            <></>
          )} */}
        </div>
        <h1>{post.title}</h1>
        <p>{getText(post.desc)}</p>
      </div>
      <Menu />
    </div>
  );
};
