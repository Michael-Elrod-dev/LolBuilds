function Header() {
    return (
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
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
        </div>
      </header>
    );
  }
  
export default Header;
