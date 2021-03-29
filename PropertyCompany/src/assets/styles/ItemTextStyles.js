import { StyleSheet } from 'react-native'

const ItemTextStyles = StyleSheet.create({
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

export { ItemTextStyles }
