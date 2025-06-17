import React, { useEffect, useState } from 'react';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();
  const greeting =
    hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';

  return (
    <header className="py-6 px-4 flex flex-row flex-wrap justify-between items-center gap-4">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">{greeting} 👋</h1>

      <div className="flex items-center gap-10 text-base sm:text-lg md:text-xl">
        <span className="font-mono">{time.toLocaleTimeString([], { hour12: false })}</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
