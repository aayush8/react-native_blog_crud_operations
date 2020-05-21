import React, {createContext, useState} from 'react'

export const BlogContext = createContext()

export const BlogProvider = ({children}) => {
    const [blogs, setBlogs] = useState([])
    const [idcount, setidcount] = useState(0)

    const addBlog = (author, title, body) => {
        setidcount(idcount+1)
        setBlogs([...blogs, {author, title, body, id:idcount.toString() }])
    }

    const delBlog = id => {
        setBlogs(blogs.filter(blog => id != blog.id))
    }

    return (
        <BlogContext.Provider value={{blogs, addBlog, delBlog}}>
            {children}
        </BlogContext.Provider>
    )
}

