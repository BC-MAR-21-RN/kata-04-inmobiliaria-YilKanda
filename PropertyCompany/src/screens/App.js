import React from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native'
import CrossPlatformIcon from 'react-native-cross-platform-icons'

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
            <Text style={ styles.rating }><CrossPlatformIcon name='star' size={12} color='#ffcb12'  /> { item.rating }</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={ styles.containerText }>
        <Text style={ styles.name }>{ item.name }</Text>
        <Text style={ styles.address }><CrossPlatformIcon name='location-outline' size={12} color='rgba(115, 115, 115, 1)'  />{ item.address }</Text>
        <Text style={ styles.number_rooms }><CrossPlatformIcon name='bed-outline' size={12} color='rgba(115, 115, 115, 1)'  /> { item.number_rooms } <CrossPlatformIcon name='water-outline' size={12} color='rgba(115, 115, 115, 1)'  /> { item.number_bathrooms } <CrossPlatformIcon name='home-outline' size={12} color='rgba(115, 115, 115, 1)'  /> { item.surface } ft²</Text>
        <View style={ styles.content_rental_cost }>
          <Text style={ styles.monthly_rental_cost }>${ item.monthly_rental_cost }/m</Text>
          <Text><CrossPlatformIcon style={ styles.favorite } name='heart-circle' size={28} color='#34b67a'  /></Text>
        </View>
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
    color: '#7A6229',
    marginTop: 3
  },
  containerText: {
    marginLeft: 12
  },
  name: {
    color: '#121212',
    fontSize: 18,
    marginBottom: 7.5,
    fontWeight: 'bold'
  },
  address: {
    color: 'rgba(115, 115, 115, 1)',
    fontSize: 12,
    marginBottom: 7.5
  },
  number_rooms: {
    color: 'rgba(115, 115, 115, 1)',
    fontSize: 12,
    marginBottom: 7.5,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  content_rental_cost: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  monthly_rental_cost: {
    color: 'rgba(21, 21, 37, 1)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  favorite: {
    textAlign: 'right'
  }
})

const DATA = [
  {
    id: 1,
    name: 'Simpson House',
    address: '742 Evergreen Terrace, Springfield',
    number_rooms: 1,
    number_bathrooms: 2,
    surface: 280,
    monthly_rental_cost: 400,
    rating: 5.0,
    favorite: false
  },
  {
    id: 2,
    name: 'Griffin House',
    address: '31 Spooner Street, Providence, RI',
    number_rooms: 2,
    number_bathrooms: 2,
    surface: 270,
    monthly_rental_cost: 500,
    rating: 2.0,
    favorite: false
  },
  {
    id: 3,
    name: 'Smith House',
    address: '570 Wilshire Blvd, Los Angeles, CA',
    number_rooms: 2,
    number_bathrooms: 3,
    surface: 260,
    monthly_rental_cost: 700,
    rating: 1.0,
    favorite: false
  },
  {
    id: 4,
    name: 'Shortman House',
    address: '4040 Vine Street, Riverside, CA',
    number_rooms: 2,
    number_bathrooms: 1,
    surface: 250,
    monthly_rental_cost: 600,
    rating: 4.0,
    favorite: false
  },
  {
    id: 5,
    name: 'Parker House',
    address: '20 Ingram Street, Flushing, NY',
    number_rooms: 2,
    number_bathrooms: 1,
    surface: 240,
    monthly_rental_cost: 500,
    rating: 3.0,
    favorite: false
  },
  {
    id: 6,
    name: 'The Willows',
    address: '3517 W. Gray St. Utica',
    number_rooms: 3,
    number_bathrooms: 2,
    surface: 230,
    monthly_rental_cost: 440,
    rating: 4.7,
    favorite: false
  }
]

export default App
