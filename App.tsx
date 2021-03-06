import React from "react"
import { StyleSheet, SafeAreaView} from "react-native"
import MainNavigator from './src/screens/MainNavigator'

// prettier-ignore
export default function App() {
  return (
    <SafeAreaView style = {styles.safeAreaView}>
        <MainNavigator/>
    </SafeAreaView>
  )
}


// prettier-ignore
const styles = StyleSheet.create({
  safeAreaView  : {flex :1},
})
