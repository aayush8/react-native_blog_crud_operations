import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BlogForm from '../components/BlogForm'

const EditScreen = ({route, navigation}) => {
    return (
        <View>
            <BlogForm navigation={navigation} buttonText={"Update"}/>
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({})
