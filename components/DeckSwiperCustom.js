import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, View, DeckSwiper, Text, Icon, Button } from "native-base";
import CardCustom from "./CardCustom";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const cards = [1, 2, 3, 4, 5];

export default class DeckSwiperCustom extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            ref={(c) => (this._deckSwiper = c)}
            dataSource={cards}
            renderEmpty={() => (
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            )}
            renderItem={(item) => <CardCustom />}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <Button
            iconLeft
            style={[styles.icon, styles.cross]}
            onPress={() => this._deckSwiper._root.swipeLeft()}
          >
            <Entypo name="cross" size={35} color="red" />
          </Button>
          <Button
            iconRight
            style={[styles.icon, styles.heart]}
            onPress={() => this._deckSwiper._root.swipeRight()}
          >
            <AntDesign name="hearto" size={35} color="black" />
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cross: {
    marginLeft: "auto",
    marginRight: 10,
  },
  heart: { marginRight: "auto", marginLeft: 10 },
  icon: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: "white",
  },
});
