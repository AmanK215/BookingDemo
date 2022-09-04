import isFunction from 'lodash/isFunction';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#212121'
  },
  active: {},
  inactive: {}
});

const renderIndicator = (
  count,
  currentIndex,
  indicatorStyle,
  indicatorActiveColor,
  indicatorInActiveColor,
  indicatorActiveWidth,
  onClick
) => {
  const indicators = [];
  const Wrapper = isFunction(onClick) ? TouchableOpacity : View;
  for (let i = 0; i < count; i++) {
    indicators.push(
      <Wrapper
        style={[
          styles.indicator,
          indicatorStyle,
          i === currentIndex
            ? indicatorActiveColor
              ? {
                  ...styles.active,
                  ...{
                    backgroundColor: indicatorActiveColor,
                    width: indicatorActiveWidth
                  }
                }
              : styles.active
            : {
                ...styles.inactive,
                
              }
        ]}
        onPress={() => onClick(i)}
        key={i}
      />
    );
  }
  return indicators;
};

const IndicatorComp = ({
  count,
  currentIndex,
  indicatorStyle,
  indicatorContainerStyle,
  indicatorActiveColor,
  indicatorInActiveColor='red',
  indicatorActiveWidth = 6,
  onClick
}) => (
  <View style={[styles.container, indicatorContainerStyle]}>
    {renderIndicator(
      count,
      currentIndex,
      indicatorStyle,
      indicatorActiveColor,
      indicatorInActiveColor,
      indicatorActiveWidth,
      onClick
    )}
  </View>
);

export default IndicatorComp;
