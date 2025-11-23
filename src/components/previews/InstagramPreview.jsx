import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, BadgeCheck } from 'lucide-react';

export const InstagramPreview = ({ name, handle, text, image, avatar, likes, comments, isVerified, darkMode }) => {
    return (
        <div className={`border rounded-lg max-w-[470px] w-full font-sans text-sm transition-colors ${darkMode ? 'bg-black border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'}`}>
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-8 h-8 rounded-full object-cover ring-2 ring-white ring-offset-2 ring-offset-pink-500" />
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200" />
                    )}
                    <div className="flex items-center gap-1">
                        <span className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{handle || 'handle'}</span>
                        {isVerified && <BadgeCheck size={14} className="text-blue-500 fill-blue-500 text-white" />}
                    </div>
                </div>
                <MoreHorizontal size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
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
                        <Heart size={24} className={`${darkMode ? 'text-white' : 'text-gray-900'} hover:text-gray-600 cursor-pointer`} />
                        <MessageCircle size={24} className={`${darkMode ? 'text-white' : 'text-gray-900'} hover:text-gray-600 cursor-pointer -rotate-90`} />
                        <Send size={24} className={`${darkMode ? 'text-white' : 'text-gray-900'} hover:text-gray-600 cursor-pointer`} />
                    </div>
                    <Bookmark size={24} className={`${darkMode ? 'text-white' : 'text-gray-900'} hover:text-gray-600 cursor-pointer`} />
                </div>
                <div className="font-semibold text-sm mb-1">{likes || '1,234'} likes</div>
                <div className="text-sm">
                    <span className="font-semibold mr-2">{handle || 'handle'}</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>{text || 'Your caption goes here...'}</span>
                </div>
                <div className="text-gray-500 text-xs mt-2 uppercase">2 HOURS AGO</div>
            </div>
        </div>
    );
};

export default InstagramPreview;
