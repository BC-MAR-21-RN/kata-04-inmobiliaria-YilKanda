import React from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { AppStyles } from '../../src/assets/styles/AppStyles'
import { Item } from './Item'
import data from '../../src/data/db.json'

const App = () => {
  const renderItem = ({ item }) => (
    <Item item = {item} />
  )

  return (
    <SafeAreaView style={ AppStyles.container }>
      <FlatList
        data = { data.houses }
        renderItem = { renderItem }
        keyExtractor = { (item) => item.id }
      />
    </SafeAreaView>
  )
}

export default App
