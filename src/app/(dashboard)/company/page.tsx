'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, Briefcase, PenSquare, MapPin, DollarSign, Plus } from "lucide-react"

interface Job {
  id: number
  title: string
  company: string
  description: string
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const jobData: Job = {
      id: editingJob ? editingJob.id : jobs.length + 1,
      title: formData.get('title') as string,
      company: formData.get('company') as string,
      description: formData.get('description') as string,
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
  }

  const handleEdit = (job: Job) => {
    setEditingJob(job)
    setIsOpen(true)
  }

  const handleViewApplications = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-7x1  mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Post Jobs</h1>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <Plus className="w-5 h-5 mr-2" />
                Add Job
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingJob ? 'Edit Job' : 'Add New Job'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="title" placeholder="Job Title" required defaultValue={editingJob?.title} />
                <Input name="company" placeholder="Company Name" required defaultValue={editingJob?.company} />
                <Textarea name="description" placeholder="Job Description" required defaultValue={editingJob?.description} />
                <Input name="location" placeholder="Location" required defaultValue={editingJob?.location} />
                <Input name="salary" placeholder="Salary Range" required defaultValue={editingJob?.salary} />
                <Input name="link" placeholder="Link to apply" required defaultValue={editingJob?.link} />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  {editingJob ? 'Update Job' : 'Create Job'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        {jobs.length === 0 ? (
         <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-[700px]">
         <CardContent className="text-center py-16 w-full max-w-lg">
           <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
           <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Jobs Posted Yet</h2>
           <p className="text-gray-500 mb-6">Be the first to post a job and start attracting top talent!</p>
           <Dialog>
             <DialogTrigger asChild>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                 <Plus className="w-5 h-5 mr-2" />
                 Post Your First Job
               </Button>
             </DialogTrigger>
             <DialogContent>
               <DialogHeader>
                 <DialogTitle>Add New Job</DialogTitle>
               </DialogHeader>
               <form onSubmit={handleSubmit} className="space-y-4">
                 <Input name="title" placeholder="Job Title" required />
                 <Input name="company" placeholder="Company Name" required />
                 <Textarea name="description" placeholder="Job Description" required />
                 <Input name="location" placeholder="Location" required />
                 <Input name="salary" placeholder="Salary Range" required />
                 <Input name="link" placeholder="Link to apply" required />
                 <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                   Create Job
                 </Button>
               </form>
             </DialogContent>
           </Dialog>
         </CardContent>
       </Card>
       
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
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
                    <p className="text-sm text-gray-700">{job.description}</p>
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
                        <span>{job.applicants} Applied</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{job.timeLeft}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200 font-medium py-2 rounded-lg transition duration-300 ease-in-out"
                    onClick={() => handleViewApplications(job.link)}
                  >
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