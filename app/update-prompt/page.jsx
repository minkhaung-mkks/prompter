"use client"

import React, { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter,useSearchParams } from 'next/navigation'

import Form from '@components/Form'

const UpdatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const router = useRouter();
    const searchParams = useSearchParams();
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    if (loading) return <div>Loading...</div> // or some loading spinner
    const promptId=searchParams.get('id');
    const getPromptDetails = async()=>{
        const res = await fetch(`/api/prompt/${promptId}`)
        const data = await res.json();
        setPost({
            prompt: data.prompt,
            tag: data.tag
        })
    }
    useEffect(() => {
        if(promptId) getPromptDetails();
    }, [promptId])
    

    const updatePrompt = async (e) => {
        e.preventDefault();
        if(!promptId) return alert('Prompt ID not found')
        setSubmitting(true)
        try {
            const res = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })
            if (res.ok) {
                router.push('/');
            }

        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Form
            type="Edit"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        >

        </Form>
    )
}

export default UpdatePrompt