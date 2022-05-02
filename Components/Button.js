import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "./../Styles/Colors";

const ButtonCustom = () => {
  return <TouchableOpacity style={styles.btnAdd}>Add todo</TouchableOpacity>;
};

export default ButtonCustom;

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: colors.blue,
    color: colors.white,
    padding: 10,
    borderRadius: 10,
  },
});
