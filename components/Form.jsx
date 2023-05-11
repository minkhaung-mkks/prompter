import React from 'react'
import Link from 'next/link'

const Form = ({ 
    type,
    post,
    setPost,
    submitting,
    handleSubmit,
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h2 className='head_text text-left'>
            <span className='blue_gradient'>
                {type} Post
            </span>
        </h2>
        <p className='desc text-left max-w-md'>
            {type} and share amazing prompts with the world, and let your imagination run wild with AI-powered platforms
        </p>
        <form
            onSubmit={handleSubmit}
            className='glassmorphism mt-10 w-full max-w-2x1 flex flex-col gap-7' 
        >
            <label htmlFor="">
                <span className='font-satoshi font-semibold text-base text-grey-700'>
                    Your AI prompt
                </span>
            </label>
            <textarea 
                className='form_text-area'
                value={post.prompt}
                onChange={(e)=>{
                    setPost({...post, prompt: e.target.value})
                }}
                placeholder='Write your prompts here...'
            >
            </textarea>
        </form>
    </section>
  )
}

export default Form