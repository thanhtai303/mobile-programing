import React from "react";
import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function count(number) {
    var stringHailstone;
    stringHailstone = number + " ";
    while (true) {
        if (number % 2 == 0) {
            number /= 2;
            stringHailstone += number + " ";

        } else {
            number *= 3;
            number += 1;
            stringHailstone += number + " ";
        }
        if (number == 1) {
            break;
        }
    }
    return stringHailstone;
}

export default function HalstoneSequence(props) {
    return (
        <View>
            <Text Colors blue>The Hailstone Sequence is: {count(props.number)}</Text>
        </View>
    );
}