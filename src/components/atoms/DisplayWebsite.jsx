import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'

function DisplayWebsite (props) {
  const {website} = props  
  return (
    <div className='social-icons'>
      <a href={'https://' + website} target="_blank"><FontAwesomeIcon icon={faGlobe} size='1' color='darkgrey'/></a>
    </div>
    );
}

export default DisplayWebsite;