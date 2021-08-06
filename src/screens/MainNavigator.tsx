import React, {useState} from 'react'
import {BottomNavigation} from 'react-native-paper'
import LifeCycle from './LifeCycle'
import Timer from './Timer'
import Interval from './Interval'
import Fetch from './Fetch'

export default function MainNavigator() {
    const [index, setIndex] = useState<number>(0)
    const [routes] = useState([
        {key : 'life', title :'라이프사이클', icon : 'page-layout-header-footer'},
        {key : 'timer', title :'타이머', icon : 'clock-time-four'},
        {key : 'interval', title :'인터벌', icon : 'timeline'},
        {key : 'fetch', title :'패치', icon : 'history'}
    ])

    const renderScene = BottomNavigation.SceneMap({
        life : LifeCycle,
        timer : Timer,
        interval : Interval,
        fetch : Fetch
    })

    return (
        <BottomNavigation
            navigationState={{index, routes}}
            onIndexChange = {setIndex}
            renderScene = {renderScene}
        />
    )

}