import React from 'react';
import { ThumbsUp, MessageSquare, Share2, Send, MoreHorizontal, BadgeCheck, Globe } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export const LinkedInPreview = ({ name, handle, text, image, avatar, likes, comments, shares, isVerified, postDate, darkMode }) => {
    const timeAgo = postDate ? formatDistanceToNow(new Date(postDate), { addSuffix: false }).replace('about ', '') : '1h';

    return (
        <div className={`border rounded-lg max-w-[555px] w-full font-sans text-sm overflow-hidden transition-colors ${darkMode ? 'bg-[#1b1f23] border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}>
            <div className="p-3 flex gap-3 mb-1">
                {avatar ? (
                    <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                )}
                <div>
                    <div className="flex items-center gap-1">
                        <div className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{name || 'Name'}</div>
                        {isVerified && <BadgeCheck size={14} className="text-gray-500" />}
                    </div>
                    <div className="text-xs text-gray-500">Software Engineer at Tech Co</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                        <span>{timeAgo} • </span>
                        <Globe size={12} />
                    </div>
                </div>
                <div className="ml-auto text-gray-500">
                    <MoreHorizontal size={20} />
                </div>
            </div>

            <div className={`px-3 pb-2 text-sm whitespace-pre-wrap ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {text || 'Share your thoughts...'}
            </div>

            {image && (
                <div className="w-full">
                    <img src={image} alt="Post content" className="w-full h-auto object-cover" />
                </div>
            )}

            <div className={`px-3 py-2 flex items-center justify-between border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <div className="flex items-center gap-1">
                    <div className="bg-[#1485BD] rounded-full p-1 w-4 h-4 flex items-center justify-center">
                        <ThumbsUp size={10} className="text-white fill-white" />
                    </div>
                    <span className="text-xs text-gray-500 hover:text-[#0a66c2] hover:underline cursor-pointer">{likes || '42'}</span>
                </div>
                <div className="text-xs text-gray-500 hover:text-[#0a66c2] hover:underline cursor-pointer">
                    {comments || '5'} comments • {shares || '1'} repost
                </div>
            </div>

            <div className="px-2 py-1 flex items-center justify-between">
                <button className={`flex items-center justify-center gap-2 py-3 px-2 flex-1 rounded transition-colors font-semibold text-sm ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                    <ThumbsUp size={18} />
                    <span>Like</span>
                </button>
                <button className={`flex items-center justify-center gap-2 py-3 px-2 flex-1 rounded transition-colors font-semibold text-sm ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                    <MessageSquare size={18} />
                    <span>Comment</span>
                </button>
                <button className={`flex items-center justify-center gap-2 py-3 px-2 flex-1 rounded transition-colors font-semibold text-sm ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                    <Share2 size={18} />
                    <span>Repost</span>
                </button>
                <button className={`flex items-center justify-center gap-2 py-3 px-2 flex-1 rounded transition-colors font-semibold text-sm ${darkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                    <Send size={18} />
                    <span>Send</span>
                </button>
            </div>
        </div>
    );
};

export default LinkedInPreview;
