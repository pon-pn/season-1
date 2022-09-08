import { Button } from "components/Button";
import { Navbar } from "components/Navbar";
import { WordInput } from "components/WordInput";

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
          <WordInput />
          <Button />
        </div>
      </div>
    </>
  );
};

export default Play;
