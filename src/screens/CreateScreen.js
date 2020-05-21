import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlogForm from '../components/BlogForm'

const CreateScreen = ({navigation}) => {
    return (
        <View>
            <BlogForm navigation={navigation} buttonText={"Add"} />
        </View>
    )
}

export default CreateScreen

const styles = StyleSheet.create({})
