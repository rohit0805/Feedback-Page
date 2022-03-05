import {FaTimes} from 'react-icons/fa';

import React,{useState} from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';

const FeedBackItem = ({item,handleDelete})=>{
  const [rating,setRating] = useState(7);
  const [text,setText] = useState("This is an example of a feedback item");

  const handleClick = (id)=>{
    handleDelete(id);
  }

  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={()=>{handleClick(item.id)}} className='close'>
        <FaTimes color="purple"/>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedBackItem;