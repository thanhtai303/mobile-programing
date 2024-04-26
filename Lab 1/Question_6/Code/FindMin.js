import React from "react";
import { Text, View } from "react-native";


function Count(a, b, c) {
    var num_a = Number(a);
    var num_b = Number(b);
    var num_c = Number(c);
    var min = num_a;
    if (min < num_b) {
        min = a;
    } if (min < num_c) {
        min = num_c;
    }
    return min
}
export default function OutputMin(props) {
    return (
        <View>
            <Text> The minimun number is {Count(props.a, props.b, props.c)}</Text>
        </View>);
}