'use client'
import Post from './Post';
import Comments from './Comments';

const Feed = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12"> 
    <Post />
    <Comments/>
    </div>
  )
};

export default Feed;
