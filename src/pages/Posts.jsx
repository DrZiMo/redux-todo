import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/slices/postsSlice'
import Loader from '../components/Loader'

const Posts = () => {
    const dispatch = useDispatch()
    const postsState = useSelector(state => state.myPosts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if(postsState.loading) {
        return <Loader />
    }

    if(postsState.error) {
        return <div className='text-center text-red-500'>{postsState.error}</div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[80%] mx-auto mt-10'>
            {postsState.posts.map((post, index) => (
                <div className='shadow-md border p-4 rounded-md' key={index}>
                    <h1 className='text-xl font-semibold mb-2'>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}
export default Posts