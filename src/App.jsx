import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, Layout, Twitter, Instagram, Linkedin, Moon, Sun, Download } from 'lucide-react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import AdPlaceholder from './components/AdPlaceholder';
import AdsterraBanner from './components/AdsterraBanner';
import TwitterPreview from './components/previews/TwitterPreview';
import InstagramPreview from './components/previews/InstagramPreview';
import LinkedInPreview from './components/previews/LinkedInPreview';
import FacebookPreview from './components/previews/FacebookPreview';
import TikTokPreview from './components/previews/TikTokPreview';

function App() {
  const [activeTab, setActiveTab] = useState('twitter');
  const [darkMode, setDarkMode] = useState(false);
  const previewRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    text: '',
    avatar: null,
    image: null,
    likes: '1.2K',
    comments: '45',
    shares: '12',
    isVerified: false,
    postDate: new Date().toISOString().slice(0, 16)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, [field]: url }));
    }
  };

  const removeImage = (field) => {
    setFormData(prev => ({ ...prev, [field]: null }));
  };

  const handleDownload = async () => {
    if (previewRef.current) {
      try {
        const dataUrl = await toPng(previewRef.current, { cacheBust: true });
        download(dataUrl, `${activeTab}-preview.png`);
      } catch (err) {
        console.error('Failed to download image', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Layout size={20} />
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">PostPreviewer</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            title="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="text-sm text-gray-500 hidden sm:block">
            Optimized for Creators
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden h-[calc(100vh-64px)]">
        {/* Left Column: Editor */}
        <div className="w-full lg:w-[400px] bg-white border-r border-gray-200 flex flex-col h-full overflow-y-auto z-20 shadow-sm">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Post Details</h2>

              {/* Identity */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Handle</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-gray-400">@</span>
                    <input
                      type="text"
                      name="handle"
                      value={formData.handle}
                      onChange={handleInputChange}
                      placeholder="janedoe"
                      className="w-full pl-7 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="isVerified"
                      id="isVerified"
                      checked={formData.isVerified}
                      onChange={(e) => setFormData(prev => ({ ...prev, isVerified: e.target.checked }))}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="isVerified" className="text-sm text-gray-700 select-none">Show Verified Badge</label>
                  </div>
                </div>

                {/* Date/Time Picker */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Post Time</label>
                  <input
                    type="datetime-local"
                    name="postDate"
                    value={formData.postDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>

                {/* Avatar Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Avatar</label>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                      {formData.avatar ? (
                        <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon size={20} className="text-gray-400" />
                      )}
                    </div>
                    {formData.avatar ? (
                      <button
                        onClick={() => removeImage('avatar')}
                        className="text-sm text-red-600 hover:text-red-700 font-medium"
                      >
                        Remove
                      </button>
                    ) : (
                      <label className="cursor-pointer bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                        Upload
                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, 'avatar')} />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Post Text</label>
                  <textarea
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="What's on your mind?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>

                {/* Post Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Post Image</label>
                  {formData.image ? (
                    <div className="relative rounded-lg overflow-hidden border border-gray-200 group">
                      <img src={formData.image} alt="Post" className="w-full h-48 object-cover" />
                      <button
                        onClick={() => removeImage('image')}
                        className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload size={24} className="text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload image</p>
                      </div>
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, 'image')} />
                    </label>
                  )}
                </div>
              </div>

              {/* Engagement Metrics */}
              <div>
                <h2 className="text-lg font-semibold mb-4 pt-4 border-t border-gray-200">Engagement Metrics</h2>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Likes</label>
                    <input
                      type="text"
                      name="likes"
                      value={formData.likes}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
                    <input
                      type="text"
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Shares</label>
                    <input
                      type="text"
                      name="shares"
                      value={formData.shares}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar Ad */}
              <div className="pt-6 flex justify-center border-t border-gray-200 mt-6">
                <AdsterraBanner height={250} width={300} adKey="3bb0671c3e4f68489eba484e0f2e42f2" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Preview Area */}
        <div className="flex-1 flex flex-col bg-gray-100 relative overflow-hidden">
          {/* Tabs */}
          <div className="bg-white border-b border-gray-200 px-6 flex items-center gap-6">
            <button
              onClick={() => setActiveTab('twitter')}
              className={`flex items-center gap-2 py-4 border-b-2 font-medium text-sm transition-colors ${activeTab === 'twitter' ? 'border-[#1d9bf0] text-[#1d9bf0]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <Twitter size={18} />
              Twitter
            </button>
            <button
              onClick={() => setActiveTab('instagram')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'instagram' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center gap-2">
                <Instagram size={16} />
                Instagram
              </div>
            </button>
            <button
              onClick={() => setActiveTab('linkedin')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'linkedin' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                LinkedIn
              </div>
            </button>
            <button
              onClick={() => setActiveTab('facebook')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'facebook' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center gap-2">
                <span>Facebook</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'tiktok' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center gap-2">
                <span>TikTok</span>
              </div>
            </button>
          </div>

          {/* Download Button */}
          <div className="absolute top-[72px] right-6 z-20">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
            >
              <Download size={16} />
              Export Image
            </button>
          </div>

          {/* Preview Area */}
          <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto bg-gray-50/50">
            <div ref={previewRef} className="p-4">
              {activeTab === 'twitter' && <TwitterPreview {...formData} darkMode={darkMode} />}
              {activeTab === 'instagram' && <InstagramPreview {...formData} darkMode={darkMode} />}
              {activeTab === 'linkedin' && <LinkedInPreview {...formData} darkMode={darkMode} />}
              {activeTab === 'facebook' && <FacebookPreview {...formData} darkMode={darkMode} />}
              {activeTab === 'tiktok' && <TikTokPreview {...formData} darkMode={darkMode} />}
            </div>
          </div>


          {/* Leaderboard Ad - Fixed Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-center z-10">
            <div className="shadow-sm hidden md:flex">
              <AdsterraBanner height={90} width={728} adKey="3bb0671c3e4f68489eba484e0f2e42f2" />
            </div>
            <div className="shadow-sm flex md:hidden">
              <AdsterraBanner height={50} width={320} adKey="REPLACE_WITH_YOUR_KEY" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
