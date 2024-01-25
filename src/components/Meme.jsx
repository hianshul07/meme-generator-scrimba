import { useState } from 'react';
import memesData from '../memesData';

const Meme = () => {

  const [memeImage, setMemeImage] = useState('')

  const getMemeData = () => {
    const memesArray = memesData.data.memes;
    const randomData = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomData].url
    // console.log(url);
    setMemeImage(url)
  };

  return (
    <div className='flex items-center'>
      <div className='flex flex-col px-96 py-16 gap-8 items-center'>
        <div className='flex justify-between gap-12'>
          <input
            type='text'
            className='border-solid border-gray-400 rounded-md flex-1 text-xl border-2 px-4 py-4'
            placeholder='upper text'
          />
          <input
            type='text'
            className='border-solid border-gray-400 rounded-md flex-1 text-xl border-2 px-4 py-4'
            placeholder='upper text'
          />
        </div>
        <button
          onClick={getMemeData}
          className='bg-[#6b2385] w-full text-white rounded-md font-semibold bold text-2xl px-4 py-4'
        >
          Get a new meme image 🖼️
        </button>
        <img className='h-fit w-fit' src={memeImage} alt="" />
      </div>
    </div>
  );
};
export default Meme;
