import React from "react";
import { View, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Carousel from "./Carousel";
import DetailsWidget from "./DetailsWidget";
import RadialGradient from 'react-native-radial-gradient';
import LinearGradient from "react-native-linear-gradient";

const PendingBookings = props => {
  const { data, index } = props;

  return (
    <View style={styles.container}>
      <LinearGradient
        useAngle
        angle={151}
        colors={['rgba(255, 255, 255, 0.28)', 'rgba(255, 255, 255, 0.38)']}
        locations={[0.01, 0.994]}
      />
      
      <BlurView blurType="light" blurAmount={20} style={styles.blurStyle} />
      <Carousel data={data['img_data']}/>
      <DetailsWidget data={data['details_data']}/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 17, 
    borderWidth: 1, 
    borderRadius: 10, 
    borderColor: 'rgba(255, 255, 255, 1)', 
    marginVertical: 30, 
    zIndex: 10
  },
  purpleStyle: {
    position: 'absolute', 
    left: -184.32000732421875, 
    top: 350, 
    opacity: 0.2,
    transform: [
      { rotateX: "45deg" },
      { rotateZ: "90deg" },
      { rotateY: "70deg"}
    ]
  },
  blurStyle: {
    position: 'absolute',
    top: 220,
    left: 0,
    bottom: 0,
    right: 0,
  },
  pinkStyle: { 
    position: 'absolute', 
    left: 90, 
    top: 300.06, 
    height: 244, 
    width: 344, 
    transform: [{ rotate: '-16.46deg' }] 
  }
})

export default PendingBookings;