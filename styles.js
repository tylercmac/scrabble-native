import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: "bold",
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
  tile: {
    margin: 1.5,
    backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/49914/veneer-birch-texture-fs8.png')",
    backgroundColor: "#f5cf90",
    position: "relative",
    width: 30,
    height: 30,
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
    "[data-letter]::before": {
      content: "attr(data-letter)",
      textTransform: "uppercase",
      fontFamily: "Oswald, sans-serif",
      fontSize: 18.5,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "rgba(0, 0, 0, 0.6)",
      textShadow: "4px 4px 6px #f5cf90, 0 0 0 rgba(0, 0, 0, 0.7), 1px 2px 1px rgba(255, 255, 255, 0.5)"
    },
    "[data-letter]::after": {
      color: "rgba(0, 0, 0, 0.7)",
      fontFamily: "sans-serif",
      fontSize: 11,
      position: "absolute",
      right: "13.5%",
      bottom: "14.5%",
      transform: "translate(50%, 50%)",
    }
  },
});