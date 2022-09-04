import React, { useRef, useState } from "react";
import { View, FlatList } from "react-native";
import IndicatorComp from "./indicator";
import ItemCard from "./ItemCard";
import get from 'lodash/get'
import styles from "./style";
import isEmpty from "lodash/isEmpty";

const Carousel = props => {
  const { data } = props;
  const dataToRender = !isEmpty(data) ?  data.length : 0

  const [page, setPage] = useState(0);
  const scrollViewRef = useRef(null);

  function setScrollViewRef(ref) {
    scrollViewRef.current = ref;
  }

  function updatePageNo(pageNo) {
    if (pageNo >= 0 && pageNo < dataToRender) {
      setPage(pageNo);
    }
  }

  function changeTab(index) {
    let updatedIndex;

    if (index > dataToRender) {
      updatedIndex = 0;
    } else {
      updatedIndex = index;
    }

    setPage(updatedIndex);
  }

  function updatePage(e) {
    e.persist();
    const offset = get(e, 'nativeEvent.contentOffset', null);
    const totalWidth = get(e, 'nativeEvent.contentSize.width', null);

    if (offset) {
      let page = Math.round((offset.x / totalWidth) * dataToRender);
      updatePageNo(page);
    }
  }

  function handleOnScrollToIndex() {
    const wait = new Promise(resolve => setTimeout(resolve, 500));
    wait.then(() => changeTab(page + 1));
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        initialScrollIndex={page}
        onScrollToIndexFailed={handleOnScrollToIndex}
        data={data}
        ref={setScrollViewRef}
        onTouchBegin={updatePage}
        onTouchEnd={updatePage}
        onScrollBeginDrag={updatePage}
        onScrollEndDrag={updatePage}
        keyExtractor={item => item.img}
        decelerationRate={'fast'}
        scrollEventThrottle={100}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ItemCard item={item}/>
        )}
      />
      <View style={styles.IndicatorCompStyle}>
        <IndicatorComp
          count={dataToRender}
          currentIndex={page}
          indicatorContainerStyle={styles.marginStyle}
          indicatorActiveColor={'white'}
          indicatorActiveWidth={6}
          onClick={index => changeTab(index)}
        />
      </View>
    </View>
  );

}

export default Carousel;