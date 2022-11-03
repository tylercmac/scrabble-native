import { StyleSheet } from 'react-native';

const scrabbRed = '#b01315'
const scrabbBrown = '#e6c998'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: scrabbRed,
    color: scrabbBrown,
    alignItems: 'center',
    height: '100%',
    flex: 1
  },
  checkWord: {
    justifySelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 10,
    backgroundColor: 'rgba(230, 201, 152, .9)', 
    width: '50%', 
    borderRadius: 3 
  },
  video: {
    marginTop: 20,
    maxHeight: 200,
    width: 320,
    flex: 1
  },
  webView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 30, 
    color: scrabbBrown,
    padding: 5,
    textAlign: 'center',
  },
  appTitle: {
    backgroundColor: scrabbBrown,
    color: scrabbRed,
    paddingTop: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    width: 225,
    height: 250,
    backgroundColor: scrabbBrown,
    borderRadius: 15,
    // padding: 35,
    alignItems: "center",
    justifyContent: 'center',
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
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    justifySelf: 'flex-end'
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: scrabbRed,
  },
  textStyle: {
    color: scrabbBrown,
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
    marginLeft: 6,
    marginRight: 6,
    width: 50,
    height: 50,
    borderRadius: 5,
    overflow: 'hidden'
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
  countNumber: {
    alignSelf: "center",
    justifySelf: 'center',
    // paddingBottom: 2,
    fontSize: 30
  },
  scoreBox: {
    backgroundColor: scrabbRed,
    borderColor: scrabbBrown,
    borderWidth: 1, 
    borderRadius: 3,
    height: 25, 
    width: 100,
    alignItems: 'center', 
    display: 'flex', 
    marginTop: 4
  },
  scoreText: {
    color: scrabbBrown,
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
  countPoints: {
    fontFamily: "sans-serif",
    position: "absolute",
    bottom: 1,
    right: 5,
    fontSize: 10,
  },
  resetFooter: {
    backgroundColor: scrabbBrown,
    color: scrabbRed,
    position: 'absolute', 
    bottom: 0, 
    width: '100%',
  },
  centerItems: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreRow: {
    display: 'flex', 
    flexDirection: 'row', 
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6
  },
  scoreInput: {
    borderBottomWidth: 1,
    width: 50,
    height: 20,
    marginTop: 6,
    marginLeft: 5,
    paddingLeft: 5,
    backgroundColor: 'rgba(230, 201, 152, .5)',
    fontSize: 16,
    borderRadius: 3,
  },
  wordInput: {
    borderBottomWidth: 1,
    width: 100,
    height: 20,
    borderRadius: 3,
    fontSize: 16,
    textAlign: 'center',
  }
});