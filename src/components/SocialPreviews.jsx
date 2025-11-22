import React from 'react';
import { Heart, MessageCircle, Repeat, Share, MoreHorizontal, Bookmark, Send, ThumbsUp, MessageSquare, Share2, Globe, Music2 } from 'lucide-react';
import { format } from 'date-fns';

export const TwitterPreview = ({ name, handle, text, image, avatar }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-[500px] w-full font-sans text-[15px]">
            <div className="flex gap-3">
                <div className="flex-shrink-0">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-gray-900">
                        <span className="font-bold truncate">{name || 'Name'}</span>
                        <span className="text-gray-500 truncate">@{handle || 'handle'}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">1h</span>
                        <div className="ml-auto text-gray-500">
                            <MoreHorizontal size={18} />
                        </div>
                    </div>
                    <div className="mt-1 text-gray-900 whitespace-pre-wrap leading-normal">
                        {text || 'Your post text will appear here...'}
                    </div>
                    {image && (
                        <div className="mt-3 rounded-2xl overflow-hidden border border-gray-200">
                            <img src={image} alt="Post content" className="w-full h-auto object-cover" />
                        </div>
                    )}
                    <div className="flex justify-between mt-3 text-gray-500 max-w-[425px]">
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-[#1d9bf0]">
                            <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10">
                                <MessageCircle size={18} />
                            </div>
                            <span className="text-xs">24</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-[#00ba7c]">
                            <div className="p-2 rounded-full group-hover:bg-[#00ba7c]/10">
                                <Repeat size={18} />
                            </div>
                            <span className="text-xs">5</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer hover:text-[#f91880]">
                            <div className="p-2 rounded-full group-hover:bg-[#f91880]/10">
                                <Heart size={18} />
                            </div>
                            <span className="text-xs">182</span>
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

export const InstagramPreview = ({ name, handle, text, image, avatar }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg max-w-[470px] w-full font-sans text-sm">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-8 h-8 rounded-full object-cover ring-2 ring-white ring-offset-2 ring-offset-pink-500" />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200" />
                    )}
                    <span className="font-semibold text-gray-900 text-sm">{handle || 'handle'}</span>
                </div>
                <MoreHorizontal size={20} className="text-gray-900" />
            </div>

            <div className="bg-gray-100 aspect-square w-full flex items-center justify-center overflow-hidden">
                {image ? (
                    <img src={image} alt="Post content" className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-400">Image Preview</span>
                )}
            </div>

            <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                        <Heart size={24} className="text-gray-900 hover:text-gray-600 cursor-pointer" />
                        <MessageCircle size={24} className="text-gray-900 hover:text-gray-600 cursor-pointer -rotate-90" />
                        <Send size={24} className="text-gray-900 hover:text-gray-600 cursor-pointer" />
                    </div>
                    <Bookmark size={24} className="text-gray-900 hover:text-gray-600 cursor-pointer" />
                </div>
                <div className="font-semibold text-sm mb-1">1,234 likes</div>
                <div className="text-sm">
                    <span className="font-semibold mr-2">{handle || 'handle'}</span>
                    <span className="text-gray-900">{text || 'Your caption goes here...'}</span>
                </div>
                <div className="text-gray-500 text-xs mt-2 uppercase">2 HOURS AGO</div>
            </div>
        </div>
    );
};

export const LinkedInPreview = ({ name, handle, text, image, avatar }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg max-w-[555px] w-full font-sans text-sm overflow-hidden">
            <div className="p-3 flex gap-3 mb-1">
                {avatar ? (
                    <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                )}
                <div>
                    <div className="font-semibold text-gray-900 text-sm">{name || 'Name'}</div>
                    <div className="text-xs text-gray-500">Software Engineer at Tech Co</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                        1h • <span className="text-gray-500">🌐</span>
                    </div>
                </div>
                <div className="ml-auto text-gray-500">
                    <MoreHorizontal size={20} />
                </div>
            </div>

            <div className="px-3 pb-2 text-sm text-gray-900 whitespace-pre-wrap">
                {text || 'Share your thoughts...'}
            </div>

            {image && (
                <div className="w-full">
                    <img src={image} alt="Post content" className="w-full h-auto object-cover" />
                </div>
            )}

            <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-1">
                    <div className="bg-[#1485BD] rounded-full p-1 w-4 h-4 flex items-center justify-center">
                        <ThumbsUp size={10} className="text-white fill-white" />
                    </div>
                    <span className="text-xs text-gray-500 hover:text-[#0a66c2] hover:underline cursor-pointer">42</span>
                </div>
                <div className="text-xs text-gray-500 hover:text-[#0a66c2] hover:underline cursor-pointer">
                    5 comments • 1 repost
                </div>
            </div>

            <div className="px-2 py-1 flex items-center justify-between">
                <button className="flex items-center justify-center gap-2 py-3 px-2 flex-1 hover:bg-gray-100 rounded transition-colors text-gray-600 font-semibold text-sm">
                    <ThumbsUp size={18} />
                    <span>Like</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-2 flex-1 hover:bg-gray-100 rounded transition-colors text-gray-600 font-semibold text-sm">
                    <MessageSquare size={18} />
                    <span>Comment</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-2 flex-1 hover:bg-gray-100 rounded transition-colors text-gray-600 font-semibold text-sm">
                    <Share2 size={18} />
                    <span>Repost</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-2 flex-1 hover:bg-gray-100 rounded transition-colors text-gray-600 font-semibold text-sm">
                    <Send size={18} />
                    <span>Send</span>
                </button>
            </div>
        </div>
    );
};

export const FacebookPreview = ({ name, handle, text, image, avatar }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg max-w-[500px] w-full font-sans text-[15px] shadow-sm">
            <div className="p-3 flex gap-2 items-center">
                {avatar ? (
                    <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                )}
                <div className="flex-1">
                    <div className="font-semibold text-[#050505] text-[15px] leading-tight">{name || 'Name'}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                        2h • <Globe size={12} />
                    </div>
                </div>
                <div className="text-gray-500">
                    <MoreHorizontal size={20} />
                </div>
            </div>

            <div className="px-3 pb-3 text-[#050505] whitespace-pre-wrap">
                {text || 'What\'s on your mind?'}
            </div>

            {image && (
                <div className="w-full">
                    <img src={image} alt="Post content" className="w-full h-auto object-cover" />
                </div>
            )}

            <div className="px-4 py-2 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center gap-1">
                    <div className="bg-blue-500 rounded-full p-1 w-4 h-4 flex items-center justify-center">
                        <ThumbsUp size={10} className="text-white fill-white" />
                    </div>
                    <span className="text-gray-500 text-sm">12</span>
                </div>
                <div className="text-gray-500 text-sm">
                    3 comments
                </div>
            </div>

            <div className="px-2 py-1 flex items-center justify-between">
                <button className="flex items-center justify-center gap-2 py-2 px-2 flex-1 hover:bg-gray-100 rounded transition-colors text-gray-600 font-semibold text-[15px]">
                    <ThumbsUp size={20} />
                    <span>Like</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-2 px-2 flex-1 hover:bg-gray-100 rounded transition-colors text-gray-600 font-semibold text-[15px]">
                    <MessageSquare size={20} />
                    <span>Comment</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-2 px-2 flex-1 hover:bg-gray-100 rounded transition-colors text-gray-600 font-semibold text-[15px]">
                    <Share2 size={20} />
                    <span>Share</span>
                </button>
            </div>
        </div>
                </div >
            </div >

    {/* Right Action Bar */ }
    < div className = "absolute right-2 bottom-20 flex flex-col items-center gap-4" >
                <div className="relative">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover border-2 border-white" />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white" />
                    )}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FE2C55] rounded-full p-0.5">
                        <div className="w-3 h-3 flex items-center justify-center text-white font-bold text-[10px]">+</div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <Heart size={32} className="fill-white text-white" />
                    <span className="text-xs font-bold">1.2M</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <MessageCircle size={32} className="fill-white text-white" />
                    <span className="text-xs font-bold">45.2K</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <Bookmark size={32} className="fill-white text-white" />
                    <span className="text-xs font-bold">85.4K</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <Share size={32} className="fill-white text-white" />
                    <span className="text-xs font-bold">20.1K</span>
                </div>
            </div >
        </div >
    );
};
