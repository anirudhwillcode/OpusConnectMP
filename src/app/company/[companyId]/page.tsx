'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Users, Briefcase, PenSquare, MapPin, DollarSign, Plus, X } from "lucide-react"
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

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

export default function JobPostings() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingJob, setEditingJob] = useState<Job | null>(null)
  const [details, setDetails] = useState(editingJob?.details || '')
  const [isEligible, setIsEligible] = useState<{ [key: number]: boolean }>({})
  const [companyPfp, setCompanyPfp] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCompanyPfp(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const jobData: Job = {
      id: editingJob ? editingJob.id : jobs.length + 1,
      title: formData.get('title') as string,
      company: formData.get('company') as string,
      details: details,
      location: formData.get('location') as string,
      salary: formData.get('salary') as string,
      link: formData.get('link') as string,
      applicants: editingJob ? editingJob.applicants : 0,
      timeLeft: editingJob ? editingJob.timeLeft : '2 months left',
      eligibilityCriteria: formData.get('eligibility') as string,
      companyPfp: companyPfp || '/placeholder.svg?height=100&width=100'
    }

    if (editingJob) {
      setJobs(jobs.map(job => job.id === editingJob.id ? jobData : job))
    } else {
      setJobs([...jobs, jobData])
    }

    setIsOpen(false)
    setEditingJob(null)
    form.reset()
    setDetails('')
    setCompanyPfp(null)
  }

  const handleEdit = (job: Job) => {
    setEditingJob(job)
    setDetails(job.details)
    setCompanyPfp(job.companyPfp)
    setIsOpen(true)
  }

  const handleViewApplications = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const handleEligibilityChange = (jobId: number, checked: boolean) => {
    setIsEligible(prev => ({ ...prev, [jobId]: checked }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 py-4">
          <Button 
            onClick={() => setIsOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Job
          </Button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {editingJob ? 'Edit Job' : 'Add New Job'}
                </h2>
                <Button
                  onClick={() => {
                    setIsOpen(false)
                    setEditingJob(null)
                    setDetails('')
                    setCompanyPfp(null)
                  }}
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-700">Job Title</Label>
                  <Input id="title" name="title" placeholder="Job Title" required defaultValue={editingJob?.title} className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">Company Name</Label>
                  <Input id="company" name="company" placeholder="Company Name" required defaultValue={editingJob?.company} className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="details" className="text-gray-700">Job Details</Label>
                  <ReactQuill value={details} onChange={setDetails} className="bg-white rounded-md h-64" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-gray-700">Location</Label>
                    <Input id="location" name="location" placeholder="Location" required defaultValue={editingJob?.location} className="w-full" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary" className="text-gray-700">Salary Range</Label>
                    <Input id="salary" name="salary" placeholder="Salary Range" required defaultValue={editingJob?.salary} className="w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="link" className="text-gray-700">Link to apply</Label>
                  <Input id="link" name="link" placeholder="Link to apply" required defaultValue={editingJob?.link} className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eligibility" className="text-gray-700">Eligibility Criteria</Label>
                  <Input id="eligibility" name="eligibility" placeholder="Eligibility Criteria" required defaultValue={editingJob?.eligibilityCriteria} className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pfp" className="text-gray-700">Company Profile Picture</Label>
                  <Input id="pfp" type="file" accept="image/*" onChange={handleImageUpload} className="w-full" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
                  {editingJob ? 'Update Job' : 'Create Job'}
                </Button>
              </form>
            </div>
          </div>
        )}

        {jobs.length === 0 ? (
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-[400px]">
            <CardContent className="text-center py-16">
              <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">No Jobs Posted Yet</h2>
              <p className="text-gray-600 mb-6">Be the first to post a job and start attracting top talent!</p>
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Plus className="w-5 h-5 mr-2" />
                Post Your First Job
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <CardHeader className="p-4 bg-primary/5">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-md">
                      <img
                        src={job.companyPfp}
                        alt={`${job.company} profile`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-800">{job.title}</CardTitle>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-5 h-5 mr-2 text-primary" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    <span>{job.applicants} Applicants</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>{job.timeLeft}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <PenSquare className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm">{job.eligibilityCriteria}</span>
                  </div>
                  
                </CardContent>
                <CardFooter className="p-4 bg-gray-50 flex justify-between">
                  <Button
                    onClick={() => handleViewApplications(job.link)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                  >
                    View Applications
                  </Button>
                  <Button
                    onClick={() => handleEdit(job)}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                  >
                    Edit Job
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}