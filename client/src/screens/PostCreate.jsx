import React, { useState } from 'react'

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
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(postForm); }} >
      <h3>Create Food</h3>
      <label>
        PlaceName:
        <input type='text' name='placename' value={placename} onChange={handleChange} />
      </label>

      <br />

      <label>
        ImageURL:
        <input type='url' name='img_url' value={img_url} onChange={handleChange} />
      </label>

      <br />

      <label>
        Description:
        <textarea rows="5" cols="50" name="description" value={description} onChange={handleChange}>
          Description...
        </textarea>
      </label>

      <br />

      <button>Submit</button>
    </form>
  )
};

export default PostCreate;
