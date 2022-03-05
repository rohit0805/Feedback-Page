import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedbackData from './data/FeedbackData';
import FeedBackStats from './components/FeedBackStats';
import FeedBackForm from './components/FeedBackForm';
import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

const App = ()=>{
  const [feedback,setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id)=>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter(item=>{
        return item.id != id;
      }))  
    }
  }
  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback]);
  }
  return (
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <FeedBackForm  handleAdd={addFeedback}/>
              <FeedBackStats feedback={feedback}/>
              <FeedBackList feedback={feedback} handleDelete = {deleteFeedback}/>
            </React.Fragment>
          }>
          </Route>
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
  );
}

export default App; 