import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderColor: "#e3e3e3",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  deleteButton: {
    color: "red",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});

export default styles;
