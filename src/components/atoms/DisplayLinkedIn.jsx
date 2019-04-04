import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

function DisplayLinkedIn (props) {
  const {linkedin} = props
    return (
      <div className='social-icons'>
        <a href={linkedin} target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} size='1' color='darkgrey'/></a>
      </div>
    );
}

export default DisplayLinkedIn;