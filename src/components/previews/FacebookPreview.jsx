import React from 'react';
import { ThumbsUp, MessageSquare, Share2, Globe, MoreHorizontal, BadgeCheck, X } from 'lucide-react';
import { format } from 'date-fns';

export const FacebookPreview = ({ name, handle, text, image, avatar, likes, comments, shares, isVerified, postDate, darkMode }) => {
    const formattedDate = postDate ? format(new Date(postDate), 'MMMM d') : 'November 23';
    const formattedTime = postDate ? format(new Date(postDate), 'h:mm a') : '12:45 PM';

    return (
        <div className={`border rounded-lg max-w-[500px] w-full font-sans text-[15px] shadow-sm transition-colors ${darkMode ? 'bg-[#242526] border-gray-700 text-white' : 'bg-white border-gray-200 text-[#050505]'}`}>
            <div className="p-3 flex gap-2 items-center">
                {avatar ? (
                    <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                )}
                <div className="flex-1">
                    <div className="flex items-center gap-1">
                        <div className={`font-semibold text-[15px] leading-tight ${darkMode ? 'text-white' : 'text-[#050505]'}`}>{name || 'Name'}</div>
                        {isVerified && <BadgeCheck size={14} className="text-blue-500 fill-blue-500 text-white" />}
                    </div>
                    <div className={`text-xs flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <span>{formattedDate} at {formattedTime}</span>
                        <span>·</span>
                        <Globe size={12} />
                    </div>
                </div>
                <div className="text-gray-500">
                    <MoreHorizontal size={20} />
                </div>
            </div>

            <div className={`px-3 pb-3 whitespace-pre-wrap ${darkMode ? 'text-white' : 'text-[#050505]'}`}>
                {text || 'What\'s on your mind?'}
            </div>

            {image && (
                <div className="w-full">
                    <img src={image} alt="Post content" className="w-full h-auto object-cover" />
                </div>
            )}

            <div className={`px-4 py-2 flex items-center justify-between border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center gap-1">
                    <div className="bg-blue-500 rounded-full p-1 w-4 h-4 flex items-center justify-center">
                        <ThumbsUp size={10} className="text-white fill-white" />
                    </div>
                    <span className="text-gray-500 text-sm">{likes || '12'}</span>
                </div>
                <div className="text-gray-500 text-sm">
                    {comments || '3'} comments
                </div>
            </div>

            <div className="px-2 py-1 flex items-center justify-between">
                <button className={`flex items-center justify-center gap-2 py-2 px-2 flex-1 rounded transition-colors font-semibold text-[15px] ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                    <ThumbsUp size={20} />
                    <span>Like</span>
                </button>
                <button className={`flex items-center justify-center gap-2 py-2 px-2 flex-1 rounded transition-colors font-semibold text-[15px] ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                    <MessageSquare size={20} />
                    <span>Comment</span>
                </button>
                <button className={`flex items-center justify-center gap-2 py-2 px-2 flex-1 rounded transition-colors font-semibold text-[15px] ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                    <Share2 size={20} />
                    <span>Share</span>
                </button>
            </div>
        </div>
    );
};

export default FacebookPreview;
