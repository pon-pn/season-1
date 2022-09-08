import { Navbar } from "components/Navbar";

const Play = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <div className='mt-20'>
          <p className='text-center text-xl'>現在の最後の単語は...</p>
          {/* TODO: ここはコントラクトから最後の単語を取ってきて入れる */}
          <p className='font-nico text-[128px]'>りんご</p>
        </div>
        <img src='public/images/arrow.png' alt='arrow' />
        <div>
          {/* TODO: 「」の中は動的に変える */}
          <input placeholder='「ご」につづく単語を入れよう'></input>
        </div>
      </div>
    </>
  );
};

export default Play;
