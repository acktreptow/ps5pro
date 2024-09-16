function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-playstation text-white uppercase flex items-center justify-between text-2xl p-10">
      <div>
        <h1>PS5 Pro</h1>
      </div>
      <div>
        <ul className="flex space-x-10">
          <li>About</li>
          <li>Games List</li>
          <li>Hardware Comparison</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
