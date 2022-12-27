import React from "react";
import { View, ScrollView } from "react-native";
import { Indeterminate, Ripple, Circular } from "./progress";

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
      <Indeterminate />
      <View style={{ height: 100 }} />
      <Circular />
      <View style={{ height: 100 }} />
      <Ripple />
    </View>
  );
};
export default App;
