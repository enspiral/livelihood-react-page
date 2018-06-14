import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

import VentureImage from './atoms/VentureImage'
import InfoHeader from './molecules/InfoHeader'
import InfoDescription from './atoms/InfoDescription'

class VentureCard extends Component {
  render(){
    const {venture} = this.props
    return (
      <div className='card-wrapper'>
        <Card>
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
        </Card>
      </div>
    )
  }
}

export default VentureCard;
