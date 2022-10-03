import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish:</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label htmlFor="file">Upload image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art">Art</label>
          <input type="radio" name="cat" value="science" id="science" />
          <label htmlFor="science">Science</label>
          <input type="radio" name="cat" value="tech" id="tech" />
          <label htmlFor="tech">technology</label>
          <input type="radio" name="cat" value="design" id="design" />
          <label htmlFor="design">design</label>
          <input type="radio" name="cat" value="food" id="food" />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  );
};
