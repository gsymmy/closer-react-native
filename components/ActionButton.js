import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Proptypes from "prop-types";
function getPosition(position) {
  switch (position) {
    case "left":
      return { position: "absolute", left: 20, bottom: 20 };
    default:
      return { position: "absolute", right: 20, bottom: 20 };
  }
}

const ActionButton = ({ children, onPress, style, position }) => {
  const floatingActionButton = position ? getPosition(position) : [];
  return (
    <TouchableOpacity style={floatingActionButton} onPress={onPress}>
      <View style={[styles.button, style]}>{children}</View>
    </TouchableOpacity>
  );
};

ActionButton.propTypes = {
  onPress: Proptypes.func.isRequired,
  children: Proptypes.element.isRequired,
  style: Proptypes.object,
};

ActionButton.defaultProps = {
  style: {},
};

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
