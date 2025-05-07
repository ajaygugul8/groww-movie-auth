import React from 'react';
import { useState } from 'react';
import { Film, TrendingUp, PieChart, Search, User, Menu, X, Bell, ChevronRight, Plus, DollarSign, Clock, Star } from 'lucide-react';

export default function GrowwMovieDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for investments
  const portfolioData = [
    {
      id: 1,
      title: "The Last Journey",
      director: "Sarah Chen",
      investedAmount: 5000,
      currentValue: 5750,
      returnPercentage: 15,
      posterColor: "bg-blue-500",
      genre: "Sci-Fi Adventure",
      status: "Production"
    },
    {
      id: 2,
      title: "Whispers in the Dark",
      director: "Michael Rodriguez",
      investedAmount: 2500,
      currentValue: 3200,
      returnPercentage: 28,
      posterColor: "bg-purple-500",
      genre: "Psychological Thriller",
      status: "Post-Production"
    },
    {
      id: 3,
      title: "City of Dreams",
      director: "Priya Sharma",
      investedAmount: 3000,
      currentValue: 2850,
      returnPercentage: -5,
      posterColor: "bg-amber-500",
      genre: "Drama",
      status: "Distribution"
    }
  ];

  // Mock data for available projects
  const availableProjects = [
    {
      id: 101,
      title: "The Secret Garden",
      director: "Emily Watson",
      targetFunding: 500000,
      currentFunding: 320000,
      posterColor: "bg-green-500",
      genre: "Fantasy",
      daysLeft: 15,
      rating: 4.8
    },
    {
      id: 102,
      title: "Midnight Runners",
      director: "Alex Kim",
      targetFunding: 750000,
      currentFunding: 450000,
      posterColor: "bg-indigo-500",
      genre: "Action Comedy",
      daysLeft: 22,
      rating: 4.5
    },
    {
      id: 103,
      title: "The Last Voyage",
      director: "Thomas Moore",
      targetFunding: 1200000,
      currentFunding: 890000,
      posterColor: "bg-red-500",
      genre: "Historical Drama",
      daysLeft: 8,
      rating: 4.7
    },
    {
      id: 104,
      title: "Echoes of Tomorrow",
      director: "Lisa Zhang",
      targetFunding: 650000,
      currentFunding: 320000,
      posterColor: "bg-cyan-500",
      genre: "Sci-Fi Thriller",
      daysLeft: 18,
      rating: 4.6
    }
  ];

  // Portfolio summary
  const portfolioSummary = {
    totalInvestment: 10500,
    currentValue: 11800,
    totalReturn: 12.38,
    activeInvestments: 3
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Film className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">GrowwMovie</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`${
                    activeTab === 'dashboard'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('explore')}
                  className={`${
                    activeTab === 'explore'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Explore Projects
                </button>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`${
                    activeTab === 'portfolio'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  My Portfolio
                </button>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="mx-4 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search projects"
                  type="search"
                />
              </div>
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                      <User className="h-full w-full text-gray-600" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setActiveTab('dashboard');
                  setMobileMenuOpen(false);
                }}
                className={`${
                  activeTab === 'dashboard'
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left`}
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setActiveTab('explore');
                  setMobileMenuOpen(false);
                }}
                className={`${
                  activeTab === 'explore'
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left`}
              >
                Explore Projects
              </button>
              <button
                onClick={() => {
                  setActiveTab('portfolio');
                  setMobileMenuOpen(false);
                }}
                className={`${
                  activeTab === 'portfolio'
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left`}
              >
                My Portfolio
              </button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                    <User className="h-full w-full text-gray-600" />
                  </span>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Alex Johnson</div>
                  <div className="text-sm font-medium text-gray-500">alex@example.com</div>
                </div>
                <button className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Bell className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome section */}
          <div className="md:flex md:items-center md:justify-between mb-6">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Welcome back, Ajay!
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Plus className="h-4 w-4 mr-2" />
                New Investment
              </button>
            </div>
          </div>

          {/* Portfolio summary */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Portfolio Summary</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Your investment performance at a glance</p>
            </div>
            <div className="border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-5 sm:p-6">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">Total Investment</span>
                  <span className="text-2xl font-bold text-gray-900">${portfolioSummary.totalInvestment.toLocaleString()}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">Current Value</span>
                  <span className="text-2xl font-bold text-gray-900">${portfolioSummary.currentValue.toLocaleString()}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">Total Return</span>
                  <span className={`text-2xl font-bold ${portfolioSummary.totalReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {portfolioSummary.totalReturn >= 0 ? '+' : ''}{portfolioSummary.totalReturn}%
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">Active Investments</span>
                  <span className="text-2xl font-bold text-gray-900">{portfolioSummary.activeInvestments}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Your investments */}
          <h3 className="text-lg font-medium text-gray-900 mb-3">Your Investments</h3>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {portfolioData.map((project) => (
              <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 rounded-md ${project.posterColor} h-10 w-10 flex items-center justify-center`}>
                      <Film className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{project.title}</h4>
                      <p className="text-sm text-gray-500">Dir. {project.director}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-500">Invested</span>
                      <span className="text-sm font-medium text-gray-900">${project.investedAmount}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-500">Current Value</span>
                      <span className="text-sm font-medium text-gray-900">${project.currentValue}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-500">Return</span>
                      <span className={`text-sm font-medium ${project.returnPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {project.returnPercentage >= 0 ? '+' : ''}{project.returnPercentage}%
                      </span>
                    </div>
                    <div className="flex justify-between mt-3">
                      <span className="text-xs font-medium py-1 px-2 rounded-full bg-gray-100 text-gray-800">{project.genre}</span>
                      <span className="text-xs font-medium py-1 px-2 rounded-full bg-blue-100 text-blue-800">{project.status}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
                  <div className="text-sm">
                    <button className="font-medium text-blue-600 hover:text-blue-500 flex items-center">
                      View details <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Available Projects */}
          <div className="flex items-center justify-between mt-8 mb-3">
            <h3 className="text-lg font-medium text-gray-900">Trending Projects</h3>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
              View all <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {availableProjects.map((project) => (
              <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className={`h-32 ${project.posterColor} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Film className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-xs font-medium">{project.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-medium text-gray-900 mb-1">{project.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">Dir. {project.director}</p>
                  
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium text-gray-500">Funding Goal</span>
                    <span className="text-xs font-medium text-gray-900">${project.targetFunding.toLocaleString()}</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(project.currentFunding / project.targetFunding) * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between mb-3 text-xs">
                    <span>${project.currentFunding.toLocaleString()} raised</span>
                    <span>{Math.round((project.currentFunding / project.targetFunding) * 100)}%</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-xs font-medium py-1 px-2 rounded-full bg-gray-100 text-gray-800">{project.genre}</span>
                    <span className="text-xs font-medium py-1 px-2 rounded-full bg-amber-100 text-amber-800 flex items-center">
                      <Clock className="mr-1 h-3 w-3" /> {project.daysLeft} days left
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                  <button className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <DollarSign className="h-4 w-4 mr-1" /> Invest Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}