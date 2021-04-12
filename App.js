import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import HeaderCustom from "./components/HeaderCustom";
import CardCustom from "./components/CardCustom";
import DeckSwiperCustom from "./components/DeckSwiperCustom";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded)
    return (
      <View style={styles.container}>
        <Text>Fonts not loaded</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <HeaderCustom />
      <DeckSwiperCustom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
