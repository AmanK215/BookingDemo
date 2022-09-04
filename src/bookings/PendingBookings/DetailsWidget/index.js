import React from "react";
import styles from "./style";
import RadialGradient from 'react-native-radial-gradient';
import { View, Text, Image, TouchableOpacity} from "react-native";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";

const DetailsWidget = props => {

  const { data } = props
  const component = get(data, 'component', {});
  const locations = get(data, 'location_data', {});
  const header_title = get(data, 'header_title', {})
  const bookingNote = get(data, 'bookingNote', {}) 

  const images = {
    compImg1: require('../../../Images/Component_2.png'),
    compImg2: require('../../../Images/Component_1.png'),
    compImg3: require('../../../Images/Component_4.png'),
    compImg4: require('../../../Images/Component_3.png'),
    location: require('../../../Images/location.png'),
    bed: require('../../../Images/bed.png'),
    noteImg: require('../../../Images/alert-circle.png'),
    arrow: require('../../../Images/Arrow.png')
  }

  return (
    <View style={styles.DetailsContainer}>
      <View style={styles.headingContainer}>
        <Text style={ styles.headerText }>
          {get(header_title, 'title', '')}
        </Text>
        <Text style={[styles.headerText, {fontWeight: "700",}]}>
          {get(header_title, 'amount', '')}
        </Text>
      </View>

      {
        !isEmpty(locations) ? 
        <View style={styles.locationContainer}>
        <View>
          <View style={styles.flexRow}>
            {
              get(locations, 'location.img') ? 
              <Image
                style={styles.locationImgStyle}
                resizeMode={'contain'}
                source={images[get(locations, 'location.img')]}
              /> : null
            }
            <Text style={styles.locationText}>
              {get(locations, 'location.text', '')}
            </Text>
          </View>
          <View style={styles.flexRowMargin}>
            {
              get(locations, 'occupancy.img') ? 
              <Image
                style={styles.locationImgStyle}
                resizeMode={'contain'}
                source={images[get(locations, 'occupancy.img')]}
              /> : null
            }
            <Text style={[styles.locationText, {letterSpacing: 0.2}]}>
              {get(locations, 'occupancy.text', '')}
            </Text>
          </View>
        </View>

        <Image
          style={styles.shadowImg}
          resizeMode={'contain'}
          source={require('../../../Images/map.png')}
        />
        </View> : null
      }

      <Text style={[{marginTop: 26}, styles.amentiesText]}>
        {get(data, 'amenity_text', '')}
      </Text>

      {
        !isEmpty(component) ? 
        <View style={styles.componentContainer}>
          <View style={styles.componentStyle}>
            {
              get(component, 'component1.img') ?
              <Image
                resizeMode={'contain'}
                source={images[get(component, 'component1.img')]}
              /> : null
            }
            <Text style={[styles.marginTop, styles.compText]}>
              {get(component, 'component1.text', '')}
            </Text>
          </View>

          <View style={styles.componentStyle}>
            {
              get(component, 'component2.img') ?
              <Image
                resizeMode={'contain'}
                source={images[get(component, 'component2.img')]}
              /> : null
            }
            <Text style={[styles.marginTop, styles.compText]}>
              {get(component, 'component2.text', '')}
            </Text>
          </View>

          <View style={styles.componentStyle}>
            {
              get(component, 'component3.img') ?
              <Image
                resizeMode={'contain'}
                source={images[get(component, 'component3.img')]}
              /> : null
            }
            <Text style={[styles.marginTop, styles.compText]}>
              {get(component, 'component3.text', '')}
            </Text>
          </View>

          <View style={styles.componentStyle}>
            { 
              get(component, 'component4.img') ?
              <Image
                resizeMode={'contain'}
                source={images[get(component, 'component4.img')]}
              /> : null
            }
            <Text style={[styles.marginTop, styles.compText]}>
              {get(component, 'component4.text', '')}
            </Text>
          </View>
        </View> : null
      }

      <RadialGradient
        colors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0)']}
      >
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}> {get(data, 'buttonText', '')} </Text>
        </TouchableOpacity>
      </RadialGradient>

      <View style={styles.noteStyle}>
        {
          get(bookingNote, 'img') ? 
          <Image
            style={styles.noteImgStyle}
            resizeMode={'contain'}
            source={images[get(bookingNote, 'img')]}
          /> : null
        }
        <Text style={styles.noteText}>
          {get(bookingNote, 'text1', '')}
        </Text>
        <Text style={styles.noteTextBold}>
          {get(bookingNote, 'text2', '')}
        </Text>
      </View>

      <Image
        style={styles.arrowStyle}
        resizeMode={'contain'}
        source={images['arrow']}
      />

    </View>
  )

}

export default DetailsWidget;