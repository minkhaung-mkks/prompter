"use client"

import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const UserProfile = ({params}) => {
   
    const [posts, setPosts] = useState([])
    const userId = params.id;
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${userId}/posts`);
            const data = await res.json();
            
            setPosts(data);
        }
        console.log(userId)
        if (userId) fetchPosts();
    }, [])
    return (
        <Profile
            name={posts[0]?.creator.username}
            desc="Welcome to profile page."
            data={posts}
        />
    )
}

export default UserProfile