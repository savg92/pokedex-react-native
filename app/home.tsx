import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = () => {
  return (
    <View>
        <Text>Home</Text>
        <Link href="/">
            <Button title="Go to home" />
        </Link>
    </View>
  )
}

export default Home