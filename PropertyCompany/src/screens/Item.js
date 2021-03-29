import React from 'react'
import { View } from 'react-native'
import { ItemStyles } from '../../src/assets/styles/ItemStyles'
import { ItemImage } from './ItemImage'
import { ItemText } from './ItemText'

const Item = ({ item }) => {
  return (
    <View style={ ItemStyles.item }>
      <View style={ ItemStyles.cardRow }>
        <ItemImage item = {item} />
        <ItemText item = {item} />
      </View>
    </View>
  )
}

export { Item }
