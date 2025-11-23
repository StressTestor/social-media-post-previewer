import React from 'react';
import { MessageCircle, Repeat2, Heart, Share, MoreHorizontal, BadgeCheck } from 'lucide-react';
import { format } from 'date-fns';

export const TwitterPreview = ({ name, handle, text, image, avatar, likes, comments, shares, isVerified, postDate, darkMode }) => {
    const formattedDate = postDate ? format(new Date(postDate), 'MMM d, yyyy · h:mm a') : 'Nov 23, 2023 · 10:30 AM';

    return (
        <div className={`border rounded-xl p-4 max-w-[500px] w-full font-sans text-[15px] transition-colors ${darkMode ? 'bg-black border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'}`}>
            <div className="flex gap-3">
                <div className="flex-shrink-0">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <div className={`flex items-center gap-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        <div className="flex items-center gap-1 truncate">
                            <span className="font-bold">{name || 'Name'}</span>
                            {isVerified && <BadgeCheck size={16} className="text-[#1d9bf0] fill-current" />}
                        </div>
                        <span className="text-gray-500 truncate">@{handle || 'handle'}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">1h</span>
                        <div className="ml-auto text-gray-500">
                            <MoreHorizontal size={18} />
                        </div>
                    </div>
                    <div className={`mt-1 whitespace-pre-wrap leading-normal ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {text || 'Your post text will appear here...'}
                    </div>
                    {image && (
                        <div className={`mt-3 rounded-2xl overflow-hidden border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                            <img src={image} alt="Post content" className="w-full h-auto object-cover" />
                        </div>
                    )}
                    <div className={`mt-3 text-[15px] ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {formattedDate} · <span className={darkMode ? 'text-white' : 'text-black'}><strong>2.1M</strong> Views</span>
                    </div>
                    <div className="flex justify-between mt-3 text-gray-500 max-w-[425px]">
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-[#1d9bf0]">
                            <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10">
                                <MessageCircle size={18} />
                            </div>
                            <span className="text-xs">{comments || '24'}</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-[#00ba7c]">
                            <div className="p-2 rounded-full group-hover:bg-[#00ba7c]/10">
                                <Repeat2 size={18} />
                            </div>
                            <span className="text-xs">{shares || '5'}</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-[#f91880]">
                            <div className="p-2 rounded-full group-hover:bg-[#f91880]/10">
                                <Heart size={18} />
                            </div>
                            <span className="text-xs">{likes || '182'}</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-[#1d9bf0]">
                            <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10">
                                <Share size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwitterPreview;
