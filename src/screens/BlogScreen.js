import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const BlogScreen = ({route, navigation}) => {
    const {blog} = route.params
    useLayoutEffect(() => {
        navigation.setOptions({title: `Blog ${blog.id}`,
          headerRight: () => (
            <Button onPress={() => navigation.navigate("Edit")} title="Edit"/>
          ),
        });
      }, []);

    return (
        <View>
            <Text>Id: {blog.id}</Text>
            <Text>Title: {blog.title}</Text>
            <Text>Author: {blog.author}</Text>
            <Text>Blog post: {blog.body}</Text>
        </View>
    )
}

export default BlogScreen

const styles = StyleSheet.create({})
