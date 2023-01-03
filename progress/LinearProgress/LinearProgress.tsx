import { View, Animated, Text } from "react-native";
import React from "react";

interface Props {
  progress: number;
  showProgress?: boolean;
}
const Linear: React.FunctionComponent<Props> = ({ progress, showProgress }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          width: 500,
          flexDirection: "column",
          backgroundColor: "#f5f5f5",
          borderRadius: 999,
          // overflow: "hidden",
        }}
      >
        <View
          style={{
            backgroundColor: "cornflowerblue",
            width: `${progress}%`,
            height: 5,
            margin: 1,
            borderRadius: 10,
          }}
        />
      </View>
      {showProgress ? (
        <Text style={{ marginTop: 5, color: "gray" }}>{`${progress}%`}</Text>
      ) : null}
    </View>
  );
};

export default Linear;
