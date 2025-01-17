import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComment } from '../redux/slices/commentSlice'
import Loader from '../components/Loader'
import { getSinglePost } from '../redux/slices/postsSlice'

const Comments = () => {
    const selectedPost = useSelector(state => state.myPosts.selectedPost)
    const commentState = useSelector(state => state.myComments)
    const post = useSelector(state => state.myPosts.singlePost)
    const dispatch = useDispatch()

    useEffect(() => {
        if(selectedPost) {
            dispatch(getSinglePost())
            dispatch(getComment())
        }
    }, [selectedPost])

    if(commentState.isLoading) {
        return <Loader />
    }

    if(commentState.error) {
        return <div className='text-center text-red-500'>{commentState.error}</div>
    }

    return (
        <div className="w-[80%] mx-auto mt-10">
            <div className='post'>
                {<div className='shadow-md border p-4 rounded-md'>
                    <h1 className='text-xl font-semibold mb-2'>{post.id}. {post.title}</h1>
                    <p>{post.body}</p>
                </div>}
            </div>
            <h1 className='text-blue-600 font-semibold text-xl mt-10'>Comments</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2'>
                {commentState.comments.map((comment, index) => (
                    <div className='shadow-md border p-4 rounded-md' key={index}>
                        <h1 className='text-xl font-semibold'>{comment.name}</h1>
                        <h3 className='text-blue-600 text-sm mb-2'>From {comment.email}</h3>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments