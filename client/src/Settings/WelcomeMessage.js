import React from 'react';
import { AppContext } from '../App/AppProvider';

const WelcomeMessage = (props) => {
  return (
    <AppContext.Consumer>
      {({firstVisit, siteName}) => 
        firstVisit ? <div>
          {`Welcome to ${siteName}, please select your favorite coins to begin.`}
        </div> : null 
    }
        {/* {`Welcome ${props.name}`} */}
    </AppContext.Consumer>
  )
}

export default WelcomeMessage;