'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Clock, Users, Briefcase, PenSquare, MapPin, DollarSign, Plus, X } from "lucide-react"
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

interface Job {
  id: number
  title: string
  company: string
  details: string
  link: string
  location: string
  salary: string
  applicants: number
  timeLeft: string
}

export default function JobPostings() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingJob, setEditingJob] = useState<Job | null>(null)
  const [details, setDetails] = useState(editingJob?.details || '')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const jobData: Job = {
      id: editingJob ? editingJob.id : jobs.length + 1,
      title: formData.get('title') as string,
      company: formData.get('company') as string,
      details: details, // Use Quill's state
      location: formData.get('location') as string,
      salary: formData.get('salary') as string,
      link: formData.get('link') as string,
      applicants: editingJob ? editingJob.applicants : 0,
      timeLeft: editingJob ? editingJob.timeLeft : '2 months left'
    }

    if (editingJob) {
      setJobs(jobs.map(job => job.id === editingJob.id ? jobData : job))
    } else {
      setJobs([...jobs, jobData])
    }

    setIsOpen(false)
    setEditingJob(null)
    form.reset()
    setDetails('') // Reset Quill content
  }

  const handleEdit = (job: Job) => {
    setEditingJob(job)
    setDetails(job.details) // Set Quill content
    setIsOpen(true)
  }

  const handleViewApplications = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end items-center mb-6">
          <Button 
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Job
          </Button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {editingJob ? 'Edit Job' : 'Add New Job'}
                </h2>
                <Button
                  onClick={() => {
                    setIsOpen(false)
                    setEditingJob(null)
                    setDetails('')
                  }}
                  variant="ghost"
                  size="icon"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </Button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-700">Job Title</Label>
                  <Input id="title" name="title" placeholder="Job Title" required defaultValue={editingJob?.title} className="w-full text-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">Company Name</Label>
                  <Input id="company" name="company" placeholder="Company Name" required defaultValue={editingJob?.company} className="w-full text-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="details" className="text-gray-700">Job Details</Label>
                  <ReactQuill value={details} onChange={setDetails} className="w-full bg-white text-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-gray-700">Location</Label>
                  <Input id="location" name="location" placeholder="Location" required defaultValue={editingJob?.location} className="w-full text-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary" className="text-gray-700">Salary Range</Label>
                  <Input id="salary" name="salary" placeholder="Salary Range" required defaultValue={editingJob?.salary} className="w-full text-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="link" className="text-gray-700">Link to apply</Label>
                  <Input id="link" name="link" placeholder="Link to apply" required defaultValue={editingJob?.link} className="w-full text-gray-900" />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  {editingJob ? 'Update Job' : 'Create Job'}
                </Button>
              </form>
            </div>
          </div>
        )}

        {jobs.length === 0 ? (
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-[700px]">
            <CardContent className="text-center py-16 w-full max-w-lg">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Jobs Posted Yet</h2>
              <p className="text-gray-500 mb-6">Be the first to post a job and start attracting top talent!</p>
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Plus className="w-5 h-5 mr-2" />
                Post Your First Job
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center space-x-4">
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-800">{job.title}</CardTitle>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" onClick={() => handleEdit(job)}>
                    <PenSquare className="w-4 h-4" />
                    <span className="sr-only">Edit job</span>
                  </Button>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: job.details }} />
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{job.applicants} Applicants</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{job.timeLeft}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="space-x-2">
                  <Button className="w-full" onClick={() => handleViewApplications(job.link)}>
                    View Applications
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
