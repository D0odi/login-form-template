import { TouchableWithoutFeedback, View, Text, Animated } from "react-native";

export default SelectorBtn = ({ text, backgroundColor, style, onPress }) => {
  const styles = {
    container: {
      height: 45,
      width: "50%",
      backgroundColor,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "white",
      fontSize: 16,
    },
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, style]}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
