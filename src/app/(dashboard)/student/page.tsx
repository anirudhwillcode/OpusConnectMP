'use client'
import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Calendar, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

type FilterCategory = 'jobType' | 'location' | 'salary';

interface Job {
  id: number;
  title: string;
  company: string;
  details: string;
  location: string;
  salary: string;
  link: string;
  applicants: number;
  timeLeft: string;
  eligibilityCriteria: string;
  companyPfp: string;
}

const jobsData: Job[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "TechCorp",
    details: "Join our team as a Software Engineer Intern and work on cutting-edge projects...",
    location: "San Francisco, CA",
    salary: "$30/hour",
    link: "/jobs/1", // Dynamic link for each job
    applicants: 50,
    timeLeft: "2 months left",
    eligibilityCriteria: "Currently pursuing a degree in Computer Science or related field",
    companyPfp: "/placeholder.svg?height=100&width=100"
  },
  // Add more jobs here...
];

const JobListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<{ [key in FilterCategory]: string[] }>({
    jobType: [],
    location: [],
    salary: []
  });
  const [sortBy, setSortBy] = useState('timeLeft');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (category: FilterCategory, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value]
    }));
  };

  const filteredAndSortedJobs = jobsData
    .filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = filters.location.length === 0 || filters.location.includes(job.location);
      const matchesSalary = filters.salary.length === 0 || filters.salary.some((range) => {
        const [min, max] = range.split('-').map((val) => parseInt(val.replace(/\D/g, '')));
        const jobSalary = parseInt(job.salary.replace(/\D/g, ''));
        return jobSalary >= min && (max ? jobSalary <= max : true);
      });
      return matchesSearch && matchesLocation && matchesSalary;
    })
    .sort((a, b) => {
      if (sortBy === 'timeLeft') {
        const getTimeLeftValue = (timeLeft: string) => parseInt(timeLeft.split(' ')[0]);
        return sortOrder === 'asc'
          ? getTimeLeftValue(a.timeLeft) - getTimeLeftValue(b.timeLeft)
          : getTimeLeftValue(b.timeLeft) - getTimeLeftValue(a.timeLeft);
      } else if (sortBy === 'salary') {
        const getSalaryValue = (salary: string) => parseInt(salary.replace(/\D/g, ''));
        return sortOrder === 'asc'
          ? getSalaryValue(a.salary) - getSalaryValue(b.salary)
          : getSalaryValue(b.salary) - getSalaryValue(a.salary);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-white border rounded-lg flex items-center gap-2 hover:bg-gray-50"
          >
            <SlidersHorizontal size={20} /> Filters
          </button>
          <div className="relative">
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [newSortBy, newSortOrder] = e.target.value.split('-');
                setSortBy(newSortBy);
                setSortOrder(newSortOrder);
              }}
              className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="timeLeft-asc">Ending Soon</option>
              <option value="timeLeft-desc">Newest</option>
              <option value="salary-desc">Highest Salary</option>
              <option value="salary-asc">Lowest Salary</option>
            </select>
            <ArrowUpDown size={20} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {showFilters && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FilterGroup
                title="Location"
                options={["San Francisco, CA", "New York, NY", "Remote"]}
                selected={filters.location}
                onChange={(value) => handleFilterChange('location', value)}
              />
              <FilterGroup
                title="Salary"
                options={["$0-$50k", "$50k-$100k", "$100k+"]}
                selected={filters.salary}
                onChange={(value) => handleFilterChange('salary', value)}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filteredAndSortedJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No jobs found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function FilterGroup({ title, options, selected, onChange }: { title: string, options: string[], selected: string[], onChange: (value: string) => void }) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      {options.map((option) => (
        <label key={option} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onChange(option)}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
      <div className="flex items-center mb-4">
        <img
          src={job.companyPfp}
          alt={`${job.company} profile`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{job.details}</p>
      <div className="mb-4">
        <p className="flex items-center text-gray-500 mb-1"><MapPin className="mr-2" /> {job.location}</p>
        <p className="flex items-center text-gray-500 mb-1"><DollarSign className="mr-2" /> {job.salary}</p>
        <p className="flex items-center text-gray-500 mb-1"><Calendar className="mr-2" /> {job.timeLeft}</p>
      </div>
      <div className="flex justify-between">
        <a href={job.link} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Apply Now
        </a>
        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
          Info
        </button>
      </div>
    </div>
  );
}

export default JobListing;
