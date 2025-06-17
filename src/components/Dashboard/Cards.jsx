import React, { useEffect, useState } from "react";
import CardItems from "./CardItems";
import CardSkeleton from "./CardSkeleton";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch("http://localhost:5000/card");

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();

        if (!data || data.length === 0) {
          setCards([]);
        } else {
          const formatted = [
            { title: "Total Users", value: data[0]?.totalUsers ?? "N/A" },
            { title: "Active Users", value: data[0]?.activeUsers ?? "N/A" },
            { title: "New Signups Today", value: data[0]?.newSignups ?? "N/A" },
            {
              title: "Revenue",
              value: data[0]?.revenue ? `$${data[0].revenue}` : "N/A",
            },
          ];
          setCards(formatted);
        }
      } catch (err) {
        console.error("Failed to fetch cards:", err);
        setError(true);
        setCards([]);
      } finally {
        setLoading(false);
      }
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

  if (error || cards.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 font-semibold">
        Loading Data{" "}
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
