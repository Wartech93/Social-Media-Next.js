'use client'
import Image from "next/image";

const Comments = () => {
    return (
        <div className=''>
            <div className=''>
                {/* WRITE */}
            </div>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                />
                <div className='flex items-center justify-between bg-slate-100 rounded-xl text-sm py-2 w-full'>
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="bg-transparent outliine-none flex-1"
                    />
                    <Image
                        src="/emoji.png"
                        alt=""
                        className="cursor-pointer"
                        width={16}
                        height={16}
                    />
                </div>
            </div>
            {/* COMMENTS */}
            <div className=''>
                {/* COMMENT */}
                <div className='flex gap-4 justify-between mt-6'>
                    {/* AVATAR */}
                    <Image src="https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                    />
                    {/* DESC */}
                    <div className='flex flex-col gap-2 flex-1'>
                        <span className="font-medium">Laurence Fishboy</span>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus quisquam ipsa eveniet. 
                            Harum laudantium facere laborum adipisci ea similique aliquam nostrum praesentium. 
                            Dolor numquam rerum cum, dolore quibusdam veniam.
                        </p>
                        <div className='flex items-center gap-8 text-xs text-gray-500'>
                            <div className='flex items-center gap-4'>
                                <Image src="/like.png"
                                alt=""
                                width={12}
                                height={12}
                                className="cursor-pointer w-4 h-4" 
                                />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123 Likes</span>
                            </div>
                            <div className=''>Reply</div>
                        </div>
                    </div>
                    {/* ICON  */}
                    <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
};

export default Comments;
