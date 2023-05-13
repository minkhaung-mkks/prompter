import React from 'react'
import PromptCardList from './PromptCardList'

const Profile = ({ name, desc, data }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradie  nt'> {name} profile </span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      <PromptCardList
        data={data}
      />
    </section>
  )
}

export default Profile