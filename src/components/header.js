function Header() {
  return (
    <header className="bg-black w-full p-4 flex justify-center">
      <nav className="flex justify-between items-center w-full">
        <div className="text-white font-bold text-xl">U.GG Clone</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">Tier List</a></li>
          <li><a href="#" className="text-white">Champions</a></li>
          <li><a href="#" className="text-white">Multisearch</a></li>
          <li><a href="#" className="text-white">Live Games</a></li>
          <li><a href="#" className="text-white">Leaderboards</a></li>
          <li><a href="#" className="text-white">Items</a></li>
          <li><a href="#" className="text-white">Probuild Stats</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
