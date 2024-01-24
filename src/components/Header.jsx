import trollFace from '../images/troll-face.png';

const Header = () => {
  return (
    <header className='w-screen flex bg-[#6b2385] py-4 px-12 items-center'>
      <img className='block h-16' src={trollFace} alt="Troll Face Image" />
      <h1 className='pl-6 font-semibold text-4xl text-white'>Meme Generator</h1>
    </header>
  )
}
export default Header