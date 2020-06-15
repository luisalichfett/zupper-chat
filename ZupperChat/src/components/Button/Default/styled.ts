import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    width: 450,
    alignItems: "center",
    justifyContent: "center",
  },
  default: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 50,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
  buttonOpacity: {
    backgroundColor: "#fff",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
    zIndex: -1,
  },
});

export default style;
