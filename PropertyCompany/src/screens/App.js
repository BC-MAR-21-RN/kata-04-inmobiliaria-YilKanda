import React from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native'

const App = () => {
  const renderItem = ({ item }) => (
    <Item item = {item} />
  )

  return (
    <SafeAreaView style={ styles.container }>
      <FlatList
        data = { DATA }
        renderItem = { renderItem }
        keyExtractor = { (item) => item.id }
      />
    </SafeAreaView>
  )
}

const Item = ({ item }) => (
  <View style={ styles.item }>
    <View style={ styles.cardRow }>
      <View style={ styles.containerImage }>
        <ImageBackground
          source={ require('../../src/assets/images/house.jpg') }
          style={ styles.photo }
          imageStyle={ styles.photo_imageStyle }>
          <View style={ styles.containerRating }>
            <Text style={ styles.rating }>{ item.rating }</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={ styles.containerText }>
        <Text style={ styles.name }>{ item.name }</Text>
        <Text style={ styles.address }>{ item.address }</Text>
        <Text style={ styles.number_rooms }>{ item.number_rooms }, { item.surface }</Text>
        <Text style={ styles.monthly_rental_cost }>{ item.monthly_rental_cost }</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    width: 320,
    height: 130,
    marginTop: 20,
    backgroundColor: '#DAECEF',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  cardRow: {
    flexDirection: 'row'
  },
  containerImage: {
    width: 100,
    height: 100,
    marginLeft: 12.5
  },
  photo: {},
  photo_imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  containerRating: {
    width: 45,
    height: 25.5,
    backgroundColor: 'rgba(251,237,183,1)',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 60,
  },
  rating: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7A6229'
  },
  containerText: {
    marginLeft: 12
  },
  name: {
    color: '#121212',
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  address: {
    color: 'rgba(115, 115, 115, 1)',
    fontSize: 12,
    marginBottom: 10
  },
  number_rooms: {
    color: 'rgba(115, 115, 115, 1)',
    fontSize: 12,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  monthly_rental_cost: {
    color: 'rgba(21, 21, 37, 1)',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

const DATA = [
  {
    id: 1,
    name: 'Houses Name',
    address: '001 Street',
    number_rooms: 1,
    surface: 1,
    monthly_rental_cost: 1,
    rating: 1.0,
    favorite: false
  },
  {
    id: 2,
    name: 'Houses Name',
    address: '002 Street',
    number_rooms: 2,
    surface: 2,
    monthly_rental_cost: 2,
    rating: 2.0,
    favorite: false
  },
  {
    id: 3,
    name: 'Houses Name',
    address: '002 Street',
    number_rooms: 2,
    surface: 2,
    monthly_rental_cost: 2,
    rating: 2.0,
    favorite: false
  },
  {
    id: 4,
    name: 'Houses Name',
    address: '002 Street',
    number_rooms: 2,
    surface: 2,
    monthly_rental_cost: 2,
    rating: 2.0,
    favorite: false
  },
  {
    id: 5,
    name: 'Houses Name',
    address: '002 Street',
    number_rooms: 2,
    surface: 2,
    monthly_rental_cost: 2,
    rating: 2.0,
    favorite: false
  }
]

export default App
