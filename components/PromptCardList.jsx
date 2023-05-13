import React from 'react'
import { useSession } from 'next-auth/react'
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
    const { data: session } = useSession();
    const handleDelete = () => {

    }
    const handleEdit = () => {

    }
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post.id}
                    post={post}
                    handleTagClick={handleTagClick ? handleTagClick : undefined}
                    handleDelete={post.creator._id === session?.user.id ? handleDelete : undefined}
                    handleEdit={post.creator._id === session?.user.id ? handleEdit : undefined}
                />
            ))}
        </div>
    )
}

export default PromptCardList