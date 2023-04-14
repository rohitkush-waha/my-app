import React, { useState } from 'react';
import '../screen/Newform.css'

const Newform = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNameClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="formContainer">
      <h2>Form Title</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" onClick={handleNameClick} />
        <div id="additionalFieldsContainer" className={isExpanded ? 'expanded' : ''}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Newform;
