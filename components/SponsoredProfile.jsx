// import Image from 'next/image';


function SponsoredProfile() {

    const YEAR = new Date().getFullYear(); 

    return (
        <div>
            <div className="flex items-center p-2 border-b">
                <div>
                <img className="h-14 w-14 rounded-full object-cover border p-1" src="/assets/profile1.jpg" alt="profile picture"/>
                {/* <img className="h-12 w-12 rounded-full object-cover border p-1 cursor-pointer" src="/assets/profile3.jpg" alt="profile picture"/> */}
                </div>
                <div className="ml-2 flex-1">
                    <p className="font-bold text-xs text-gray-800 cursor-pointer line-clamp-1 capitalize">Jidraff Gathura</p>
                    <p className="text-xs text-gray-400 font-semibold cursor-pointer">Kenya</p>
                </div>
                <div className="cursor-pointer text-xs text-blue-500">Logout</div>
            </div>
            <div>
                <p className="text-xs pt-3">Related videos:</p>
            </div>
            <div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Baba lao remix ft Burna Boy (Official Music Video)</p>
                        <p className="text-xs text-gray-400 uppercase line-clamp-1">Diamond Platnumz</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb2.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer " >
                        <p className="text-xs font-bold text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Nairobi ft Nviri the Story Teller Sauti Sol and Mejja (Official Music Video)</p>
                        <p className="text-xs text-gray-400 uppercase line-clamp-1">Bensoul</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Sina Ubaya (Official Music Video)</p>
                        <p className="text-xs text-gray-400 uppercase line-clamp-1">Zuchu and another long name that should be trancated</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo</p>
                    </div>
                </div>
                <div className="flex items-center p-2 hover:-translate-y-0.5 transform transition">
                    <img className="h-12 w-19 mr-2 object-cover cursor-pointer" src="/assets/thumb3.jpg" alt="advertiser logo" />
                    <div className="cursor-pointer ">
                        <p className="text-xs font-bold  text-gray-800 line-clamp-2 capitalize hover:text-blue-500">Mama Amina ft Sho Madjozi (Official Music Video)</p>
                        <p className="text-xs  text-gray-400 uppercase">Marioo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsoredProfile
