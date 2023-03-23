import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 26,
    marginRight: 26,
    paddingBottom: 32,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  },
  counterCreated: {
    flexDirection: 'row',
  },
  counterCreatedTitle: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14
  },
  counterCreatedNumber: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    width: 25,
    textAlign: 'center',
    borderRadius: 999,
    marginLeft: 6
  },
  counterDone: {
    flexDirection: 'row',
  },
  counterDoneTitle: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14
  },
  counterDoneNumber: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    width: 25,
    textAlign: 'center',
    borderRadius: 999,
    marginLeft: 6
  }
})