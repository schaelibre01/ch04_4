import React, {useEffect, useLayoutEffect, useCallback} from 'react'
import {Platform, StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import type {LayoutChangeEvent} from 'react-native'

const title = 'LifeCycle'
export default function LifeCycle() {
    useEffect(()=> {
        console.log(Platform.OS, 'useEffect called')
        return () => console.log(Platform.OS, 'useEffect finished')

    }, [])

    useLayoutEffect(()=> {
        console.log(Platform.OS, 'useLayoutEffect called')
        return () => console.log(Platform.OS, 'useLayoutEffect finished')

    }, [])

    const onLayout = useCallback((e : LayoutChangeEvent) => {
        const {layout} = e.nativeEvent
        console.log(Platform.OS, 'onLayout Called', layout)
    }, [])

    console.log(Platform.OS, 'render Start')

    return (
        <View style={[styles.view]} onLayout ={onLayout}>
            <Text style={[styles.text]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view : {flex : 1, padding : 5, backgroundColor : Colors.blue900, alignItems : 'center'},
    text : {fontSize : 30, color : 'white', fontWeight : '600'}

})