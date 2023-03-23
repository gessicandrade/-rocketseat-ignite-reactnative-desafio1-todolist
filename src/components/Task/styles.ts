import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 12
  },
  title: {
    flex: 1,
    color: '#F2F2F2',
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleSelected: {
    flex: 1,
    color: '#808080',
    paddingLeft: 10,
    paddingRight: 10,
    textDecorationLine: "line-through"
  }
})