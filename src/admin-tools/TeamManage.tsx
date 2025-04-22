import React, { useState } from "react";
import {
  PlusCircle,
  Search,
  MoreHorizontal,
  ChevronDown,
  Filter,
  Download,
  Save,
  User,
  UserCheck,
  UserX,
  Slash,
  RefreshCw,
  X,
  Mail,
  AlertTriangle,
} from "lucide-react";

const TeamManagement = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState("Copywriter");
  const [newUserMessage, setNewUserMessage] = useState("");
  const [bulkEmails, setBulkEmails] = useState("");
  const [activeTab, setActiveTab] = useState("active"); // 'active', 'pending', 'deactivated'

  // Sample data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@company.com",
      role: "Copywriter",
      lastActive: "2h ago",
      status: "Active",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.c@company.com",
      role: "QA",
      lastActive: "Yesterday",
      status: "Active",
    },
    {
      id: 3,
      name: "Jessica Williams",
      email: "jessica.w@company.com",
      role: "Designer",
      lastActive: "3d ago",
      status: "Active",
    },
    {
      id: 4,
      name: "Robert Garcia",
      email: "robert.g@company.com",
      role: "Strategist",
      lastActive: "5m ago",
      status: "Active",
    },
    {
      id: 5,
      name: "Amanda Lee",
      email: "amanda.l@company.com",
      role: "Admin",
      lastActive: "Just now",
      status: "Active",
    },
    {
      id: 6,
      name: "Daniel Kim",
      email: "daniel.k@company.com",
      role: "Legal/QA",
      lastActive: "1w ago",
      status: "Inactive",
    },
    {
      id: 7,
      name: "Emily Brown",
      email: "emily.b@company.com",
      role: "Copywriter",
      lastActive: "Never",
      status: "Pending Invite",
    },
  ]);

  const roles = [
    "Copywriter",
    "QA",
    "Designer",
    "Strategist",
    "Admin",
    "Legal/QA",
    "Executive",
    "Viewer",
  ];

  const statuses = ["Active", "Pending Invite", "Deactivated"];

  // State for filter values
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered users based on filters
  const filteredUsers = users.filter((user) => {
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesStatus && matchesSearch;
  });

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Team Management
          </h1>
          <button
            onClick={() => setShowAddUserModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"
          >
            <PlusCircle size={16} />
            <span>Add User</span>
          </button>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search by name or email"
              className="border border-gray-300 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                <option value="All">All Roles</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>

            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>

            <button className="text-gray-500 border border-gray-300 rounded-md p-2">
              <Filter size={16} />
            </button>

            <button className="text-gray-500 border border-gray-300 rounded-md p-2">
              <Download size={16} />
            </button>

            <button className="text-gray-500 border border-gray-300 rounded-md p-2">
              <Save size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Team Member Table */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Active
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative">
                      <select
                        className="appearance-none bg-white border border-gray-300 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={user.role}
                        onChange={(e) => {
                          const updatedUsers = users.map((u) =>
                            u.id === user.id
                              ? { ...u, role: e.target.value }
                              : u
                          );
                          setUsers(updatedUsers);
                        }}
                      >
                        {roles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-2 top-2 text-gray-400"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : user.status === "Pending Invite"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative inline-block text-left">
                      <button className="text-gray-400 hover:text-gray-500 focus:outline-none">
                        <MoreHorizontal size={16} />
                      </button>
                      {/* Dropdown menu would appear here */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabs for Active/Pending/Deactivated Users */}
      <div className="px-6 mt-4">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("active")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "active"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Active Users
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "pending"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Pending Invites
              <span className="ml-2 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
                2
              </span>
            </button>
            <button
              onClick={() => setActiveTab("deactivated")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "deactivated"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Deactivated Users
            </button>
          </nav>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium text-gray-900">
                Add New User
              </h3>
              <button
                onClick={() => setShowAddUserModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex space-x-2 mb-4">
                <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium">
                  Individual
                </button>
                <button className="text-gray-500 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-100">
                  Bulk Add
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-3 text-gray-400"
                    size={16}
                  />
                  <input
                    type="email"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    placeholder="user@company.com"
                    className="border border-gray-300 rounded-md py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <div className="relative">
                  <select
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-3 text-gray-400"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Welcome Message (Optional)
                </label>
                <textarea
                  value={newUserMessage}
                  onChange={(e) => setNewUserMessage(e.target.value)}
                  placeholder="Hey there! Welcome to Signal Studio..."
                  className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                />
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-6">
                <AlertTriangle size={16} className="mr-2 text-yellow-500" />
                <span>You've used 9 of 10 available licenses</span>
              </div>

              <div className="flex items-center bg-blue-50 p-3 rounded-md mb-6">
                <div className="mr-3 bg-white rounded-md p-1">
                  <Mail size={24} className="text-blue-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-800">
                    Preview Invitation
                  </div>
                  <div className="text-xs text-blue-600">
                    You're inviting{" "}
                    <span className="font-semibold">
                      {newUserEmail || "user@company.com"}
                    </span>{" "}
                    as a <span className="font-semibold">{newUserRole}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowAddUserModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700">
                Send Invite
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Activity Summary (Optional) */}
      <div className="p-6 pt-0">
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-blue-500">
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Team Activity Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">
                Active Users (30 days)
              </div>
              <div className="text-xl font-semibold">6 / 7</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">Drafts Created</div>
              <div className="text-xl font-semibold">142</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">Pending Approvals</div>
              <div className="text-xl font-semibold">7</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="text-sm text-gray-500">Recent Joiners</div>
              <div className="text-xl font-semibold">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
