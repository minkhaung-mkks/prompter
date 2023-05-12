'use client'

import { useState, useEffect } from 'react'

import PromptCard from './PromptCard'


const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}
const Feed = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [posts, setPosts] = useState([])
  const handleSearchChange = (e) => {
    e.preventDefault();
  }
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();

      setPosts(data);
    }

    fetchPosts();
  }, [])
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type="text"
          className='search_input peer'
          placeholder='Search for a tag or a username'
          value={searchTerm}
          onChange={handleSearchChange}
          required
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed