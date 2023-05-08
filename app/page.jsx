import React from 'react'

import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center' >
            Discover & Share
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'>
                AI-Powered Prompts
            </span>
        </h1>
        <p>
            Prompt Paradise is a modern prompt sharing platform to get you the lastest and best prompts to get ahead in the AI race.
        </p>
        <Feed/>
    </section>
  )
}

export default Home