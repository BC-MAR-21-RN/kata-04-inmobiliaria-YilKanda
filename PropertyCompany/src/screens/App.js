import React from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native'
import CrossPlatformIcon from 'react-native-cross-platform-icons'
import { styles } from './styles'
import { Item } from './Item'
import data from './db.json'

const App = () => {
  const renderItem = ({ item }) => (
    <Item item = {item} />
  )

  return (
    <SafeAreaView style={ styles.container }>
      <FlatList
        data = { data.houses }
        renderItem = { renderItem }
        keyExtractor = { (item) => item.id }
      />
    </SafeAreaView>
  )
}

export default App
