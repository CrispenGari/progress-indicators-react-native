import { Animated } from "react-native";
import React from "react";

const Circular = () => {
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
  const rotate = skeletonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <Animated.View
      style={{
        borderColor: "#f5f5f5",
        borderBottomColor: "cornflowerblue",
        width: 40,
        height: 40,
        transform: [{ rotate }],
        borderRadius: 40,
        borderWidth: 3,
      }}
    />
  );
};

export default Circular;
