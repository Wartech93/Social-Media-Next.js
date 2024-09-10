'use client'
import Image from 'next/image';


const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* AVATAR  */}
      <Image src="https://images.pexels.com/photos/27948198/pexels-photo-27948198/free-photo-of-a-couple-posing-for-a-photo-by-the-water.jpeg"
        width={48}
        height={48}
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className='flex-1'>
        {/* TEXT INPUT */}
        <div className='flex gap-4'>
          <textarea name="" id="" className="flex-1 bg-slate-100 rounded-lg p-2" placeholder="What's on your mind?"></textarea>
          <Image src="/emoji.png"
            width={20}
            height={20}
            alt=""
            className="w-5 h-5 object-cover rounded-full cursror-pointer self-end"
          />
        </div>
        {/* POST OPTIONS */}
        <div className='flex items-center gap-4 mt-4 text-gray-400'>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addimage.png"
            width={20}
            height={20}
            alt="Add Photo"
          />
          <span className="text-gray-600">Photo</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addVideo.png"
            width={20}
            height={20}
            alt="Add Video"
          />
          <span className="text-gray-600">Video</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addevent.png"
            width={20}
            height={20}
            alt="Add Event"
            />
            <span className="text-gray-600">Event</span>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/poll.png"
            width={20}
            height={20}
            alt="Poll"
          />
          <span className="text-gray-600">Poll</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddPost;
