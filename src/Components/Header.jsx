import { View, Text} from 'react-native'
import { StatusBar, HStack, Text, useTheme } from 'native-base';
import React, { Fragment } from 'react'


const Header = () => {
    const color = useTheme();
    // const title = getHeaderTitle(options, route.name);
  return (
    <Fragment>
        <StatusBar animated backgroundColor={color.purple[500]} barStyle="light-content"/>
        <HStack
            bg="purple.500"
            p={1}
            w="full"    
            justifyContent='space-between'
            alignItems='center'
            safeAreaTop
            safeAreaLeft
            safeAreaRight
            
        >
            <HStack flex={1} flexGrow={1}
            justifyContent="flex-start" alignContent='center'>

            </HStack>
        </HStack>
    </Fragment>
  )
}

export default Header