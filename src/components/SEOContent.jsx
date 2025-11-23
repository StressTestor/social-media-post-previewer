import React from 'react';
answer = "Yes, we have a dedicated TikTok preview mode that simulates the vertical video interface."
headingColor = { headingColor }
textColor = { textColor }
    />
                </div >
            </div >

        </div >
        </section >
    );
};

const FeatureCard = ({ icon, title, desc, cardBg, headingColor, textColor }) => (
    <div className={`p-6 rounded-xl ${cardBg} border border-transparent hover:border-blue-500/20 transition-all`}>
        import React from 'react';
        answer = "Yes, we have a dedicated TikTok preview mode that simulates the vertical video interface."
        headingColor = {headingColor}
        textColor = {textColor}
    />
    </div >
            </div >

        </div >
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
        {/* FAQ Section */}
        <div className="space-y-6">
            <h2 className={`text-2xl font-bold ${headingColor}`}>Frequently Asked Questions - Social Media Mockup Generator</h2>
        </div>
        <h4 className={`font-semibold text-lg ${headingColor}`}>{question}</h4>
        <p className={textColor}>{answer}</p>
    </div>
);

export default SEOContent;
