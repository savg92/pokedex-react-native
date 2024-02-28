import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Home = () => {
  return (
    <View>
        <Text>Home</Text>
        <Link href="/">
            <Text>Go to back</Text>
        </Link>
    </View>
  )
}

export default Home