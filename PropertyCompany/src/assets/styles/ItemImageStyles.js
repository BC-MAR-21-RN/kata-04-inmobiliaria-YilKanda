import { StyleSheet } from 'react-native'

const ItemImageStyles = StyleSheet.create({
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
  }
})

export { ItemImageStyles }
