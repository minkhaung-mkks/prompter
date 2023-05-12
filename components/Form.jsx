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
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Your AI prompt
                    </span>
                    <textarea
                        className='form_textarea'
                        value={post.prompt}
                        onChange={(e) => {
                            setPost({ ...post, prompt: e.target.value })
                        }}
                        required
                        placeholder='Write your prompts here...'
                    >
                    </textarea>
                </label>

                <label htmlFor="">
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Tag {` `}
                        <span className='font-normal'>
                            (#product, #webdev, #idea)
                        </span>
                    </span>
                    <input
                        className='form_input'
                        value={post.tag}
                        onChange={(e) => {
                            setPost({ ...post, tag: e.target.value })
                        }}
                        placeholder='#tag'
                        required
                    >
                    </input>
                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href='/' className='text-gray-500 text-sm'>
                        Cancel
                    </Link>
                    <button
                        type='submit'
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form