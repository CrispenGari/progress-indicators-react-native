import { View, Animated } from "react-native";
import React from "react";

const Indeterminate = () => {
  const skeletonAnimation = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(skeletonAnimation, {
        toValue: 1,
        delay: 0,
        duration: 2000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const translateX = skeletonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 500],
  });
  return (
    <View
      style={{
        width: 500,
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        borderRadius: 999,
        paddingVertical: 3,
        paddingHorizontal: 10,
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "cornflowerblue",
          width: "30%",
          height: 10,
          transform: [{ translateX }],
          position: "absolute",
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Indeterminate;
