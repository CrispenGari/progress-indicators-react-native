### Progress Indicators

In this repository I'm going to show how to create some progress indicators in react native using the `Animated` API from react native. Here are the list of the indicators that are going to be implemented in this repository.

1. Indeterminate
2. Ripple

<p align="center">
  <img src="cover.gif" alt="cover" width="300"/>
</p>

### Indeterminate Indicator

The code for creating an `indeterminate` indicator component is as follows:

```ts
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
```

### Ripple

The code for creating an `ripple` indicator component is as follows:

```ts
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
        position: "absolute",
        borderRadius: 20,
      }}
    />
  );
};

export default Ripple;
```

### Circular

The code for creating an `circular` indicator component is as follows:

```ts
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
```

### License

In this repository we are using the `MIT` license which reads as follows.

```
MIT License

Copyright (c) 2022 crispengari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
