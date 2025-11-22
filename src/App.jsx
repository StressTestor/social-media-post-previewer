import React, { useState } from 'react';
import { Upload, Image as ImageIcon, X, Layout, Twitter, Instagram, Linkedin } from 'lucide-react';
import AdPlaceholder from './components/AdPlaceholder';
import AdsterraBanner from './components/AdsterraBanner';
import { TwitterPreview, InstagramPreview, LinkedInPreview } from './components/SocialPreviews';

function App() {
  const [activeTab, setActiveTab] = useState('twitter');
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    text: '',
    avatar: null,
    image: null
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
        <div className="text-sm text-gray-500">
          Optimized for Creators
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
              className={`flex items-center gap-2 py-4 border-b-2 font-medium text-sm transition-colors ${activeTab === 'instagram' ? 'border-[#E1306C] text-[#E1306C]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <Instagram size={18} />
              Instagram
            </button>
            <button
              onClick={() => setActiveTab('linkedin')}
              className={`flex items-center gap-2 py-4 border-b-2 font-medium text-sm transition-colors ${activeTab === 'linkedin' ? 'border-[#0a66c2] text-[#0a66c2]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              <Linkedin size={18} />
              LinkedIn
            </button>
          </div>

          {/* Preview Canvas */}
          <div className="flex-1 overflow-y-auto p-8 flex items-start justify-center relative">
            <div className="w-full max-w-2xl flex justify-center pb-32"> {/* pb-32 for bottom ad space */}
              {activeTab === 'twitter' && <TwitterPreview {...formData} />}
              {activeTab === 'instagram' && <InstagramPreview {...formData} />}
              {activeTab === 'linkedin' && <LinkedInPreview {...formData} />}
            </div>

            {/* Skyscraper Ad - Fixed Right */}
            <div className="hidden xl:block fixed right-6 top-32 bottom-32 w-[160px] flex flex-col justify-center pointer-events-none">
              <div className="pointer-events-auto shadow-sm">
                <AdsterraBanner height={600} width={160} adKey="REPLACE_WITH_YOUR_KEY" />
              </div>
            </div>
          </div>

          {/* Leaderboard Ad - Fixed Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-center z-10">
            <div className="shadow-sm hidden md:flex">
              <AdsterraBanner height={90} width={728} adKey="REPLACE_WITH_YOUR_KEY" />
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
