import { StyleSheet } from 'react-native'

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

export { styles }
