import React from "react";
import { View, Text, Alert, Button } from "react-native";
import style from "./style";
function ClickOnTheSquare(value) {
    Alert.alert(value);
} export default Square = ({ text }) => (
    <View style={[style.box, { backgroundColor: "#7cd0f9" }]}>
        <Text>{text}</Text>
        <Button title="Click" onPress={() => ClickOnTheSquare(text)}/>

    </View>
);