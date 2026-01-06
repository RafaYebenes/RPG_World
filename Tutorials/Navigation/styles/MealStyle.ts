import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  li: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 15,
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  tag: {
    margin: 5,
    padding: 5,
    width: 100,
    borderRadius: 100,
    textAlign: "center",
    textTransform: "capitalize",
    backgroundColor: "white",
  },
});
