export const Navbar = () => {
  return (
    <div>
      <nav className="px-2 py-8 sm:px-4">
        <div className="container justify-between items-center px-2 mx-auto flex flex-wrap">
          <a className="flex items-center" href="">
            <img 
              src="public/images/creatorsstudio.jpeg"
              alt="Creators Studio Logo"
              className="mr-3 sm:h-11 object-contain h-full rounded-lg"
            />
            <span className="self-center text-xl whitespace-nowrap text-white" >Creators Studio</span>
          </a>
          <div className="px-4">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li>
                <a className="px-10 py-2 flex items-center text-white hover:opacity-75">説明</a>
              </li>
              <li>
                <a className="px-10 py-2 flex items-center text-white hover:opacity-75">参加する</a>
              </li>
            </ul>
          </div>
          <button className="bg-transparent text-white py-2 px-4 border border-pink-400 rounded-full" >ウォレット接続</button>
        </div>
      </nav>
    </div>
  );
};
