import React from 'react';
import Masonry from 'react-masonry-component';
import {map} from 'lodash'

import VentureCard from './VentureCard'

const masonryOptions = {
  transitionDuration: 0
}

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const style = {
  padding: '0px'
}

function VenturesGrid (props) {
  const { ventures } = props
  console.log(ventures)
  return (
    <Masonry
      className={'my-gallery-class'} 
      styel={style}
      elementType={'ul'} 
      options={masonryOptions} 
      disableImagesLoaded={false} 
      updateOnEachImageLoad={false} 
      imagesLoadedOptions={imagesLoadedOptions} 
      >
      {map(ventures, (venture, key) => {
        return <VentureCard key={key} venture={venture} />
      }) }
      </Masonry>
  )
}

export default VenturesGrid;