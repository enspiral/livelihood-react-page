import React from 'react';

function ProfileImage (props) {
    return (
        <div className='venture-image'>
          <img src={props.image} alt='name' width='100%'/>
        </div>
    )
  }

 export default ProfileImage;    