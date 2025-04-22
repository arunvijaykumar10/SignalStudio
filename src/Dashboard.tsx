import { useState } from "react";
import {
  Bell,
  Search,
  User,
  ChevronDown,
  Settings,
  Brain,
  Send,
  BarChart,
  Home,
} from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("Overview");
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-indigo-700">Signal Studio</h1>
        </div>

        <nav className="p-2">
          <ul>
            {[
              "Home",
              "Overview",
              "Create Zone",
              "Memory Zone",
              "Publish Zone",
              "Analytics",
              "Admin Tools",
            ].map((item) => (
              <li key={item} className="mb-1">
                <button
                  className={`flex items-center w-full p-2 rounded text-left ${
                    activeSidebarItem === item
                      ? "bg-indigo-100 text-indigo-700"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setActiveSidebarItem(item);
                    if (item === "Home") navigate("/dashboard");
                    if (item === "Overview") navigate("/dashboard/overview");
                  }}
                >
                  {item === "Home" && <Home size={18} className="mr-2" />}
                  {item === "Overview" && (
                    <BarChart size={18} className="mr-2" />
                  )}
                  {item === "Create Zone" && (
                    <Send size={18} className="mr-2" />
                  )}
                  {item === "Memory Zone" && (
                    <Brain size={18} className="mr-2" />
                  )}
                  {item === "Publish Zone" && (
                    <Send size={18} className="mr-2" />
                  )}
                  {item === "Analytics" && (
                    <BarChart size={18} className="mr-2" />
                  )}
                  {item === "Admin Tools" && (
                    <Settings size={18} className="mr-2" />
                  )}
                  {item}
                </button>

                {item !== "Overview" && activeSidebarItem === item && (
                  <ul className="ml-6 mt-1">
                    {item === "Create Zone" &&
                      [
                        {
                          title: "Launcher",
                          path: "/createzone/launcher",
                        },
                        {
                          title: "Editor",
                          path: "/createzone/editor",
                        },
                        {
                          title: "Visual Studio",
                          path: "/createzone/visualstudio",
                        },
                        {
                          title: "Validator",
                          path: "/createzone/validator",
                        },
                        { title: "Assistant", path: "/createzone/assistant" },
                      ].map((subItem) => (
                        <li key={subItem.title} className="mb-1">
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() =>
                              navigate(`/dashboard${subItem.path}`)
                            }
                          >
                            {subItem.title}
                          </button>
                        </li>
                      ))}

                    {item === "Memory Zone" &&
                      [
                        {
                          title: "Semantic Engine",
                          path: "/memoryzone/semanticengine",
                        },
                        {
                          title: "Governance",
                          path: "/memoryzone/governance",
                        },
                        {
                          title: "Prompts",
                          path: "/memoryzone/prompts",
                        },
                        {
                          title: "Snippets",
                          path: "/memoryzone/snippets",
                        },
                        { title: "Drift", path: "/memoryzone/drift" },
                      ].map((subItem) => (
                        <li key={subItem.title} className="mb-1">
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() =>
                              navigate(`/dashboard${subItem.path}`)
                            }
                          >
                            {subItem.title}
                          </button>
                        </li>
                      ))}

                    {item === "Publish Zone" &&
                      [
                        {
                          title: "Export Hub",
                          path: "/publishzone/export",
                        },
                        {
                          title: "Integration",
                          path: "/publishzone/integration",
                        },
                        {
                          title: "CLI/SDK",
                          path: "/publishzone/cli",
                        },
                        {
                          title: "Protocol Viewer",
                          path: "/publishzone/protocol",
                        },
                      ].map((subItem) => (
                        <li key={subItem.title} className="mb-1">
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() =>
                              navigate(`/dashboard${subItem.path}`)
                            }
                          >
                            {subItem.title}
                          </button>
                        </li>
                      ))}

                    {item === "Analytics" &&
                      ["Usage Dashboard", "Audit Trail"].map((subItem) => (
                        <li key={subItem} className="mb-1">
                          <button className="text-sm p-1 hover:text-indigo-700 w-full text-left">
                            {subItem}
                          </button>
                        </li>
                      ))}

                    {item === "Admin Tools" &&
                      [
                        {
                          title: "Memory Management",
                          path: "/admintools/memorymanageement",
                        },
                        {
                          title: "Team Management",
                          path: "/admintools/team",
                        },
                        {
                          title: "AI Config",
                          path: "/admintools/aiconfig",
                        },
                        {
                          title: "Access Control",
                          path: "/admintools/access",
                        },
                      ].map((subItem) => (
                        <li key={subItem.title} className="mb-1">
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() =>
                              navigate(`/dashboard${subItem.path}`)
                            }
                          >
                            {subItem.title}
                          </button>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 flex items-center justify-between shadow-sm">
          <div className="relative w-64">
            <Search
              size={18}
              className="absolute left-2 top-2.5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search snippets, prompts, campaigns..."
              className="pl-9 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>

            <div className="flex items-center cursor-pointer">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <User size={16} />
              </div>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
