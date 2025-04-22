import {
  BarChart,
  Bell,
  Brain,
  ChevronDown,
  Search,
  Send,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import Assistant from "./CreateZone/Assistant";
import Editor from "./CreateZone/Editor";
import Launcher from "./CreateZone/Launcher";
import Validator from "./CreateZone/Validator";
import VisualStudio from "./CreateZone/VisualStudio";
import OverView from "./Overview/OverView";
import SemanticMemoryEngine from "./memory-zone/SemanticMemoryEngine";
import GovernanceCenter from "./memory-zone/GovernanceCenterSimple";
import PromptLibrary from "./memory-zone/PromptLibraryFixed";
import SnippetManager from "./memory-zone/SnippetManager";
import DriftInsightDashboard from "./memory-zone/DriftInsightDashboard";
import SignalExportHub from "./public-zone/ExportHub";
import IntegrationLayer from "./public-zone/Integration";
import CLISDKPanel from "./public-zone/SDK";
import SignalObjectProtocolViewer from "./public-zone/ProtocolViewer";

const Dashboard = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("Overview");
  const [createZone, setCreateZone] = useState<string | null>(null);
  const [memoryZone, setMemoryZone] = useState<string | null>(null);
  const [publicZone, setPublicZone] = useState<string | null>(null);
  const [analytics, setAnalytics] = useState<string | null>(null);
  const [adminTools, setAdminTools] = useState<string | null>(null);

  const activeSidebar = (item: string) => {
    setActiveSidebarItem(item);
    if (item !== "Create Zone") setCreateZone(null);

    if (item !== "Memory Zone") setMemoryZone(null);

    if (item !== "Public Zone") setPublicZone(null);

    if (item !== "Analytics") setAnalytics(null);

    if (item !== "Admin Tools") setAdminTools(null);
  };

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
                  onClick={() => activeSidebar(item)}
                >
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
                        "Launcher",
                        "Editor",
                        "Validator",
                        "Visual Studio",
                        "Assistant",
                      ].map((subItem) => (
                        <li key={subItem} className="mb-1">
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() => setCreateZone(subItem)}
                          >
                            {subItem}
                          </button>
                        </li>
                      ))}

                    {item === "Memory Zone" &&
                      [
                        "Semantic Engine",
                        "Governance",
                        "Prompts",
                        "Snippets",
                        "Drift",
                      ].map((subItem) => (
                        <li key={subItem} className="mb-1">
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() => setMemoryZone(subItem)}
                          >
                            {subItem}
                          </button>
                        </li>
                      ))}

                    {item === "Publish Zone" &&
                      [
                        "Export Hub",
                        "Integration",
                        "CLI/SDK",
                        "Protocol Viewer",
                      ].map((subItem) => (
                        <li key={subItem} className="mb-1">
                          {adminTools === "Drift" && <DriftInsightDashboard />}
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() => setPublicZone(subItem)}
                          >
                            {subItem}
                          </button>
                        </li>
                      ))}

                    {item === "Analytics" &&
                      ["Usage Dashboard", "Audit Trail"].map((subItem) => (
                        <li key={subItem} className="mb-1">
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() => setAnalytics(subItem)}
                          >
                            {subItem}
                          </button>
                        </li>
                      ))}

                    {item === "Admin Tools" &&
                      [
                        "System Settings",
                        "Team",
                        "AI Config",
                        "Access Control",
                      ].map((subItem) => (
                        <li key={subItem} className="mb-1">
                          <button
                            className="text-sm p-1 hover:text-indigo-700 w-full text-left"
                            onClick={() => setAdminTools(subItem)}
                          >
                            {subItem}
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
      <div className="flex-1 overflow-auto">
        <div>
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
        </div>
        {/* CreateZone */}
        {createZone === null &&
          memoryZone === null &&
          publicZone === null &&
          analytics === null &&
          adminTools === null && <OverView />}
        {createZone === "Launcher" && <Launcher />}
        {createZone === "Editor" && <Editor />}
        {createZone === "Visual Studio" && <VisualStudio />}
        {createZone === "Validator" && <Validator />}
        {createZone === "Assistant" && <Assistant />}
        {/* MemoryZone */}
        {memoryZone === "Semantic Engine" && <SemanticMemoryEngine />}
        {memoryZone === "Governance" && <GovernanceCenter />}
        {memoryZone === "Prompts" && <PromptLibrary />}
        {memoryZone === "Snippets" && <SnippetManager />}
        {memoryZone === "Drift" && <DriftInsightDashboard />}
        {/* PublicZone */}
        {publicZone === "Export Hub" && <SignalExportHub />}
        {publicZone === "Integration" && <IntegrationLayer />}
        {publicZone === "CLI/SDK" && <CLISDKPanel />}
        {publicZone === "Protocol Viewer" && <SignalObjectProtocolViewer />}
        {/* Analytics*/}
        {analytics === "Usage Dashboard" && <SemanticMemoryEngine />}
        {analytics === "Audit Trail" && <GovernanceCenter />}
        {/* Admin Tools*/}
        {adminTools === "System Settings" && <SemanticMemoryEngine />}
        {adminTools === "Team" && <GovernanceCenter />}
        {adminTools === "AI Config" && <PromptLibrary />}
        {adminTools === "Access Control" && <SnippetManager />}
      </div>
    </div>
  );
};

export default Dashboard;
