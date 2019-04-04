import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'


function DisplayTwitter (props) {
  const {twitter} = props
    return (
      <div className='social-icons'>
        <a href={twitter} target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]} size='1' color='darkgrey'/></a>
      </div>
    );
}

export default DisplayTwitter;