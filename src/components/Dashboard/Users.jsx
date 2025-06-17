import React from "react";

const Users = ({ users, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-4 text-gray-800 dark:text-white">
        Loading users...
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        User List
      </h2>

      {/* Scrollable container for responsiveness */}
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full text-sm text-left border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                ID
              </th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                Email
              </th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-600">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                  {user.id}
                </td>
                <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                  {user.name}
                </td>
                <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                  {user.email}
                </td>
                <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
