'use client'

import { useState, useEffect } from 'react'

import PromptCardList from './PromptCardList'


const handleTagClick = () => {

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
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed