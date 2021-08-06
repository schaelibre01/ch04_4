import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import type {FC} from 'react'
import * as D from '../data'

export type CountryProps = {
    country : D.ICountry
}

const Country : FC<CountryProps> = ({country}) => {
    const {name, capital, population, subregion, region} = country
    return (
        <View style= {styles.view}>
            <View>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View>
                <Text>capital : {capital}</Text>
                <Text>capital : {population}</Text>
                <Text>capital : {subregion}</Text>
                <Text>capital : {region}</Text>
            </View>
        </View>
    )
}
export default Country

const styles = StyleSheet.create({
    view : {padding : 5},
    name : {fontSize : 30, fontWeight : '400'}
})