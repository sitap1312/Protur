import { useState } from 'react';

function CommentsCreate(props) {
  const [commentData, setCommentData] = useState({
    content: '',
  });

  const { handleCommentCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState, [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCommentCreate(commentData);
    }}>
      <label>
        Add Comment:
        <textarea
          row='5'
          cols='50'
          type='text'
          name='content'
          value={commentData.content}
          onChange={handleChange}
        />
      </label>
      
      <button>Submit</button>
    </form>
  )
};

export default CommentsCreate;
