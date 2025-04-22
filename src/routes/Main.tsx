import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Dashboard from "../Dashboard";
import SemanticMemoryEngine from "../memory-zone/SemanticMemoryEngine";
import GovernanceCenter from "../memory-zone/GovernanceCenterSimple";
import PromptLibrary from "../memory-zone/PromptLibraryFixed";
import SnippetManager from "../memory-zone/SnippetManager";
import DashboardContent from "../DashboardContent";
import DriftInsightDashboard from "../memory-zone/DriftInsightDashboard";
import SystemOverview from "../SystemOverview";
import Launcher from "../CreateZone/Launcher";
import Editor from "../CreateZone/Editor";
import VisualStudio from "../CreateZone/VisualStudio";
import Validator from "../CreateZone/Validator";
import Assistant from "../CreateZone/Assistant";
import SignalExportHub from "../public-zone/ExportHub";
import IntegrationLayer from "../public-zone/Integration";
import CLISDKPanel from "../public-zone/SDK";
import SignalObjectProtocolViewer from "../public-zone/ProtocolViewer";
import UserProfileWireframe from "../user-settings/UserSettings";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Dashboard Layout with Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardContent />} />
          <Route path="overview" element={<SystemOverview />} />
          {/* Creatzone */}
          <Route path="createzone/launcher" element={<Launcher />} />
          <Route path="createzone/editor" element={<Editor />} />
          <Route path="createzone/visualstudio" element={<VisualStudio />} />
          <Route path="createzone/validator" element={<Validator />} />
          <Route path="createzone/assistant" element={<Assistant />} />
          {/* Memoryzone */}
          <Route
            path="memoryzone/semanticengine"
            element={<SemanticMemoryEngine />}
          />
          <Route path="memoryzone/governance" element={<GovernanceCenter />} />
          <Route path="memoryzone/prompts" element={<PromptLibrary />} />
          <Route path="memoryzone/snippets" element={<SnippetManager />} />
          <Route path="memoryzone/drift" element={<DriftInsightDashboard />} />
          {/* PubliceZone */}
          <Route path="publishzone/export" element={<SignalExportHub />} />
          <Route
            path="publishzone/integration"
            element={<IntegrationLayer />}
          />
          <Route path="publishzone/cli" element={<CLISDKPanel />} />
          <Route
            path="publishzone/protocol"
            element={<SignalObjectProtocolViewer />}
          />
          <Route path="settings" element={<UserProfileWireframe />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Main;
