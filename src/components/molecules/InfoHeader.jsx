
import React from 'react';

import VentureName from '../atoms/VentureName'
import SocialIcons from './SocialIcons'

function InfoHeader (props) {
  const {venture} = props
    return (
      <div className='info-header'>
        <VentureName name={venture.publicName} />
        <SocialIcons venture={venture}/>
      </div>
    );
  }
  
  export default InfoHeader;