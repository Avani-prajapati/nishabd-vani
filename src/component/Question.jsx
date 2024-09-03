import React from 'react'

export default function Question() {
  return (
    <div className=' container w-screen py-4 flex bg-slate-100  font-mono flex-col gap-5 mt-4 '>
      <h1 className='text-start text-xl font-semibold'>Question And Answer</h1>
        <div className='flex items-center justify-between gap-3'>
          <div className='md:basis-1/2 p-3' >
            <h1 className=' font-bold'>
            1. What is Gujarati Sign Language (GSL)?
            </h1>
            <h1 className='font-bold'>
           and How is Gujarati Sign Language different from Indian Sign Language?
            </h1>
          </div>  
            <div className='md:basis-1/2 text-end hidden md:flex md:items-center md:justify-center '>
              <img src='/ImagesNV/conver.png' className=' md:h-60'></img>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='md:basis-1/2  hidden md:flex md:items-center md:justify-center'>
              <img src='/ImagesNV/conver2.png' className='md:h-60 '></img>
            </div>
          <div className='md:basis-1/2 p-3 transition' >
            <h5>
            Answer: Gujarati Sign Language (GSL) is a visual language used by the deaf and mute community in Gujarat, India. It consists of hand gestures, facial expressions, and body movements to convey words, sentences, and concepts. GSL is a regional variant of Indian Sign Language (ISL), adapted to the linguistic and cultural nuances of Gujarati speakers.   
            </h5>
            <h5>
            , While Gujarati Sign Language is a variant of Indian Sign Language (ISL), it incorporates specific signs and expressions that are unique to the Gujarati culture and language. GSL reflects the vocabulary, idioms, and cultural practices of Gujarat, making it distinct from the broader ISL used across India.  
            </h5>
          </div>  
        </div>
        <div className='flex items-center justify-between gap-3'>
          <div className='md:basis-1/2 p-3' >
            <h1 className=' font-bold'>
            3. Why is it important to learn Gujarati Sign Language?
            </h1>
            <h1 className='font-bold'>
            and What are the challenges faced by the Gujarati deaf community in learning sign language?
            </h1>
          </div>  
            <div className='md:basis-1/2 hidden md:flex md:items-center md:justify-center'>
              <img src='/ImagesNV/conver.png' className=' md:h-60'></img>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='md:basis-1/2 hidden md:flex md:items-center md:justify-center'>
              <img src='/ImagesNV/conver2.png' className='md:h-60 '></img>
            </div>
          <div className='md:basis-1/2 p-3' >
            <h5>
            Answer: Learning Gujarati Sign Language is crucial for effective communication within the deaf and mute community in Gujarat. It helps bridge the communication gap, fosters inclusion, and enables deaf and mute individuals to express themselves fully in their native language. It also strengthens community bonds and preserves the cultural heritage of Gujarat.
            </h5>
            <h5>
            Answer: The Gujarati deaf community faces several challenges, including limited access to formal sign language education, a shortage of qualified sign language interpreters, and societal stigmas. Additionally, many deaf individuals in Gujarat may have limited exposure to GSL in their early years, making it harder for them to acquire the language later in life. The platform aims to address these challenges by providing accessible and high-quality GSL resources.
            </h5>
          </div>  
        </div>
       <a href='#'>Read more...</a>
    </div>
  )
}
