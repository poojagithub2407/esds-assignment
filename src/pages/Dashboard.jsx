import React, { useState, useEffect } from 'react';
import AddUserForm from "../components/Dashboard/AddUserForm";
import Analytics from "../components/Dashboard/Analytics";
import Cards from "../components/Dashboard/Cards";
import Users from "../components/Dashboard/Users";

const Dashboard = () => {
     const [users, setUsers] = useState([]);
     const [loadingUsers, setLoadingUsers] = useState(true);
     const [searchQuery, setSearchQuery] = useState("");

     useEffect(() => {
          const fetchUsers = async () => {
               await new Promise((res) => setTimeout(res, 2000)); 
               const res = await fetch("http://localhost:5000/users");
               const data = await res.json();
               setUsers(data);
               setLoadingUsers(false);
          };

          fetchUsers();
     }, []);

      const filteredUsers = users.filter(user =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.role.toLowerCase().includes(searchQuery.toLowerCase())
     );
     

     return (
          <div className="p-4 space-y-4">
               <Cards />
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-2">
                         <Analytics />
                         <Users users={filteredUsers} loading={loadingUsers} />
                    </div>
                    <div className="lg:col-span-1 h-[20vh] ">
                         <AddUserForm setUsers={setUsers} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;