import React from "react";
import { View, StyleSheet, ScrollView, Button, Alert } from "react-native";
import data from "./data";
import square from "./square";
import style from "./style";
import Square from "./square";

export default App = () => {
  return (
    <ScrollView style={style.container}>
      {
        data.map((item, index) => (
          <Square key={item} text={`Square ${index + 1}`} />
        ))
      }
    </ScrollView>
  );
};