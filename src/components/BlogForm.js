import React, {useContext} from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import { BlogContext } from '../context/BlogContext'

const BlogForm = ({navigation, buttonText}) => {
    let author="", title="", body=""
    const {addBlog} = useContext(BlogContext)
    return (
        <View style={styles.view}>
            <Text>Author</Text>
            <TextInput style={styles.textinput} onChangeText={text => author=text}/>
            <Text>Blog - Title</Text>
            <TextInput style={styles.textinput} onChangeText={text => title=text}/>
            <Text>Blog - Body</Text>
            <TextInput style={styles.textinput} onChangeText={text => body=text}/>
            <Button  title={buttonText} onPress={() => {addBlog(author, title, body);navigation.navigate("Home");}}/>
        </View>
    )
}

export default BlogForm

const styles = StyleSheet.create({
    textinput: {
        borderColor:"black", borderBottomWidth:1, marginVertical:15, paddingLeft: 5
    },
    view: {
        margin: 20, padding: 5, backgroundColor:  "#FFF"
    }
   
})
