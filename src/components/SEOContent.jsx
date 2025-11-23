import React from 'react';
import { Zap, Layout, Download, Moon, CheckCircle } from 'lucide-react';

const SEOContent = ({ darkMode }) => {
    const textColor = darkMode ? 'text-gray-300' : 'text-gray-600';
    const headingColor = darkMode ? 'text-white' : 'text-gray-900';
    const cardBg = darkMode ? 'bg-gray-800' : 'bg-gray-50';

    return (
        <section className={`py-16 px-6 border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="max-w-5xl mx-auto space-y-16">
                title="Multi-Platform Support"
                desc="Generate fake tweets, Instagram posts, LinkedIn updates, and more from a single dashboard."
                darkMode={darkMode}
                cardBg={cardBg}
                headingColor={headingColor}
                textColor={textColor}
                    />
                <FeatureCard
                    icon={<Download className="text-green-500" />}
                    title="Export to Image"
                    desc="Download high-quality PNG images of your mockups to share with clients or use in presentations."
                    darkMode={darkMode}
                    cardBg={cardBg}
                    headingColor={headingColor}
                    textColor={textColor}
                />
                <FeatureCard
                    icon={<Moon className="text-purple-500" />}
                    title="Dark Mode Ready"
                    desc="Preview how your posts look in both light and dark modes to ensure accessibility and style."
                    darkMode={darkMode}
                    cardBg={cardBg}
                    headingColor={headingColor}
                    textColor={textColor}
                />
            </div>

            {/* How-to Guide */}
            <article className="space-y-6">
                <h3 className={`text-2xl font-bold ${headingColor}`}>How to use the Social Media Post Previewer</h3>
                <div className={`space-y-4 ${textColor}`}>
                    <p>
                        Our <strong>Social Media Mockup Generator</strong> is designed to be intuitive and fast. Follow these simple steps to create your first preview:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li><strong>Choose a Platform:</strong> Select Twitter, Instagram, LinkedIn, Facebook, or TikTok from the tabs.</li>
                        <li><strong>Enter Details:</strong> Type your name, handle, and post text in the editor sidebar.</li>
                        <li><strong>Add Visuals:</strong> Upload a profile picture (avatar) and a post image to make it pop.</li>
                        <li><strong>Customize Metrics:</strong> Adjust the likes, comments, and shares counts to simulate engagement.</li>
                        <li><strong>Set the Date:</strong> Use the date picker to set a specific timestamp for your post.</li>
                        <li><strong>Export:</strong> Click the "Export Image" button to save your mockup as a PNG file.</li>
                    </ol>
                </div>
            </article>

            {/* FAQ Section */}
            <div className="space-y-6">
                <h3 className={`text-2xl font-bold ${headingColor}`}>Frequently Asked Questions</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <FAQItem
                        question="Is this Fake Tweet Generator free?"
                        answer="Yes, our tool is 100% free to use for generating fake tweets, Instagram mockups, and more."
                        headingColor={headingColor}
                        textColor={textColor}
                    />
                    <FAQItem
                        question="Can I use the images for commercial projects?"
                        answer="Absolutely! The images you generate are yours to use in client presentations, portfolios, or marketing materials."
                        headingColor={headingColor}
                        textColor={textColor}
                    />
                    <FAQItem
                        question="Do you support Verified Badges?"
                        answer="Yes, you can toggle the 'Verified Badge' option to add a blue checkmark to your profile on any platform."
                        headingColor={headingColor}
                        textColor={textColor}
                    />
                    <FAQItem
                        question="Does it work for TikTok?"
                        answer="Yes, we have a dedicated TikTok preview mode that simulates the vertical video interface."
                        headingColor={headingColor}
                        textColor={textColor}
                    />
                </div>
            </div>

        </div>
        </section >
    );
};

const FeatureCard = ({ icon, title, desc, cardBg, headingColor, textColor }) => (
    <div className={`p-6 rounded-xl ${cardBg} border border-transparent hover:border-blue-500/20 transition-all`}>
        <div className="mb-4">{icon}</div>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>{title}</h3>
        <p className={textColor}>{desc}</p>
    </div>
);

const FAQItem = ({ question, answer, headingColor, textColor }) => (
    <div className="space-y-2">
        <h4 className={`font-semibold text-lg ${headingColor}`}>{question}</h4>
        <p className={textColor}>{answer}</p>
    </div>
);

export default SEOContent;
