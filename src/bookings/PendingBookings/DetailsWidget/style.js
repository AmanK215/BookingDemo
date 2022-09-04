import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

  DetailsContainer: {
    paddingHorizontal: 16, 
    paddingTop: 24, 
    paddingBottom: 16
  },
  headingContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  locationContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 16 
  },
  locationImgStyle: {
    marginEnd: 12, 
    alignSelf: 'center'
  },
  shadowImg: {
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 2,
    shadowRadius: 2
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowMargin: {
    flexDirection: 'row', 
    marginTop: 6
  },
  componentContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    marginTop: 12
  },
  componentStyle: {
    flex: 1, 
    marginEnd: 6, 
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  marginTop: {
    marginTop: 9
  },
  buttonStyle: {
    paddingVertical: 12, 
    marginTop: 28, 
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white', 
    justifyContent: 'center', 
    alignSelf: 'center',
    fontFamily: 'Albert Sans',
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 1)'
  },
  noteStyle: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignSelf: 'center', 
    marginTop: 8
  },
  noteImgStyle: {
    marginEnd: 12, 
    alignSelf: 'center'
  },
  arrowStyle: {
    alignSelf: 'center', 
    marginTop: 20
  },
  headerText: {
    fontFamily: 'Albert Sans',
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 1)'
  },
  locationText: {
    fontFamily: 'Albert Sans',
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(74, 72, 72, 1)'
  },
  amentiesText: {
    fontFamily: 'Albert Sans',
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: 'rgba(35, 39, 40, 1)'
  },
  compText: {
    fontFamily: 'Albert Sans',
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    color: 'rgba(35, 39, 40, 1)'
  },
  noteText: {
    fontFamily: 'Albert Sans',
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 24,
    color: 'rgba(91, 90, 90, 1)'
  },
  noteTextBold: {
    fontFamily: 'Albert Sans',
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 1)'
  }
});

export default styles