import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import CrossPlatformIcon from 'react-native-cross-platform-icons'

const Item = ({ item }) => (
  <View style={ styles.item }>
    <View style={ styles.cardRow }>
      <View style={ styles.containerImage }>
        <ImageBackground
          source={ require('../../src/assets/images/house.jpg') }
          style={ styles.photo }
          imageStyle={ styles.photo_imageStyle }>
          <View style={ styles.containerRating }>
            <Text style={ styles.rating }><CrossPlatformIcon name='star' size={12} color='#ffcb12' /> { item.rating }</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={ styles.containerText }>
        <Text style={ styles.name }>{ item.name }</Text>
        <Text style={ styles.address }><CrossPlatformIcon name='location-outline' size={12} color='rgba(115, 115, 115, 1)' />{ item.address }</Text>
        <Text style={ styles.number_rooms }><CrossPlatformIcon name='bed-outline' size={12} color='rgba(115, 115, 115, 1)' /> { item.number_rooms } <CrossPlatformIcon name='water-outline' size={12} color='rgba(115, 115, 115, 1)' /> { item.number_bathrooms } <CrossPlatformIcon name='home-outline' size={12} color='rgba(115, 115, 115, 1)' /> { item.surface } ft²</Text>
        <View style={ styles.content_rental_cost }>
          <Text style={ styles.monthly_rental_cost }>${ item.monthly_rental_cost }/m</Text>
          <TouchableOpacity onPress={() => { alert('Hola') }}>
            <CrossPlatformIcon
              style={ styles.favorite }
              name='heart-circle'
              size={28}
              color='#34b67a'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
)

export { Item }
