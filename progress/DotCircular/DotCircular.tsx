import { Animated, View } from "react-native";
import React from "react";

const DotCircular = () => {
  const indicatorAnimation = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(indicatorAnimation, {
        toValue: 1,
        delay: 0,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
  }, []);
  const rotate = indicatorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <Animated.View
      style={{
        borderColor: "#f5f5f5",
        position: "relative",
        width: 40,
        height: 40,
        transform: [{ rotate }],
        borderRadius: 40,
        borderWidth: 3,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: 8,
          height: 8,
          borderRadius: 8,
          backgroundColor: "cornflowerblue",
          top: 2,
        }}
      />
    </Animated.View>
  );
};

export default DotCircular;
