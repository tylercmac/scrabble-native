import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b01315',
    color: '#e6c998',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  h1: {
    fontSize: 30, 
    color: '#e6c998',
    padding: 5,
    textAlign: 'center',
  },
  appTitle: {
    backgroundColor: '#e6c998',
    color: '#b01315',
    paddingTop: 15
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
    flexDirection: "row",
    alignItems: "center",
  },
  countTile: {
    margin: 10,
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
  letterTile: {
    marginLeft: 2,
    marginRight: 2,
    width: 30,
    height: 30,
    borderRadius: 3,
    overflow: 'hidden'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tileLetter: {
    justifySelf: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
  scoreBox: {
    backgroundColor: '#b01315',
    borderColor: '#e6c998',
    borderWidth: 1, 
    borderRadius: 3,
    height: 25, 
    width: 100,
    alignItems: 'center', 
    display: 'flex', 
    marginTop: 4
  },
  scoreText: {
    color: '#e6c998',
    position: 'absolute',
    bottom: 0,
    fontSize: 16
  },
  undoClear: {
    fontStyle: 'italic',
    fontSize: 12
  },
  letterPoints: {
    position: "absolute",
    bottom: 0,
    right: 4,
    fontSize: 6,
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
  },
  resetFooter: {
    backgroundColor: '#e6c998',
    color: '#b01315',
    position: 'absolute', 
    bottom: 0, 
    width: '100%',
  },
  centerItems: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  scoreRow: {
    display: 'flex', 
    flexDirection: 'row', 
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  scoreInput: {
    borderBottomWidth: 1,
    width: 50,
    height: 20,
    marginRight: 20,
    marginTop: 6,
    backgroundColor: 'rgba(230, 201, 152, .5)',
    fontSize: 10
  }
});