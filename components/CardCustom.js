import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from "native-base";

export default function CardCustom() {
  return (
    <Container style={styles.container}>
      <Content>
        <Card style={{ flex: 0, borderWidth: 0 }}>
          <CardItem>
            <Body style={{ paddingTop: 5 }}>
              <Image source={require("./pikachu.jpg")} style={styles.image} />
            </Body>
          </CardItem>
          <CardItem>
            <View>
              <Text style={[styles.marginLeft, styles.title]}>Pikachu</Text>
              <Text style={[styles.marginLeft, styles.subtitle]}>
                Cutest pokemon
              </Text>
            </View>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    height: 500,
    width: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  marginLeft: {
    marginLeft: 5,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
  },
});
