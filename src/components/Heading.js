import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import {useTheme} from "../utils/ThemeContext";

const Heading = ({title = ''}) => {
    const theme = useTheme();
    const Styles = React.useMemo(
        () => createStyles(theme),
        [theme]
    );
    return (
        <View>
            <Text style={Styles.headerText}>
                {title}
            </Text>
        </View>
    )
}
const createStyles = (theme) => {
    const styles = StyleSheet.create({
        headerText: {
            textAlign: 'center',
            fontSize: 36,
            color: theme.headingColor,
            fontWeight: '500'
        }
    });
    return styles
}


export default Heading;
