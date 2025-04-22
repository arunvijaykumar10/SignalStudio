import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  Plus,
  X,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ToneAndGovernanceSetup = () => {
  const navigate = useNavigate();
  const [toneFormality, setToneFormality] = useState(50);
  const [toneConfidence, setToneConfidence] = useState(70);
  const [toneTechnical, setToneTechnical] = useState(30);
  const [toneEnthusiasm, setToneEnthusiasm] = useState(60);

  const [restrictedKeywords, setRestrictedKeywords] = useState([
    "guaranteed",
    "promise",
    "best ever",
    "revolutionary",
  ]);
  const [newKeyword, setNewKeyword] = useState("");

  const [escalationPreference, setEscalationPreference] =
    useState("flag-to-legal");

  // Mock function to add a new restricted keyword
  const addRestrictedKeyword = () => {
    if (newKeyword.trim() !== "") {
      setRestrictedKeywords([...restrictedKeywords, newKeyword.trim()]);
      setNewKeyword("");
    }
  };

  // Mock function to remove a restricted keyword
  const removeKeyword = (index) => {
    const updatedKeywords = [...restrictedKeywords];
    updatedKeywords.splice(index, 1);
    setRestrictedKeywords(updatedKeywords);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Progress tracker */}
      <div className="w-full bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center">
              <div className="bg-green-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <Check className="h-4 w-4" />
              </div>
              <span className="ml-2 font-medium text-green-600">
                Brand Identity
              </span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-indigo-600 text-white flex items-center justify-center w-6 h-6 rounded-full">
                <span>2</span>
              </div>
              <span className="ml-2 font-medium text-indigo-600">
                Tone & Governance
              </span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-gray-200 flex items-center justify-center w-6 h-6 rounded-full">
                <span>3</span>
              </div>
              <span className="ml-2">Prompt Import</span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-gray-200 flex items-center justify-center w-6 h-6 rounded-full">
                <span>4</span>
              </div>
              <span className="ml-2">Integrations</span>
            </div>
            <ChevronRight className="mx-3 h-4 w-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-gray-200 flex items-center justify-center w-6 h-6 rounded-full">
                <span>5</span>
              </div>
              <span className="ml-2">Team Invites</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Tone & Governance Rules
          </h1>
          <p className="mt-2 text-gray-600">
            Define your brand's tone of voice and set guardrails for
            AI-generated content.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Tone Personality
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <span>Casual</span>
                <span>Formal</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={toneFormality}
                onChange={(e) => setToneFormality(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-1 text-sm text-gray-500">
                {toneFormality < 30
                  ? "Conversational and relaxed"
                  : toneFormality > 70
                  ? "Professional and structured"
                  : "Balanced approach"}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <span>Modest</span>
                <span>Confident</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={toneConfidence}
                onChange={(e) => setToneConfidence(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-1 text-sm text-gray-500">
                {toneConfidence < 30
                  ? "Humble and understated"
                  : toneConfidence > 70
                  ? "Bold and authoritative"
                  : "Balanced confidence"}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <span>Simple</span>
                <span>Technical</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={toneTechnical}
                onChange={(e) => setToneTechnical(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-1 text-sm text-gray-500">
                {toneTechnical < 30
                  ? "Plain language, accessible to all"
                  : toneTechnical > 70
                  ? "Industry-specific terminology"
                  : "Balanced complexity"}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <span>Reserved</span>
                <span>Enthusiastic</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={toneEnthusiasm}
                onChange={(e) => setToneEnthusiasm(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-1 text-sm text-gray-500">
                {toneEnthusiasm < 30
                  ? "Calm and measured"
                  : toneEnthusiasm > 70
                  ? "Energetic and passionate"
                  : "Moderately expressive"}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Restricted Keywords
          </h2>
          <p className="text-gray-600 mb-4">
            Add words or phrases that should be flagged or avoided in generated
            content.
          </p>

          <div className="flex mb-4">
            <input
              type="text"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              placeholder="Add a word or phrase"
              className="flex-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
            />
            <button
              onClick={addRestrictedKeyword}
              className="ml-3 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="border border-gray-200 rounded-md p-4 bg-gray-50 max-h-52 overflow-y-auto">
            {restrictedKeywords.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-4">
                No restricted keywords added yet
              </p>
            ) : (
              <ul className="space-y-2">
                {restrictedKeywords.map((keyword, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-white rounded px-3 py-2 shadow-sm"
                  >
                    <span className="text-sm text-gray-800">{keyword}</span>
                    <button
                      onClick={() => removeKeyword(index)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-4 text-sm text-gray-500 flex items-start">
            <AlertCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
            <p>
              These keywords will be flagged during content validation. You can
              edit this list anytime in Governance settings.
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Example Generator
          </h2>
          <div className="border rounded-lg p-5 bg-gray-50">
            <h3 className="font-medium text-gray-900 mb-3">
              Here's how your brand tone looks on a landing page intro:
            </h3>

            <div className="bg-white rounded-md p-4 border border-gray-200">
              <p className="text-gray-800">
                {toneFormality > 70
                  ? "We are pleased to introduce our innovative solution that addresses your professional needs with precision and reliability."
                  : toneFormality < 30
                  ? "Hey there! We've got something awesome to show you that'll make your life so much easier."
                  : "Welcome to our platform. We've designed this solution to help you achieve better results with less effort."}

                {toneConfidence > 70
                  ? " Our expert team has developed the definitive approach to solving this industry challenge."
                  : toneConfidence < 30
                  ? " We think you might find our approach helpful when tackling these types of problems."
                  : " We believe our approach offers significant advantages for most users in this space."}

                {toneTechnical > 70
                  ? " The proprietary algorithm utilizes advanced machine learning techniques to optimize resource allocation efficiency."
                  : toneTechnical < 30
                  ? " Our tool makes it easy to get more done with less work, saving you time every day."
                  : " Our solution combines smart technology with user-friendly design to improve your workflow."}

                {toneEnthusiasm > 70
                  ? " We're incredibly excited to share this game-changing innovation with you!"
                  : toneEnthusiasm < 30
                  ? " We look forward to your feedback on this new offering."
                  : " We're happy to present this solution and hope you find it valuable."}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Escalation Preference
          </h2>
          <p className="text-gray-600 mb-4">
            Choose what happens when content doesn't meet your tone guidelines
            or contains restricted words.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="flag-to-legal"
                name="escalation"
                type="radio"
                checked={escalationPreference === "flag-to-legal"}
                onChange={() => setEscalationPreference("flag-to-legal")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="flag-to-legal" className="ml-3">
                <div className="text-gray-900 font-medium">Flag to Legal</div>
                <p className="text-sm text-gray-500">
                  Send to legal team for manual review
                </p>
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="auto-correct"
                name="escalation"
                type="radio"
                checked={escalationPreference === "auto-correct"}
                onChange={() => setEscalationPreference("auto-correct")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="auto-correct" className="ml-3">
                <div className="text-gray-900 font-medium">
                  Rewrite with Softer Tone
                </div>
                <p className="text-sm text-gray-500">
                  Automatically adjust content to comply with guidelines
                </p>
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="auto-approve"
                name="escalation"
                type="radio"
                checked={escalationPreference === "auto-approve"}
                onChange={() => setEscalationPreference("auto-approve")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="auto-approve" className="ml-3">
                <div className="text-gray-900 font-medium">
                  Auto-approve if Tone Score 80%
                </div>
                <p className="text-sm text-gray-500">
                  Only flag severe violations, allow minor deviations
                </p>
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 font-medium bg-white hover:bg-gray-50">
            Skip for Now
          </button>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 font-medium bg-white hover:bg-gray-50">
              Back
            </button>
            <button
              className="px-4 py-2 bg-indigo-600 rounded text-white font-medium hover:bg-indigo-700"
              onClick={() =>
                navigate("/dashboard/admintools/access/wizard/prompt")
              }
            >
              Next: Prompt Import
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToneAndGovernanceSetup;
