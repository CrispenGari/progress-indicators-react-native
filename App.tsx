import React from "react";
import { View, ScrollView } from "react-native";
import { LinearCircularOpacity } from "./progress";
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
      <LinearCircularOpacity />
    </View>
  );
};
export default App;
