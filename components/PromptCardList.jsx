"use client"
import React, { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react'
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
    const { data: session, status } = useSession();
    const [posts, setPosts] = useState(data)
    const loading = status === 'loading';

    if (loading) return <div>Loading...</div> // or some loading spinner

    const handleDelete = async (id) => {
        const hasConfirmed = confirm("Do you want to delete this prompt?")
        if(hasConfirmed){
            try {
                await fetch(`/api/prompt/${id}`,{
                    method: "DELETE"
                });
                console.log(posts)
                const filteredPosts = posts.filter((p)=> p._id != id)
                console.log(filteredPosts)
                setPosts(filteredPosts)
            } catch (error) {
                console.log(error)
            }
        }
      }
      const handleEdit = (id) => {
          router.push(`/update-prompt?id=${id}`)
      }
      useEffect(()=>{
        setPosts(data)
      },[data])
    return (
        <div className="mt-16 prompt_layout">
            {posts.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick ? handleTagClick : undefined}
                    isCreator={post.creator._id === session.user.id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </div>
    )
}

export default PromptCardList