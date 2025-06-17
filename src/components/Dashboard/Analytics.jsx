import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const Analytics = () => {
  const [filter, setFilter] = useState('Weekly');
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users?limit=100');
        const data = await res.json();
        const grouped = groupData(data.users, filter);
        setAnalyticsData(grouped);
      } catch (error) {
        console.error('Failed to fetch analytics data:', error);
      }
    };

    fetchAnalyticsData();
  }, [filter]);

  const groupData = (users, period) => {
    if (!users) return [];

    if (period === 'Weekly') {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const grouped = days.map((day) => ({
        name: day,
        signups: 0,
        revenue: 0,
      }));

      users.forEach((_, index) => {
        const day = index % 7;
        grouped[day].signups += 1;
        grouped[day].revenue += 100 + (index % 5) * 50;
      });

      return grouped;
    }

    if (period === 'Monthly') {
      const grouped = Array.from({ length: 4 }, (_, i) => ({
        name: `Week ${i + 1}`,
        signups: 0,
        revenue: 0,
      }));

      users.forEach((_, index) => {
        const week = index % 4;
        grouped[week].signups += 1;
        grouped[week].revenue += 120 + (index % 4) * 70;
      });

      return grouped;
    }

    if (period === 'Yearly') {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
      const grouped = months.map((month) => ({
        name: month,
        signups: 0,
        revenue: 0,
      }));

      users.forEach((_, index) => {
        const month = index % 8;
        grouped[month].signups += 1;
        grouped[month].revenue += 150 + (index % 6) * 80;
      });

      return grouped;
    }

    return [];
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow w-full">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Analytics Overview
        </h2>
        <div className="flex gap-2 flex-wrap">
          {['Weekly', 'Monthly', 'Yearly'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 text-sm rounded-lg transition-all ${
                filter === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-black dark:bg-gray-700 dark:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Line Chart */}
      <div className="w-full h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={analyticsData}>
            {/* No CartesianGrid for clean background */}
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="signups"
              stroke="#6366f1"
              name="Signups"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              name="Revenue ($)"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
