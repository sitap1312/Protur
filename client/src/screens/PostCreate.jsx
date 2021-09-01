import React, { useState } from 'react';
import './PostEdit.css';

function PostCreate(props) {
  const [postForm, setPostForm] = useState({
    placename: '',
    img_url: '',
    description: '',
  });

  const { placename, img_url, description } = postForm;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostForm((prevState) => ({
      ...prevState, [name]: value,
    }));
  };


  return (
    <section className="edit-page">
      <div className="edit-form">
        <div className="edit-title">NEW POST</div>
        <br />
        <br />
          <form onSubmit={(e) => { e.preventDefault(); handleCreate(postForm); }} >
            <label className="edit-lable">
            PlaceName
            <br />
              <input className="edit-input" type='text' name='placename' value={placename} onChange={handleChange} placeholder="Place Name"/>
            </label>

            <br />

            <label className="edit-lable">
            ImageURL
            <br />
              <input className="edit-input" type='url' name='img_url' value={img_url} onChange={handleChange} placeholder="Image URL"/>
            </label>

            <br />

            <label className="edit-lable">
            Description
            <br />
              <textarea className="edit-input" rows="5" cols="50" name="description" value={description} onChange={handleChange} placeholder="Description...">
                Description...
              </textarea>
            </label>

          <br />
          <br />

            <button className="edit-btn">POST</button>
          </form>
        </div>
    </section>
  )
};

export default PostCreate;
