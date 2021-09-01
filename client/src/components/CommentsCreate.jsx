import { useState } from 'react';
import './CommentsCreate.css';

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
    <section className="comment-page">
      <div className="comment-form">
        <div className="comment-title">ADD COMMENTS!</div>
        <br />
        <br />
        <form onSubmit={(e) => {
          e.preventDefault();
          handleCommentCreate(commentData);
        }}>
          <label className="comment-lable">
            Add Comment:
            <br />
            <textarea
              className="comment-input"
              row='5'
              cols='50'
              type='text'
              name='content'
              value={commentData.content}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />
          
          <button className="comment-btn">Submit</button>
        </form>
        </div>
    </section>
  )
};

export default CommentsCreate;
