import React, { useState } from 'react';
import { Clock, Users, Edit, CheckCircle, AlertCircle, ArrowDown, ArrowUp, Download, RefreshCw, Search, ChevronRight, ChevronLeft, Calendar } from 'lucide-react';

const VersionHistoryTimeline = () => {
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [secondVersion, setSecondVersion] = useState(null);
  
  // Mock data for version history
  const versions = [
    { 
      id: 'v1.5', 
      label: 'Draft', 
      timestamp: 'Today, 2:42 PM', 
      user: 'Sarah Johnson',
      userRole: 'Copywriter',
      event: 'Edited',
      content: 'Welcome to our spring promotion! Enjoy exclusive discounts on all premium products until the end of the month. Use code SPRING25 for an additional 25% off your first purchase.',
      toneScore: 82,
    },
    { 
      id: 'v1.4', 
      label: 'Draft', 
      timestamp: 'Today, 10:30 AM', 
      user: 'Michael Lee',
      userRole: 'Strategist',
      event: 'Edited',
      content: 'Welcome to our spring promotion! Enjoy amazing discounts on all premium products until the end of the month. Use code SPRING25 for an extra 25% off your first purchase.',
      toneScore: 78,
    },
    { 
      id: 'v1.3', 
      label: 'Approved', 
      timestamp: 'Yesterday, 4:15 PM', 
      user: 'Jessica Chen',
      userRole: 'Legal/QA',
      event: 'Validated',
      content: 'Welcome to our spring promotion! Enjoy great discounts on all premium products until the end of April. Use code SPRING25 for an additional 25% off your first purchase.',
      toneScore: 80,
    },
    { 
      id: 'v1.2', 
      label: 'Rejected', 
      timestamp: 'Yesterday, 2:10 PM', 
      user: 'Jessica Chen',
      userRole: 'Legal/QA',
      event: 'Rejected',
      content: 'Welcome to our amazing spring promotion! Enjoy the best discounts ever on all premium products until the end of April. Use code SPRING25 for an incredible 25% off your purchase.',
      toneScore: 64,
      comment: 'Please tone down the superlatives. Avoid terms like "best ever" and "incredible" to prevent potential compliance issues.'
    },
    { 
      id: 'v1.1', 
      label: 'Draft', 
      timestamp: 'Apr 18, 9:20 AM', 
      user: 'Sarah Johnson',
      userRole: 'Copywriter',
      event: 'Created',
      content: 'Welcome to our amazing spring promotion! Enjoy the best discounts ever on all premium products until the end of April. Use code SPRING25 for an incredible 25% off your purchase.',
      toneScore: 62,
    },
  ];
  
  const handleVersionSelect = (version) => {
    if (compareMode && version.id !== selectedVersion?.id) {
      setSecondVersion(version);
    } else {
      setSelectedVersion(version);
      setSecondVersion(null);
    }
  };
  
  const toggleCompareMode = () => {
    setCompareMode(!compareMode);
    setSecondVersion(null);
  };
  
  const getEventIcon = (event) => {
    switch(event) {
      case 'Created': return <Edit className="w-5 h-5 text-blue-500" />;
      case 'Edited': return <Edit className="w-5 h-5 text-indigo-500" />;
      case 'Validated': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Rejected': return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'Exported': return <Download className="w-5 h-5 text-purple-500" />;
      default: return <Edit className="w-5 h-5 text-gray-500" />;
    }
  };
  
  const getLabelColor = (label) => {
    switch(label) {
      case 'Draft': return 'bg-blue-100 text-blue-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Exported': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="flex flex-col h-full bg-white p-6 rounded-lg shadow">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Version History Timeline</h1>
          <p className="text-gray-500">Campaign: Spring Promotion Email - April 2025</p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            className={`flex items-center px-4 py-2 border rounded-md font-medium transition ${compareMode ? 'bg-indigo-50 text-indigo-700 border-indigo-300' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
            onClick={toggleCompareMode}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Compare Versions
          </button>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search versions" 
              className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Calendar className="w-4 h-4 mr-2 text-gray-500" />
            <span>Date Range</span>
          </button>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex flex-grow overflow-hidden">
        {/* Timeline Column */}
        <div className="w-64 border-r border-gray-200 overflow-y-auto pr-4">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Version Timeline</h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Version Items */}
            {versions.map((version, index) => (
              <div 
                key={version.id}
                className={`relative pl-10 pr-2 py-3 mb-2 rounded-md cursor-pointer transition ${(selectedVersion?.id === version.id || secondVersion?.id === version.id) ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                onClick={() => handleVersionSelect(version)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-2 top-4 w-6 h-6 rounded-full flex items-center justify-center ${(selectedVersion?.id === version.id || secondVersion?.id === version.id) ? 'bg-indigo-500' : 'bg-gray-200'}`}>
                  {getEventIcon(version.event)}
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 text-xs leading-4 font-semibold rounded-full ${getLabelColor(version.label)}`}>
                      {version.id} • {version.label}
                    </span>
                    <span className="text-xs text-gray-500">{index === 0 ? 'Latest' : ''}</span>
                  </div>
                  
                  <div className="mt-1 text-sm text-gray-600">
                    {version.timestamp}
                  </div>
                  
                  <div className="mt-1 flex items-center text-sm">
                    <span className="font-medium text-gray-900">{version.user}</span>
                    <span className="ml-2 text-gray-500">• {version.event}</span>
                  </div>
                  
                  <div className="mt-1 text-xs text-gray-500">
                    Tone Score: {version.toneScore}/100
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Content Preview Area */}
        <div className="flex-grow p-4 overflow-y-auto">
          {!compareMode && selectedVersion && (
            <div className="border border-gray-200 rounded-lg p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-800">
                    Version {selectedVersion.id} • {selectedVersion.label}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {selectedVersion.timestamp} by {selectedVersion.user} ({selectedVersion.userRole})
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                    <RefreshCw className="w-4 h-4 mr-1.5" />
                    Restore Version
                  </button>
                </div>
              </div>
              
              <div className="flex-grow flex flex-col">
                <div className="bg-gray-50 rounded-lg p-4 flex-grow">
                  <div className="text-lg font-medium mb-2">Content Preview</div>
                  <div className="p-4 bg-white border border-gray-200 rounded-md">
                    {selectedVersion.content}
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="text-lg font-medium mb-2">Metadata</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 bg-gray-50 rounded-md">
                      <div className="text-sm text-gray-500">Tone Score</div>
                      <div className="font-medium">{selectedVersion.toneScore}/100</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md">
                      <div className="text-sm text-gray-500">Action</div>
                      <div className="font-medium">{selectedVersion.event}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-md">
                      <div className="text-sm text-gray-500">Version Type</div>
                      <div className="font-medium">{selectedVersion.label}</div>
                    </div>
                  </div>
                </div>
                
                {selectedVersion.comment && (
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                    <div className="text-sm font-medium text-yellow-800 mb-1">Reviewer Comment:</div>
                    <div className="text-sm text-yellow-700">{selectedVersion.comment}</div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {compareMode && selectedVersion && secondVersion && (
            <div className="border border-gray-200 rounded-lg p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">
                  Comparing Versions: {selectedVersion.id} vs {secondVersion.id}
                </h2>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50" onClick={() => setCompareMode(false)}>
                    Cancel Compare
                  </button>
                </div>
              </div>
              
              <div className="flex-grow grid grid-cols-2 gap-6">
                {/* Left Version */}
                <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium text-gray-900">Version {selectedVersion.id}</div>
                      <div className="text-sm text-gray-500">
                        {selectedVersion.timestamp} • {selectedVersion.user}
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs leading-4 font-semibold rounded-full ${getLabelColor(selectedVersion.label)}`}>
                      {selectedVersion.label}
                    </span>
                  </div>
                  
                  <div className="flex-grow bg-gray-50 p-4 rounded-md">
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      {selectedVersion.content}
                    </div>
                  </div>
                  
                  <div className="mt-3 text-sm">
                    <span className="font-medium">Tone Score:</span> {selectedVersion.toneScore}/100
                  </div>
                </div>
                
                {/* Right Version */}
                <div className="border border-gray-200 rounded-lg p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium text-gray-900">Version {secondVersion.id}</div>
                      <div className="text-sm text-gray-500">
                        {secondVersion.timestamp} • {secondVersion.user}
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs leading-4 font-semibold rounded-full ${getLabelColor(secondVersion.label)}`}>
                      {secondVersion.label}
                    </span>
                  </div>
                  
                  <div className="flex-grow bg-gray-50 p-4 rounded-md">
                    <div className="p-3 bg-white border border-gray-200 rounded-md">
                      {secondVersion.content}
                    </div>
                  </div>
                  
                  <div className="mt-3 text-sm">
                    <span className="font-medium">Tone Score:</span> {secondVersion.toneScore}/100
                    {secondVersion.toneScore > selectedVersion.toneScore && (
                      <span className="ml-2 text-green-600 flex items-center text-xs">
                        <ArrowUp className="w-3 h-3 mr-1" />
                        +{secondVersion.toneScore - selectedVersion.toneScore} points
                      </span>
                    )}
                    {secondVersion.toneScore < selectedVersion.toneScore && (
                      <span className="ml-2 text-red-600 flex items-center text-xs">
                        <ArrowDown className="w-3 h-3 mr-1" />
                        -{selectedVersion.toneScore - secondVersion.toneScore} points
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <div className="text-sm font-medium mb-2">Changes Overview</div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-600">Words changed:</span> <span className="font-medium">4</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Tone improvement:</span> 
                    <span className={secondVersion.toneScore > selectedVersion.toneScore ? "text-green-600 font-medium ml-1" : "text-red-600 font-medium ml-1"}>
                      {secondVersion.toneScore > selectedVersion.toneScore ? `+${secondVersion.toneScore - selectedVersion.toneScore}` : `${secondVersion.toneScore - selectedVersion.toneScore}`} points
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Change by:</span> <span className="font-medium">{secondVersion.user}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {(!selectedVersion || (compareMode && !secondVersion)) && (
            <div className="flex h-full items-center justify-center text-gray-500">
              {!compareMode ? 
                "Select a version from the timeline to view details" : 
                "Select two versions to compare changes"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VersionHistoryTimeline;