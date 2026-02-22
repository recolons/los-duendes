import React from 'react'

const TourInfo = () => {
  return (
    <div>
        <div className='text-gray-900'>
            <div className="w-screen mx-auto h-40 bg-green-900 flex items-center justify-center">
                <h1 className='sm:text-5xl text-3xl text-center font-medieval text-white'>Important Information</h1>
            </div>
        </div>
        <div className='relative text-gray-900 bg-[url(src/assets/photos/0A9DCBD4-947C-4389-9AB6-7921CBF03C8F.jpeg)] bg-cover 
      bg-center'>
        <div className='absolute inset-0 bg-white/80'></div>
        <div className='relative max-w-[800px] w-full mx-auto text-center flex flex-col items-center justify-center py-16'>
            <div>
                {/* maybe change py-4 to py-2 or remove*/}
                <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 text-green-800 italic'>
                    Customers will receive a full refund or credit with 24 hours notice of cancellation. Customers will also 
                    receive a full refund or credit in case of operator cancellation due to weather or other unforeseen 
                    circumstances. Contact us by phone to cancel or inquire about a cancellation. No-shows will be 
                    charged the full price.
                </p>
            </div>
            <p className='md:text-2xl text-xl text-gray-800 my-2 font-bold'>
                Please arrive 15 minutes before the tour start time.
            </p>
            <p className='md:text-2xl text-xl text-gray-700 my-6 w-full text-left font-bold italic'>
              Directions:
            </p>
            <p className='md:text-2xl text-xl text-gray-800 my-2'>
                We depart from From Base Camp at 18.242603, -65.789297 Naguabo, Puerto Rico
            </p>
            <ul className='list-disc list-inside md:text-2xl text-xl text-gray-800 my-2 text-left'>
              <li>
              You will see a dirt road to your left take it driving up till you pass the first house with a RV and a pool then it’s the next right
              </li>
            </ul>
            <p className='md:text-2xl text-xl text-gray-700 my-6 w-full text-left font-bold italic'>
              What to bring:
            </p>
            <ul className='list-disc list-inside md:text-2xl text-xl text-gray-800 my-2 text-left'>
              <li>
              Suitable shoes for walking Flip flops NOT allowed in tour for your safety 
              </li>
              <li>
                Water Bottle
              </li>
              <li>Sunscreen (we also sell at base camp if you forgot)</li>
              <li>Change of clothing for after tour</li>
              <li>Change of shoes or flip flops</li>
              <li>Dress accordingly, NO jeans keep in mind this is a tour that you’ll be jumping, swimming, squatting, waking and climbing. Feel free to check website or call or text us for any questions or concerns</li>
            </ul>
            <p className='md:text-2xl text-xl text-gray-700 my-6 w-full text-left font-bold italic'>
              We will provide:
            </p>
            <ul className='list-disc list-inside md:text-2xl text-xl text-gray-800 my-2 text-left w-full'>
              <li>Local and professional guide
              </li>
              <li>All safety Equipment (Helmet, life vest and gloves)</li>
              <li>Instructional Review from one of our Guides</li>
              <li>Repelling equipment</li>
              <li>Via Ferrata equipment</li>
              <li>Entrance/admission to El Yunque National Rain Forest</li>
            </ul>
            <p className='md:text-2xl text-xl text-gray-700 my-6 w-full text-left font-bold italic'>
            What is NOT included:
            </p>
            <ul className='list-disc list-inside md:text-2xl text-xl text-gray-800 my-2 text-left w-full'>
              <li>Transportation is  NOT included 
                (call +1 (787) 420-4243 and we can help assist you with 24 hour notice before tour)
              </li>
              <li>Food, Snacks, lunch or water is  NOT included</li>
            </ul>
        </div>
        
    </div>
    </div>
  )
}

export default TourInfo