import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import MapView from 'react-native-maps';
import Colors from '../../constants/color'
import DurationBadge from '../UI/DurationBadge'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const BillboardDetail = ({ items }: any) => {
    // const [latitude, setLatitude] = useState('')
    // const [longtitude, setLongtitude] = useState('')
    // const getLongtitude = async () => {
    //           try {
    //             const res = await fetch(
    //               'http://localhost:3000/api/billboards'
    //             );
    //             const json = await res.json();
    //             return json.long;
    //           } catch (error) {
    //             console.error(error);
    //           }
      
              

    // const getLatitude = async () => {
    //   try {
    //     const res = await fetch(
    //       'http://localhost:3000/api/billboards'
    //     );
    //     const json = await res.json();
    //     return json.lat;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    // let region = {
    //   latitude: latitude,
    //   longitude: longtitude
    // }

    // useEffect(() => 
    //   setLatitude(await getLatitude()),
    //   setLongtitude(await getLongtitude()),'')

  return (
    <View>
      <View>
      <Image style={styles.image} source={{ uri: items.imageUrl }} />
      </View>
      <View style={styles.cardBody}>
        <View>
          <Text style={styles.cardName}>{items.address}</Text>
        </View>
        <DurationBadge value={items.duration} />
      </View>
      <View>
        <Text style={styles.cardPrice}>{items.price}</Text>
      </View>
      <Text style={styles.cardDescription}>Description</Text>
      <Text>{items.description}</Text>
      <View style={styles.container}>
        <Text style={styles.sectionHeadingSeeMore}>Read more</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <Image
          style={styles.profileAvatar}
          source={{ uri: items.user.imageUrl }}
        />
        <View>
          <Text style={styles.profileTitle}>{items.user.name}</Text>
        </View>
        </View> 
        <View style={styles.contactButton}>
          <TouchableOpacity>
            <Text style={{color: Colors.primaryColor}}>CONTACT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.mapTitle}>Location</Text>
      <View>
      <MapView style={styles.map} />
    </View>
    </View>
    </View>
  )
}
export default BillboardDetail

const styles = StyleSheet.create({
  image: {
    marginHorizontal:-10,
    marginTop:-20,
    height: Dimensions.get('screen').height/3,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardPrice: {
    color: Colors.primaryColor,
    fontWeight: '600',
    fontSize: 12,
    marginTop: 10,
  },
  cardDescription: {
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  sectionHeadingSeeMore: {
    paddingTop: 10,
    color: Colors.primaryColor,
  },
  contactButton:{ 
     paddingVertical:4, 
     paddingHorizontal:12, 
     borderColor: Colors.primaryColor,
     borderWidth:1,
     borderRadius:4,
      
    }
     ,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  profileAvatar: {
    borderRadius: 9999,
    height: 46,
    width: 46,
    marginRight: 16,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4.5,
  },
  map: {
    height: Dimensions.get('screen').height/3,
    borderRadius: 8,
  },
  mapTitle: {
    fontWeight: 'bold',
    paddingBottom:10,
    marginBottom: 4.5,
  },
  menuButton: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin: 10,
    color:'black',
    borderRadius:9999,
  }
})
