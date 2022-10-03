import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Menu } from "../components/Menu";

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="blog img"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user img"
          />
          <div className="info">
            <span>Jhon</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
              <img src={Delete} alt="delete" />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          molestias tempore perspiciatis aspernatur temporibus fuga optio esse
          nam non natus eius error ipsam cumque deserunt illo, dolorem sint, cum
          blanditiis quam assumenda! Officiis, est? Quidem, dolore facilis ipsam
          corrupti veniam ratione qui totam nam obcaecati natus laborum modi
          ducimus temporibus praesentium aliquam itaque, labore officia
          consequatur consequuntur! Ex recusandae velit facilis non blanditiis,
          exercitationem nostrum enim, aliquid reiciendis veritatis officia
          praesentium ipsam vel laudantium eligendi. Sapiente, nobis voluptate,
          perferendis provident, repudiandae omnis natus cupiditate ex minima
          quis eos quasi laudantium inventore. Soluta dolores inventore labore
          iusto quod eos excepturi odio modi officiis eum, omnis sapiente sed
          culpa cum ipsum libero aliquid sint eveniet ipsam voluptates quibusdam
          nisi, ullam quam. Adipisci cumque tenetur quisquam natus, deleniti id
          ullam. Ullam eligendi rerum tenetur, voluptatibus tempore eveniet
          voluptate vitae optio ab ducimus totam natus, eius perspiciatis
          asperiores nostrum aspernatur sequi. Culpa, amet iure?
        </p>
      </div>
      <Menu />
    </div>
  );
};
