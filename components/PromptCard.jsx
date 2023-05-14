"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, isCreator,handleDelete,handleEdit }) => {
  const [copied, setCopied] = useState("")
  const router = useRouter();
  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied("")
    }, 3000);
  }
 
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post?.creator?.image}
            alt="user profile picture"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post?.creator?.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post?.creator?.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? '/assets/icons/tick.svg' : "/assets/icons/copy.svg"}
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post.prompt}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
      {isCreator && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <button
            className="font-inter text-sm cursor-pointer edit_btn py-1"
            onClick={()=>handleEdit(post?._id)}
          >
            Edit
          </button>
          <button
            className="font-inter text-sm cursor-pointer delete_btn py-1"
            onClick={()=>handleDelete(post?._id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default PromptCard