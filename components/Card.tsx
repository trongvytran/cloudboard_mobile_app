import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/color'

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <View style={styles.titleBody}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.subTitle}>FREE</Text>
      </View>
      <View>
        <Text style={styles.textColor}>
          Please add your content here. Keep it short and simple. And smile :)
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}></View>
          <Text style={styles.textColor}>Text</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.icon}></View>
          <Text style={styles.textColor}>Text</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.icon}></View>
          <Text style={styles.textColor}>Text</Text>
        </View>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 10.055,
    marginRight: 10.055,
    flexDirection: 'row',
  },
  icon: {
    width: 20.11,
    height: 20.11,
    backgroundColor: Colors.primaryBackgroundColor,
    borderRadius: 9999,
    marginRight: 7.54
  },
  textColor: {
    color: Colors.textColor,
    fontSize: 17.6,
  },
  container: {
    paddingTop: 19.03,
    paddingBottom: 19.03,
  },
  titleBody: {
    paddingTop: 20.11,
    paddingBottom: 20.11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  title: {
    fontSize: 22.62,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 20.11,
    fontWeight: '600',
  },
  footer: {
    paddingTop: 20.11,
    paddingBottom: 20.11,
    flexDirection: 'row',
    marginLeft: -10.055,
    marginRight: -10.055,
  },
  image: {
    backgroundColor: Colors.primaryBackgroundColor,
    aspectRatio: 3 / 2,
    borderRadius: 15.08,
  },
})
