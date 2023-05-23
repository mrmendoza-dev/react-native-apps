
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colorTheme } from "../assets/styling";

const CustomTabBar = ({ state, descriptors, navigation }) => (
  <View style={styles.tabBarContainer}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label = options.title || route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <View style={styles.tabItemContainer} key={route.key}>
          <Text
            style={[styles.tabItemText, isFocused && styles.tabItemTextFocused]}
            onPress={onPress}
          >
            {label}
          </Text>
        </View>
      );
    })}
  </View>
);


const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: "row",
        height: 60,
        backgroundColor: colorTheme.primary,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    tabItemContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tabItemText: {
        color: colorTheme.text,
        fontSize: 16,
    },
    tabItemTextFocused: {
        color: colorTheme.accent,
    },
});


export default CustomTabBar;