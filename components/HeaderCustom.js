import React from "react";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Container,
} from "native-base";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function HeaderCustom() {
  return (
    <Header style={styles.header} noShadow>
      <Button transparent style={styles.iconLeft}>
        <FontAwesome name="user" color="#ccc" size={24} />
      </Button>
      <Body>
        <Title style={styles.iconCenter}>
          <Fontisto name="tinder" size={30} color="white" />
        </Title>
      </Body>
      <Button transparent style={styles.iconRight}>
        <MaterialIcons name="chat-bubble" color="#ccc" size={24} />
      </Button>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "transparent",
  },
  iconLeft: {
    marginRight: "auto",
    marginLeft: 10,
  },
  iconRight: {
    marginLeft: "auto",
    marginRight: 10,
  },
  iconCenter: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fd297b",
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 60,
  },
  background: {
    height: 50,
    width: 100,
  },
});
