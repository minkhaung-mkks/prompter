import React from 'react'
import { useSession } from 'next-auth/react'
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
    const { data: session, status } = useSession();

    const loading = status === 'loading';

    if (loading) return <div>Loading...</div> // or some loading spinner

   
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post.id}
                    post={post}
                    handleTagClick={handleTagClick ? handleTagClick : undefined}
                    isCreator={post.creator._id === session.user.id}
                />
            ))}
        </div>
    )
}

export default PromptCardList