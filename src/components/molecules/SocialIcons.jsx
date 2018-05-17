import React from 'react';

import DisplayTwitter from '../atoms/DisplayTwitter'
import DisplayLinkedIn from '../atoms/DisplayLinkedIn'
import DisplayWebsite from '../atoms/DisplayWebsite'
import DisplayEmail from '../atoms/DisplayEmail'

function InfoHeader(props) {
  const {venture} = props
  return (
      <div className='social-icon-container'>
        {venture.publicBlog ? <DisplayLinkedIn linkedin={venture.publicBlog} /> : <span />}
        {venture.publicTwitter ? <DisplayTwitter twitter={venture.publicTwitter} /> : <span />}
        {venture.publicWebsite ? <DisplayWebsite website={venture.publicWebsite} /> : <span />}
        {venture.publicEmail ? <DisplayEmail email={venture.publicEmail} /> : <span />}
      </div>
  );
}

export default InfoHeader;