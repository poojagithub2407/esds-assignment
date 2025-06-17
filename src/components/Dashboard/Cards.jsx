import React, { useEffect, useState } from 'react';
import CardItems from './CardItems';
import CardSkeleton from './CardSkeleton';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);

      const res = await fetch('http://localhost:5000/card');
      const data = await res.json();

      const formatted = [
        { title: 'Total Users', value: data[0]?.totalUsers },
        { title: 'Active Users', value: data[0]?.activeUsers },
        { title: 'New Signups Today', value: data[0]?.newSignups },
        { title: 'Revenue', value: `$${data[0]?.revenue}` }
      ];

      setCards(formatted);
      setLoading(false);
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {[...Array(4)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <CardItems key={index} title={card.title} value={card.value} />
      ))}
    </div>
  );
};

export default Cards;
