import React, {useState, useEffect,useCallback} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  Dimensions
} from 'react-native';
const {width,height}=Dimensions.get("window");
import {WebView} from 'react-native-webview';
import { SwipeListView } from 'react-native-swipe-list-view';



export default function App() {
  const listViewData=[
    {key:1,text:'item1'},
    {key:2,text:'item1'},
    {key:3,text:'item1'},
    {key:4,text:'item1'},
    {key:5,text:'item1'},

  ]
  return (
    <SafeAreaView>
      <SwipeListView
        data={listViewData}
        renderItem={ (data, rowMap) => (
            <View style={styles.rowFront}>
                <Text>I am {data.item.text} in a SwipeListView</Text>
            </View>
        )}
        renderHiddenItem={ (data, rowMap) => (
          <View style={styles.rowBack}>
              <Text>Left</Text>
              <Text>Right</Text>
          </View>
        )}
        leftOpenValue={150}
        rightOpenValue={-150}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-between"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  rowFront: {
  alignItems: 'center',
  backgroundColor: '#CCC',
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  justifyContent: 'center',
  height: 50,
  width: '100%',
},
});