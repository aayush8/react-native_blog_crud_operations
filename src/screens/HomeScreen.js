import React, {useContext, useLayoutEffect} from 'react'
import { StyleSheet, Text, View,Button, FlatList } from 'react-native'

import {BlogContext} from '../context/BlogContext'
import BlogForm from '../components/BlogForm'
import BlogPost from '../components/BlogPost'

const HomeScreen = ({navigation}) => {
    const {blogs} = useContext(BlogContext)
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Button onPress={() => navigation.navigate("Create")} title="+"/>
          ),
        });
      }, []);
   
    return (
        
        <View>
          {/* <Text>Current size of blogs is {blogs.length}</Text> */}
          <FlatList data={blogs} 
            keyExtractor={blog => blog.id}
            renderItem={item => (
               <BlogPost blog={item.item} navigation={navigation}/>
            )}
          />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
