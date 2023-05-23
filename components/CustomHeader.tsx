

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colorTheme } from '../assets/styling';
const styles: any = StyleSheet.create({
  customHeaderContainer: {
    backgroundColor: colorTheme.primary,
    color: colorTheme.text,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 50,
    paddingLeft: 10,
  },
    headerTitle: {
        color: colorTheme.text,
        fontSize: 20,
        fontWeight: "bold",
    },

});

  const screenOptions: any = {
    header: (props: any) => <CustomHeader {...props} />,
  };


  const CustomHeader = ({ title }) => (
    <View style={styles.customHeaderContainer}>
      <Text style={styles.headerTitle}>React Native Apps</Text>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );

  export default CustomHeader;
export { screenOptions };