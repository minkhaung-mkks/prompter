# 🌟 Promptopia Tutorial Project 🌟

This is a Next.js application, using the experimental app router, that allows users to log in with Google and share writing prompt tips that can be viewed by others. It was a fantastic experience, sparked by a tutorial video from JavaScriptMaster (JSM).

## 🎥 Starting My 2nd Project

After completing my YouTube clone project, I was thrilled to find another JSM tutorial video. Initially, I was hesitant about adopting Next.js before fully mastering React. However, after the brief 20-minute crash course provided, which explained that Next.js was essentially React with extra features, I decided to give it a shot.

Grasping the concept of constructing my backend on the same framework as my frontend was challenging. Fortunately, I was able to overcome this hurdle with the help of ChatGPT, which clarified almost all of my questions and provided additional information about how things functioned.

## 📚 Learned Skills

- Next.js
- Tailwind CSS
- Next Auth
- Basic MongoDB

## ✨ Added Features

- Emphasized the importance of utilizing the correct state variables for data transfer across components.
- Implemented conditional rendering for session-dependent components.
- Reworked `PromptCardList` and `PromptCard` to enable prompt editing/deletion directly from the feed.

## 🏋️‍♂️ Challenges

- Redesigning the `PromptCardList` and `PromptCard` was daunting initially, as it required independent exploration. However, I gained confidence and successfully accomplished it.
- Implementing the deletion logic was challenging. As the app doesn't re-fetch data after deletion from the database, it was tricky to modify the populated posts array without adding unnecessary bloat to the app. ChatGPT assisted me in addressing this issue.
- Occasionally, I encountered session management issues. The error message suggested wrapping my sessions with the `SessionProvider`, which was not the actual problem. The issue was calling the session before it was ready. I resolved this by conditionally loading all components that required session usage.

## 🚀 Future Additions

- More login providers.
- Ability to like prompts.
- Sorting prompts by likes.

## 🎓 Conclusion

This was an enjoyable and challenging exploration into a new framework. It was initially intimidating, but the learning process was engaging. I was amazed by how quickly I grasped new concepts and delighted with my ability to modify certain parts to better suit my vision.

I enjoyed learning about Tailwind, though I'm still debating whether I prefer it over vanilla CSS or SCSS. While I'm pleased with completing the project and the extra challenges provided by JSM, I'm looking forward to adding more personal touches to this project.

This was my second tutorial project, and I'm satisfied with the results and the knowledge gained. There's still a wealth of information to learn, particularly about backend development, but I'm viewing this as a small step forward in my journey to build a career from these skills. 😊
