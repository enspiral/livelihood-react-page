import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

import VentureImage from './atoms/VentureImage'
import InfoHeader from './molecules/InfoHeader'
import InfoDescription from './atoms/InfoDescription'

const style = {
  left: '0px',
}

class VentureCard extends Component {
  render(){
    const {venture} = this.props
    return (
      <Card className='card-wrapper' style={style}>
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
    )
  }
}

export default VentureCard;
