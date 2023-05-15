"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";

const MyProfile = () => {
   
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await res.json();
            
            setPosts(data);
        }

        if (session?.user.id) fetchPosts();
    }, [])
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    if (loading) return <div>Loading...</div> // or some loading spinner
    return (
        <Profile
            name="My"
            desc="Welcome to your profile page."
            data={posts}
        />
    )
}

export default MyProfile