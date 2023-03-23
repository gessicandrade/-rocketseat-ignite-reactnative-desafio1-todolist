import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919"
  },
  form: {
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    marginTop: -27
  },
  input: {
    backgroundColor: '#262626',
    padding: 16,
    fontSize: 16,
    borderRadius: 6,
    height: 54,
    flex: 1,
    color: '#F2F2F2',
    textDecorationLine: 'none'
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginLeft: 4
  },
  flatList: {
    marginTop: 20
  },
  dBlock: {
    display: 'flex'
  },
  dNone: {
    display: 'none'
  }
})