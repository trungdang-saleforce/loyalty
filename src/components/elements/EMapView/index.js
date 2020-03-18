import React, { Component } from "react";
import {View, ViewPropTypes} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import PropTypes from 'prop-types';
import _ from 'lodash';
import logoMarker from '../../../../res/coffee/store-icon.png';
import styles from './style';

export default class EMapView extends Component {

  state = {
    region: {
      longitude: 106.702,
      latitude: 10.7758,
      longitudeDelta: 0.044915558749550846,
      latitudeDelta: 0.0045161280631182445,
    }
  }

  calculatorDelta = (lat, lon, accuracy) => {
    const oneDegreeOfLongitudMeters = 111.32;
    const circumference = 400075 / 360;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudMeters);

    this.setState({
      region: {
        latitude: lat,
        longitude: lon,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta,
      }
    })

  }

  componentWillMount () {
    // Geolocation.getCurrentPosition((position) => {
    //   const {latitude, longitude, accuracy} = position.coords;
    //   this.calculatorDelta(latitude, longitude, accuracy);
    // })
  }

  /*
  * this.props.data = [{
  *  latitude: Proptypes.number,
  *  longitude: Proptypes.number
  * }]
  *
  *
  * {
		"storeId": 3,
		"name": "SC",
		"phone": "+84 28 3526 1003",
		"utilities": [
			"https://www.circlek.com.vn/wp-content/uploads/2016/01/seat.png",
			"https://www.circlek.com.vn/wp-content/uploads/2016/01/1.png",
			"https://www.circlek.com.vn/wp-content/uploads/2016/02/31.png",
			"https://www.circlek.com.vn/wp-content/uploads/2018/10/icon_54_card_payment.png",
			"https://www.circlek.com.vn/wp-content/uploads/2016/01/phonecard.png",
			"https://www.circlek.com.vn/wp-content/uploads/2016/01/73.png"
		],
		"address": {
			"latitude": "10.77496",
			"longitude": "106.67477009999993",
			"location": "306 Cao Thắng, Phường 12, Quận 10, Tp HCM, Việt Nam"
		}
	}*/
  get renderMarker() {
    const {data} = this.props
    
    if(_.isEmpty(data) || data[0].name == 'Notfound') {
      return null;
    }
    return _.map(data, (item, k) => {
      const {name, address, latitude, longitude} = item
      markerProps = {
        coordinate: {latitude, longitude},
        title: name, 
        description: address,
        image: logoMarker,
        key: k,
      }
      return (
        <Marker {...markerProps} />
      )
    })
  }

  render() {
    const {data} = this.props;
    const storeInfor = data[0];
   
    const region = {
        latitude: storeInfor.latitude,
        longitude: storeInfor.longitude,
        latitudeDelta: 0.015*5,
       longitudeDelta: 0.0121*5,
      }

    const mapProps = {
      provider: PROVIDER_GOOGLE,
      style: styles.map,
      region: region
    }
    

    return (
      <View style={styles.view}>
        <MapView {...mapProps} >
          {this.renderMarker}
        </MapView>
      </View>
    )

  }
  
}

EMapView.propTypes = {
  /*
  * data = [
      {
  *     latitude: Proptypes.number,
  *     longitude: Proptypes.number
  *   },
  *   ...
  * ]
  */
  data: PropTypes.array.isRequired,
  style: ViewPropTypes.style,
}

EMapView.defaultProps = {
  data: [],
}
