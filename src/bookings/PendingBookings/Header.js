import isFunction from "lodash/isFunction";
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const Header = props => {
  const { onClick, headerText } = props;

  return(
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={isFunction(onClick) ? () => onClick() : null } 
        style={styles.shadow}
      >
        <Image
          resizeMode={'contain'}
          source={require('../../Images/leftArr.png')}
        />
      </TouchableOpacity>
      <Text style={styles.Headertext}>
        {headerText}
      </Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17, 
    marginTop: 38, 
    flexDirection: 'row'
  },
  shadow: {
    marginEnd: 16,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 15,
    width: 38,
    height: 38,
    shadowOffset: {width: 10, height: 5},
    shadowRadius: 20,
    shadowColor: 'rgba(211, 209, 216, 0.3)'
  },
  Headertext: {
    paddingTop: 6,
    alignSelf: 'center',
    fontFamily: 'Albert Sans',
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 20,
    color: 'rgba(22, 22, 22, 1)'
  }
})