import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostEdit(props) {
  const [postForm, setPostForm] = useState({
    placename: '',
    img_url: '',
    description: ''
  });

  const { posts, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const post = posts.find((post) => post.id === Number(id));
      setPostForm({placename: post?.placename, img_url: post?.img_url, description: post?.description })
    }
    if (posts.length) {
      prefillFormData()
    }
  }, [posts, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostForm(prevState => ({
      ...prevState, [name]: value
    }))
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleUpdate(id, postForm); }}>
      <label>
        PlaceName:
        <input type='text' name='placename' value={postForm.placename} onChange={handleChange} />
      </label>

      <br />

      <label>
        Image URL:
        <input type='url' name='img_url' value={postForm.img_url} onChange={handleChange} />
      </label>

      <br />

      <label>
        Description:
        <textarea rows="5" cols="50" name="description" value={postForm.description} onChange={handleChange}>
          Description...
        </textarea>
      </label>

      <br />

      <button>Submit</button>
      
    </form>
  )
};

export default PostEdit;
