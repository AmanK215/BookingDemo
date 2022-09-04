import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import { BlurView } from "@react-native-community/blur";
import LinearGradient from "react-native-linear-gradient";

const ItemCard = props => {
  const { item } = props;

  const images = {
    img: require('../../../Images/Img.png'),
    img1: require('../../../Images/Img_1.png'),
  }

  return (
    <View
      style={{flex: 1}}>
      <BlurView blurType="light" blurAmount={28} style={[styles.textStyle,{ backgroundColor: 'green'}]}/>
      <LinearGradient
        colors={['rgba(244, 249, 248, 1)', 'rgba(255, 255, 255, 0)']}
        style={{ width: 'auto' }}
      >
      <Image
        style={styles.imgStyle}
        resizeMode={'cover'}
        source={images[item['img']]}
      />

      <Image
        source={require('../../../Images/expand.png')}
        style={styles.expand}
      />
      <View style={styles.textStyle}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.77)', 'rgba(255, 255, 255, 0.29)']}
          style={{width: '100%', height: '100%', borderRadius: 20, padding: 10}}
        >
        <Text style={styles.text}>
         {item['Text']}
        </Text>
        </LinearGradient>
      </View>
      </LinearGradient>
    </View>
  )

}

export default ItemCard;