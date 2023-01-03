import React from "react";
import { View, ScrollView } from "react-native";
import { LinearCircularBounce, LinearCircularZoom } from "./progress";
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fffff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearCircularBounce />
    </View>
  );
};
export default App;
