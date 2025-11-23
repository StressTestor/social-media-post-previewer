import React from 'react';
import { Heart, MessageCircle, Share, Bookmark, Music2, BadgeCheck } from 'lucide-react';
import { format } from 'date-fns';

export const TikTokPreview = ({ name, handle, text, image, avatar, likes, comments, shares, isVerified, postDate, darkMode }) => {
    const formattedDate = postDate ? format(new Date(postDate), 'MM-dd') : '11-23';

    return (
        <div className={`bg-black text-white rounded-lg max-w-[350px] w-full h-[600px] font-sans relative overflow-hidden shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-800'}`}>
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-900">
                {image ? (
                    <img src={image} alt="Post content" className="w-full h-full object-cover opacity-80" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500">
                        <span>Video Preview</span>
                    </div>
                )}
            </div>

            {/* Right Action Bar */}
            <div className="absolute right-2 bottom-20 flex flex-col items-center gap-4 z-10">
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
                    <span className="text-xs font-bold shadow-black drop-shadow-md">{likes || '1.2M'}</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <MessageCircle size={32} className="fill-white text-white" />
                    <span className="text-xs font-bold shadow-black drop-shadow-md">{comments || '45.2K'}</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <Bookmark size={32} className="fill-white text-white" />
                    <span className="text-xs font-bold shadow-black drop-shadow-md">85.4K</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <Share size={32} className="fill-white text-white" />
                    <span className="text-xs font-bold shadow-black drop-shadow-md">{shares || '20.1K'}</span>
                </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-4 left-4 right-16 z-10 text-shadow-sm">
                <div className="flex items-center gap-1 mb-1">
                    <div className="font-bold text-base">@{handle || 'handle'}</div>
                    {isVerified && <BadgeCheck size={14} className="text-[#20D5EC] fill-[#20D5EC] text-white" />}
                </div>
                <div className="text-sm mb-2 line-clamp-2">{text || 'Your caption goes here... #fyp #viral'}</div>
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Music2 size={14} />
                    <div className="truncate">Original Sound - {name || 'Creator'}</div>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm mt-1">
                    <span>{formattedDate}</span>
                </div>
            </div>
        </div>
    );
};

export default TikTokPreview;
