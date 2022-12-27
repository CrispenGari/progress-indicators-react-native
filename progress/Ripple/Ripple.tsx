import { Animated } from "react-native";
import React from "react";

const Ripple = () => {
  const skeletonAnimation = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(skeletonAnimation, {
        toValue: 1,
        delay: 0,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
  }, []);
  const scale = skeletonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2],
  });
  return (
    <Animated.View
      style={{
        backgroundColor: "cornflowerblue",
        width: 20,
        height: 20,
        transform: [{ scale }],
        borderRadius: 20,
      }}
    />
  );
};

export default Ripple;
