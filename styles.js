import { StyleSheet } from 'react-native';
import tileBackground from './assets/veneer-birch.png'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b01315',
    color: '#e6c998',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 30, 
    color: '#e6c998',
    margin: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  rack: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },
  countTile: {
    margin: 10,
    // backgroundImage: `url(${require('./assets/veneer-birch.png').default}`,
    backgroundColor: "#f5cf90",
    position: "relative",
    width: 50,
    height: 50,
    boxSizing: "border-box",
    boxShadow: "0 4 3 -2 rgba(0, 0, 0, 0.4)",
    borderStyle: "solid",
    borderTopWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 4,
    borderTopColor: "rgba(255, 255, 255, 0.45)",
    borderLeftColor: "rgba(255, 255, 255, 0.25)",
    borderRightColor: "rgba(0, 0, 0, 0.15)",
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 3,
  },
  countNumber: {
    alignSelf: "center",
    margin: "auto",
    fontSize: 23
  },
  countPoints: {
    fontFamily: "sans-serif",
    position: "absolute",
    bottom: 0,
    right: 4,
    fontSize: 10,
  }
});