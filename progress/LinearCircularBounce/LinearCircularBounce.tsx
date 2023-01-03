import { Animated, View, StyleSheet } from "react-native";
import React from "react";

const LinearCircularOpacity = () => {
  const indicatorAnimation1 = React.useRef(new Animated.Value(0)).current;
  const indicatorAnimation2 = React.useRef(new Animated.Value(0)).current;
  const indicatorAnimation3 = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(indicatorAnimation1, {
        toValue: 1,
        delay: 1,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
    Animated.loop(
      Animated.timing(indicatorAnimation2, {
        toValue: 1,
        delay: 2,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
    Animated.loop(
      Animated.timing(indicatorAnimation3, {
        toValue: 1,
        delay: 3,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
  }, []);
  const opacity1 = indicatorAnimation1.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const opacity2 = indicatorAnimation2.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const opacity3 = indicatorAnimation3.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <View style={{}}>
      <View style={{ flexDirection: "row" }}>
        <Animated.View style={[styles.box, { opacity: opacity1 }]} />
        <Animated.View style={[styles.box, { opacity: opacity2 }]} />
        <Animated.View style={[styles.box, { opacity: opacity3 }]} />
      </View>
    </View>
  );
};
export default LinearCircularOpacity;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "cornflowerblue",
    width: 10,
    height: 10,
    borderRadius: 10,
    margin: 2,
  },
});
