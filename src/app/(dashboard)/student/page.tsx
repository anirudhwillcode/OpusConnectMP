'use client'

import { useState } from 'react'
import { Search, MapPin, DollarSign, Calendar, SlidersHorizontal, ArrowUpDown, Users, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

type FilterCategory = 'jobType' | 'location' | 'salary'

interface Job {
  id: number
  title: string
  company: string
  details: string
  location: string
  salary: string
  link: string
  applicants: number
  timeLeft: string
  eligibilityCriteria: string
  companyPfp: string
}

const jobsData: Job[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "TechCorp",
    details: "Join our team as a Software Engineer Intern and work on cutting-edge projects...",
    location: "San Francisco, CA",
    salary: "$30/hour",
    link: "/jobs/1",
    applicants: 50,
    timeLeft: "2 months left",
    eligibilityCriteria: "Currently pursuing a degree in Computer Science or related field",
    companyPfp: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "WebSolutions Inc.",
    details: "Seeking an experienced Full Stack Developer to build and maintain web applications...",
    location: "New York, NY",
    salary: "$120,000/year",
    link: "/jobs/2",
    applicants: 75,
    timeLeft: "1 month left",
    eligibilityCriteria: "5+ years of experience in full stack development",
    companyPfp: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "DesignMasters",
    details: "Join our creative team as a UX/UI Designer and shape the future of digital experiences...",
    location: "Remote",
    salary: "$90,000/year",
    link: "/jobs/3",
    applicants: 60,
    timeLeft: "3 weeks left",
    eligibilityCriteria: "Portfolio showcasing UX/UI projects",
    companyPfp: "/placeholder.svg?height=100&width=100"
  },
]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState<{ [key in FilterCategory]: string[] }>({
    jobType: [],
    location: [],
    salary: []
  })
  const [sortBy, setSortBy] = useState('timeLeft')
  const [sortOrder, setSortOrder] = useState('asc')
  const [showFilters, setShowFilters] = useState(false)

  const handleFilterChange = (category: FilterCategory, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value]
    }))
  }

  const filteredAndSortedJobs = jobsData
    .filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLocation = filters.location.length === 0 || filters.location.includes(job.location)
      const matchesSalary = filters.salary.length === 0 || filters.salary.some((range) => {
        const [min, max] = range.split('-').map((val) => parseInt(val.replace(/\D/g, '')))
        const jobSalary = parseInt(job.salary.replace(/\D/g, ''))
        return jobSalary >= min && (max ? jobSalary <= max : true)
      })
      return matchesSearch && matchesLocation && matchesSalary
    })
    .sort((a, b) => {
      if (sortBy === 'timeLeft') {
        const getTimeLeftValue = (timeLeft: string) => parseInt(timeLeft.split(' ')[0])
        return sortOrder === 'asc'
          ? getTimeLeftValue(a.timeLeft) - getTimeLeftValue(b.timeLeft)
          : getTimeLeftValue(b.timeLeft) - getTimeLeftValue(a.timeLeft)
      } else if (sortBy === 'salary') {
        const getSalaryValue = (salary: string) => parseInt(salary.replace(/\D/g, ''))
        return sortOrder === 'asc'
          ? getSalaryValue(a.salary) - getSalaryValue(b.salary)
          : getSalaryValue(b.salary) - getSalaryValue(a.salary)
      }
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-100 ">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">Find Your Dream Job</h1>
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex-grow relative">
            <Input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <SlidersHorizontal size={20} /> Filters
          </Button>
          <Select
            value={`${sortBy}-${sortOrder}`}
            onValueChange={(value) => {
              const [newSortBy, newSortOrder] = value.split('-')
              setSortBy(newSortBy as 'timeLeft' | 'salary')
              setSortOrder(newSortOrder as 'asc' | 'desc')
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="timeLeft-asc">Ending Soon</SelectItem>
              <SelectItem value="timeLeft-desc">Newest</SelectItem>
              <SelectItem value="salary-desc">Highest Salary</SelectItem>
              <SelectItem value="salary-asc">Lowest Salary</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {showFilters && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <FilterGroup
                  title="Job Type"
                  options={["Full-time", "Part-time", "Contract", "Internship"]}
                  selected={filters.jobType}
                  onChange={(value) => handleFilterChange('jobType', value)}
                />
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {filteredAndSortedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filteredAndSortedJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">No jobs found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  )
}

function FilterGroup({ title, options, selected, onChange }: { title: string, options: string[], selected: string[], onChange: (value: string) => void }) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-2 mb-2">
          <Checkbox
            id={option}
            checked={selected.includes(option)}
            onCheckedChange={() => onChange(option)}
          />
          <label
            htmlFor={option}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}

function JobCard({ job }: { job: Job }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start">
          <Avatar className="w-12 h-12 mr-4 mt-1">
            <AvatarImage src={job.companyPfp} alt={`${job.company} logo`} />
            <AvatarFallback>{job.company[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{job.company}</p>
              </div>
              <Button asChild className="ml-4">
                <a href={job.link}>Apply Now</a>
              </Button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{job.details}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin size={14} /> {job.location}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <DollarSign size={14} /> {job.salary}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock size={14} /> {job.timeLeft}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users size={14} /> {job.applicants} applicants
              </Badge>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Eligibility:</strong> {job.eligibilityCriteria}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}