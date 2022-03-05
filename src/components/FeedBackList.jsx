import React,{useState} from 'react';
import FeedBackItem from './FeedBackItem';
import {motion,AnimatePresence} from 'framer-motion';

const FeedBackList = ({feedback,handleDelete})=>{
  if(!feedback || feedback.length === 0){
    return <p>No FeedBack Yet</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item)=>{
          return <motion.div key = {item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
              <FeedBackItem item={item} handleDelete={handleDelete}/>
            </motion.div>
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedBackList;