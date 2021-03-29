import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { ItemImageStyles } from '../../src/assets/styles/ItemImageStyles'
import CrossPlatformIcon from 'react-native-cross-platform-icons'

const ItemImage = ({ item }) => {
  return(
    <View style={ ItemImageStyles.containerImage }>
      <ImageBackground
        source={ require('../../src/assets/images/house.jpg') }
        style={ ItemImageStyles.photo }
        imageStyle={ ItemImageStyles.photo_imageStyle }>
        <View style={ ItemImageStyles.containerRating }>
          <Text style={ ItemImageStyles.rating }>
            <CrossPlatformIcon name='star' size={12} color='#ffcb12' /> 
            { item.rating }
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export { ItemImage }
