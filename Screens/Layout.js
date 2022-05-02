import { StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";
import Item from "../Components/Item";
import { colors } from "../Styles/Colors";
import ButtonCustom from "../Components/Button";

export default function Layout() {
  const [input, setInput] = useState("");

  console.log(input);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add todo"
          onChangeText={setInput}
          value={input}
        />
        <ButtonCustom />
      </View>
      <View style={styles.itemList}>
        <Item item={{ id: 1, todo: "Estudiar React Native" }}></Item>
        <Item item={{ id: 2, todo: "Cerrar el mic" }}></Item>
        <Item item={{ id: 3, todo: "Usar Youtube" }}></Item>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10",
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    width: 200,
    marginRight: 10,
    paddingHorizontal: 8,
    fontSize: 18,
    height: 35,
  },
  itemList: {
    backgroundColor: colors.orange,
    width: "95%",
    padding: 20,
    marginTop: 10,
  },
  btnAdd: {
    backgroundColor: colors.blue,
    color: colors.white,
    padding: 10,
    borderRadius: 10,
  },
});
