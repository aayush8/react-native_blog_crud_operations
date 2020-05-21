import React, {useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { BlogContext } from '../context/BlogContext'

const BlogPost = ({blog, navigation}) => {
    const {delBlog} = useContext(BlogContext)

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => navigation.navigate("Blog",
                {blog}
            )}>
                <Text style={styles.text}>{blog.title} -by {blog.author}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => delBlog(blog.id)}>
                <Text style={styles.del}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BlogPost

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFF", margin: 10, flexDirection:"row", justifyContent:"space-between",
    },
    text: {
        fontSize: 18, padding: 10, flex:  1
    },
    del: {
        color: "red", fontSize: 25, paddingRight:10, paddingTop:5
    }
})
