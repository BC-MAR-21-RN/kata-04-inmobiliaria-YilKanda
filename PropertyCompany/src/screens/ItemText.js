import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CrossPlatformIcon from 'react-native-cross-platform-icons'
import { ItemTextStyles } from '../../src/assets/styles/ItemTextStyles'

const ItemText = ({ item }) => {
  const [state, setState] = useState(false)
  const addFavorite = () => {
    item.favorite = true
    setState(!state)
  }
  return(
    <>
      <View style={ ItemTextStyles.containerText }>
        <Text style={ ItemTextStyles.name }>{ item.name }</Text>
        <Text style={ ItemTextStyles.address }><CrossPlatformIcon name='location-outline' size={12} color='rgba(115, 115, 115, 1)' />{ item.address }</Text>
        <Text style={ ItemTextStyles.number_rooms }><CrossPlatformIcon name='bed-outline' size={12} color='rgba(115, 115, 115, 1)' /> { item.number_rooms } <CrossPlatformIcon name='water-outline' size={12} color='rgba(115, 115, 115, 1)' /> { item.number_bathrooms } <CrossPlatformIcon name='home-outline' size={12} color='rgba(115, 115, 115, 1)' /> { item.surface } ft²</Text>
        <View style={ ItemTextStyles.content_rental_cost }>
          <Text style={ ItemTextStyles.monthly_rental_cost }>${ item.monthly_rental_cost }/m</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => addFavorite()} style={ ItemTextStyles.touchable }>
        <CrossPlatformIcon
          style={ ItemTextStyles.favorite }
          name='heart-circle'
          size={28}
          color={ state ? 'red' : '#34b67a' }
        />
      </TouchableOpacity>
    </>
  )
}

export { ItemText }
