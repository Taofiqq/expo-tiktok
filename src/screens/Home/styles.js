import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height - 45,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomRightContent: {
    justifyContent: "flex-end",
    height: "95%",
    marginHorizontal: 20,
  },
  rightContent: {
    alignSelf: "flex-end",
    height: 330,
    justifyContent: "space-evenly",
    // alignItems: "center",
  },
  rightImageContainer: {},
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "white",
  },
  homeIcons: {
    alignItems: "center",
  },
  statsLabel: {
    color: "white",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  bottomDescription: {
    fontSize: 16,
    color: "white",
  },
  details: {
    flexDirection: "row",
  },
  videoSound: {
    fontSize: 16,
    color: "white",
  },
});
