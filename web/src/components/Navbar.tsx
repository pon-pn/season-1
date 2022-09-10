export const Navbar = () => {
  return (
    <div>
      <nav className="px-2 py-2.5 sm:px-4">
        <div className="container justify-between items-center px-2 mx-auto flex flex-nowrap">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
              Creators Studio
            </a>
          </div>
          <div className="">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">説明</a>
              </li>
              <li>
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">参加する</a>
              </li>
            </ul>
          </div>
          <div className="">
            <button>ウォレット接続</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
