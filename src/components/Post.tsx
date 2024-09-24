'use client'
import Image from 'next/image';

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className=''>
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/28173558/pexels-photo-28173558/free-photo-of-moon-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        height={40}
                        width={40}
                        className="w-10 h-10 rounded-full "
                    />
                    <span className="font-medium">John Smith</span>
                    <Image 
                    src="/more.png" 
                    width={16} 
                    height={16} 
                    alt="" 
                    />
                </div>
               
            </div>
            {/* DESCRIPTION */}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image src="https://images.pexels.com/photos/4456985/pexels-photo-4456985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        fill
                        alt=""
                        className="object-cover round-md"
                    />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore at est quibusdam voluptates magni soluta provident labore sit aliquid consectetur rerum fugit deserunt illum nulla id deleniti, perspiciatis nobis! Aliquam.</p>
            </div>
            {/* INTERACTION  */}
            <div className='flex items-center justify-between text-sm my-4'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            142
                            <span className="hidden md:inline"> Likes</span>
                        </span>
                    </div>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            53
                            <span className="hidden md:inline"> Comments</span>
                        </span>
                    </div>
                </div>
                <div className=''>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">14
                            <span className="hidden md:inline"> Shares</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post;
