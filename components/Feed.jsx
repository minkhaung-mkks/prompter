'use client'

import { useState, useEffect } from 'react'

import PromptCardList from './PromptCardList'

const Feed = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchTimeout, setSearchTimeout] = useState(null)
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  
  const searchPrompts =(searchText)=>{
    const regex = new RegExp(searchText,'i');// i makes it case insensitive.
    return allPosts.filter((post)=>(
        regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
    ))
  }

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchTerm(e.target.value);

    setSearchTimeout(
        setTimeout(() => {
            const searchedPrompts = searchPrompts(e.target.value);
            setSearchResults(searchedPrompts);
        }, 500)
    );
  }
  const handleTagClick = (tagName) => {
    setSearchTerm(tagName);
    const searchedTag = allPosts.filter((post)=>(tagName === post.tag))
    setSearchResults(searchedTag)
  }
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();
      setAllPosts(data)
      setSearchResults(data);
    }

    fetchPosts();
  }, [])

  useEffect(()=>{
    setPosts(searchResults)
  },[searchResults])
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