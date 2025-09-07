import { div } from 'framer-motion/client';
import { useState } from 'react';

const TermsPolicy = () => {
  const [activeNav, setActiveNav] = useState('general');
  const [activeSidebar, setActiveSidebar] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <span className="font-bold text-xl">Bridge Food</span>
            </div>
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveNav('general')}
                className={`px-4 py-2 rounded-md ${activeNav === 'general' ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
              >
                General
              </button>
              <button
                onClick={() => setActiveNav('offers')}
                className={`px-4 py-2 rounded-md ${activeNav === 'offers' ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
              >
               Offers
              </button>
              <button
                onClick={() => setActiveNav('grocery')}
                className={`px-4 py-2 rounded-md ${activeNav === 'grocery' ? 'bg-blue-700' : 'hover:bg-blue-500'}`}
              > Grocery
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex">
        {/* Sidebar - only shown when General is active */}
        {activeNav === 'general' && (
          <div className="w-64 pr-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-lg mb-4 text-gray-700">General</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveSidebar('guidelines')}
                    className={`w-full text-left px-3 py-2 rounded ${activeSidebar === 'guidelines' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                  >
                    Guidelines and Policies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSidebar('offers')}
                    className={`w-full text-left px-3 py-2 rounded ${activeSidebar === 'offers' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                  >
                    Offers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSidebar('Grocery')}
                    className={`w-full text-left px-3 py-2 rounded ${activeSidebar === 'grocery' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                  >
                        Grocery
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          {activeNav === 'general' && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">General Information</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum, reprehenderit facilis quia fugit ullam, totam voluptas nihil tempora impedit libero perferendis sequi inventore ipsa quae in deleniti vel maxime.</p>
              {activeSidebar === 'guidelines' && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Guidelines and Policies</h3>
                  <p className="text-gray-700">At Fresh Basket, we love being part of your everyday shopping stories. Whether it’s a bouquet for the fresh produce that exceeded your expectations, a brickbat for a delivery that didn’t go as planned, or a chronicle of your in-store or online grocery experience – it all matters to us. We encourage you to share your feedback, as it helps other customers make informed shopping and ordering decisions. Your reviews also contribute to each store’s overall rating, which we calculate using a proprietary weighted average that factors in recent customer experiences, among other considerations. Your input plays a vital role in helping stores improve and continue delivering great service.  </p>

                   <p className="text-gray-700">While we welcome honest opinions and detailed descriptions of your experiences, we expect all customers to follow our Content Guidelines outlined in the Shopper Code of Conduct. Your reviews, photos, profile, and comments are publicly visible and must align with these guidelines.</p>

                    <p className="text-gray-700"> 
                        If any activity on Fresh Basket does not meet these guidelines, we reserve the right to take necessary action – including editing or removing reviews and comments, restricting your posting privileges, or even deleting your account, with or without notice. Our platform also uses smart detection systems to help filter out suspicious or fake reviews.

                    </p>
                        <p className="text-gray-700">
                            If you come across content that does not align with our guidelines or Terms of Service, please contact us at support@freshbasket.com. We will review all reports, though due to the diversity of our community, some content you may find disagreeable might still meet our standards and remain visible.

                 </p>   
                    <hr className='text-gray-200'/>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Shopper Code of Conduct</h2>
                    <h3 className="text-xl font-semibold mb-3">Keep out the clutter · Keep it relevant · Keep it clean</h3>     
                    <p className="text-gray-700">There’s no easier way to show how fresh and juicy those mangoes were than with a picture, right? That said, it’s important to follow our photo guidelines and understand why some photos may be moved or removed after you upload them.</p>

                    <p className="text-gray-700">Clear, well-lit shots of fresh produce, grocery items, or store displays that make others want to shop right away will be featured in a store’s photo gallery. Ambience photos showing the store’s layout, cleanliness, or in-store experience may also be highlighted on store pages.</p>

                    <p className="text-gray-700">Photos that don’t qualify for a store’s gallery may still appear with your review or profile if they’re useful and relevant. Photos that show damaged or spoiled goods will only be shown alongside a review for validation and context.</p>

                    <p className="text-gray-700"> Violating the below guidelines may result in reduced visibility, removal of your pictures, or restrictions on your account.</p>

                    <hr className='text-gray-200'/>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Photo Guidelines </h2>
                    <h3 className="text-2xl font font-light"> We may remove or restrict:</h3>
                     <li className='text-gray-700'>Exact duplicate photos, multiple clicks of the same product or display from different angles</li>
                     <li className='text-gray-700'>Plagiarized or copied photos from other sources</li>
                     <li className='text-gray-700'>Photos of others posted without permission</li>
                     <li className='text-gray-700'>Photos containing promotional or advertising material</li>
                     <li className='text-gray-700'>Blurry, unclear, or low-quality images</li>
                     <li className='text-gray-700'>Images focusing on subjects unrelated to groceries or store ambiance</li>
                     <li className='text-gray-700'>Images with text overlays, unrelated content, or not connected to the shopping/delivery experience</li>
                     <li className='text-gray-700'>Photos containing watermarks, captions, or edits of any kind</li>

                     <hr className='text-gray-200'/>
                     <h3 className="text-2xl font-bold text-gray-800 mb-4">Keep Out the Clutter</h3>
                     <p className='text-gray-700'>Reviews should be clear, readable, and meaningful. Excessive random symbols, emojis, or irrelevant text may lead to removal.</p>
                     <hr className='text-gray-200' />
                     <h3  className="text-2xl font-bold text-gray-800 mb-4"> Keep It Relevant</h3>
                     <p>Only share experiences related to your grocery shopping or delivery via Fresh Basket. Irrelevant, promotional, or spam-like content may be removed without notice.</p>
                    <hr className='text-gray-200'/>
                     <h3 className="text-2xl font-bold text-gray-800 mb-4"> Keep It Clean</h3>
                     <p>Avoid foul, abusive, hateful, or threatening language. This includes derogatory remarks targeting protected characteristics (e.g., race, religion, gender) or personal attacks on stores and staff.</p>
                       <hr className='text-gray-200'/>
                     <h3 className="text-2xl font-bold text-gray-800 mb-4">Keep It Fresh</h3>
                     <p>Write about your most recent experience. Reviews older than six months may be removed unless still relevant. Only one review per shopping or delivery experience is allowed.</p>
                       <hr className='text-gray-200'/>
                     <h3  className="text-2xl font-bold text-gray-800 mb-4">Keep It Real</h3>
                     <p>Base your review on your personal experience — not hearsay. False, exaggerated, or misleading reviews will be removed. Fake activity, such as posting multiple store reviews in a short time without proof of orders, may be flagged.</p>
                       <hr className='text-gray-200'/>
                     <h3  className="text-2xl font-bold text-gray-800 mb-4">Be Yourself</h3>
                     <p>Use an authentic profile name and image. Spam, bot-driven, or fake accounts will be removed.</p>
                </div>  
              )}
            </> 
          )}
          {activeNav === 'offers' && (
            <>
              {activeSidebar === 'Offers' &&(
                <div>

                </div>
              )}
            </>
           )}
             {activeNav === 'grocery' && (
             <>
              <h1 className='text-2xl font-bold text-gray-800 mb-4'>Grocery Information </h1>
              {activeSidebar === 'guidelines' && (
                <div>

                </div>
              )}
            </> 
                        )}

                </div>
           </div>
    </div>

  );
};

export default  TermsPolicy;