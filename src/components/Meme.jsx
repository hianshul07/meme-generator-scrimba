const Meme = () => {
  return (
    <div className="flex justify-center">
      <form className='w-5/6 flex flex-col px-96 py-16 gap-8'>
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
        <button className='bg-[#6b2385] text-white rounded-md font-semibold bold text-2xl px-4 py-4'>
          Get a new meme image 🖼️
        </button>
      </form>
    </div>
  );
};
export default Meme;
