import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  IndicatorCompStyle: {
    position: 'absolute', 
    left: 0, 
    right: 0, 
    top: 180
  },
  marginStyle: {
    marginTop: 18
  },
  imgStyle: {
    width: width-34,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10
  },
  textStyle: {
    position: 'absolute',
    marginTop: 16, 
    right: 10, 
    borderRadius: 30
  },
  text: {
    fontFamily: 'Albert Sans',
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 18,
    color: 'rgba(0, 0, 0, 1)'
  },
  expand: {
    position:'absolute',
    top: 190,
    right: 10
  }
})

export default styles