import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#006400',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#ADFF2F',
        padding: 10,
    }
})

export default props =>
    <SafeAreaView style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>
            {props.value}
        </Text>
    </SafeAreaView>