import React, { Component } from 'react';

import VentureImage from './atoms/VentureImage'
import InfoHeader from './molecules/InfoHeader'
import InfoDescription from './atoms/InfoDescription'

class VentureCard extends Component {
  render(){
    const {venture} = this.props
    return (
      <div className='container'>
        {venture ? <div className='venture-cards'>
          <VentureImage image={venture.gravatarUrl} />
          <div className='info-wrapper'>
            <div className='info-container'>
              <InfoHeader venture={venture}/>
              <InfoDescription description={venture.publicDescription}/>
            </div>
          </div>
        </div> : <div/>
      }
      </div>
    )
  }
}

export default VentureCard;
