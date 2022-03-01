import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const Heading = ({title = ''}) => (
    <View>
        <Text style={styles.headerText}>
            {title}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center',
        fontSize: 36,
        color: 'rgba(175, 47, 47, 0.25)',
        fontWeight: '100'
    }
});

export default Heading;
