import { useState } from 'react';
import React from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedBackForm = ({handleAdd})=>{
  const [text,setText] = useState('');
  const [rating,setRating] = useState(10);
  const [btnDisabled,setBtnDisabled] = useState(true);
  const [message,setMessage] = useState('');
  
  const handleTextChange = (e)=>{
    setText(e.target.value);
    if(e.target.value.length < 10){
      setBtnDisabled(true);
      setMessage("Text must be atleast 10 characters.");
    }else{
      setBtnDisabled(false);
      setMessage(null);
    }
  }
  const onRadioClick = (id)=>{
    setRating(id);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(text.trim().length > 10){
      const newFeedback = {
        text,rating
      } 
      handleAdd(newFeedback);
      setText('');
    }
  }
    
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h1>How would your rate your service with us?</h1>
        <RatingSelect select={onRadioClick} selected={rating}/>
        <div className="input-group">
          <input value={text} onChange={handleTextChange} type="text" placeholder='Write a review' />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;