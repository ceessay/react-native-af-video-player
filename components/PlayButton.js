import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  playButton: {
    opacity: 0.9
  },

  playWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 75 / 2
  },
  playContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const PlayButton = props => (
  <View style={[styles.playContainer]}>
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[styles.playWrapper, { backgroundColor: props.theme }]}
    >
      <Icons
        style={styles.playButton}
        name={props.paused ? "play-arrow" : "pause"}
        color={"white"}
        size={40}
      />
    </TouchableOpacity>
  </View>
);

PlayButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
};

export { PlayButton };
