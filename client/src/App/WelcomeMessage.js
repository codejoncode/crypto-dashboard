import React from 'react';

const WelcomeMessage = (props) => {
  return (
    <div>
        {`Welcome ${props.name}`}
    </div>
  )
}

export default WelcomeMessage; 