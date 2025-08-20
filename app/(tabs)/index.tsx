import React from "react";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World in Home page!</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
