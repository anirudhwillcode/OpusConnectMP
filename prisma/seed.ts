import { PrismaClient, UserSex, Dept } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Admin
  const admin = await prisma.admin.create({
    data: {
      id: '1',
      username: 'admin_user',
    },
  });

  // Seed companies
  const company1 = await prisma.company.create({
    data: {
      id: '1',
      username: 'google',
      name: 'Google',
      email: 'hr@google.com',
      phone: '1234567890',
    },
  });

  const company2 = await prisma.company.create({
    data: {
      id: '2',
      username: 'microsoft',
      name: 'Microsoft',
      email: 'hr@microsoft.com',
      phone: '0987654321',
    },
  });

  // Seed placement officers
  const officer1 = await prisma.pOfficer.create({
    data: {
      id: '1',
      username: 'placement_officer_1',
      name: 'Officer One',
      email: 'officer1@example.com',
      phone: '1111111111',
    },
  });

  const officer2 = await prisma.pOfficer.create({
    data: {
      id: '2',
      username: 'placement_officer_2',
      name: 'Officer Two',
      email: 'officer2@example.com',
      phone: '2222222222',
    },
  });

  // Seed students
  const students = await prisma.student.createMany({
    data: [
      {
        id: '1',
        username: 'john_doe',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        address: '123 Main St, City A',
        sex: UserSex.MALE,
        usn: 'USN001',
        department: Dept.CSE,
        cgpa: 8.5,
        resume: 'http://example.com/resume/john_doe.pdf',
      },
      {
        id: '2',
        username: 'jane_smith',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '9876543210',
        address: '456 Second St, City B',
        sex: UserSex.FEMALE,
        usn: 'USN002',
        department: Dept.ECE,
        cgpa: 9.0,
        resume: 'http://example.com/resume/jane_smith.pdf',
      },
      // ... [add more students as needed]
    ],
  });

  // Seed jobs
  const job1 = await prisma.job.create({
    data: {
      id: '1',
      title: 'Software Engineer',
      description: 'Develop and maintain software systems',
      url: 'http://apply.example.com',
      companyId: '1', // Google
    },
  });

  const job2 = await prisma.job.create({
    data: {
      id: '2',
      title: 'Data Analyst',
      description: 'Analyze data and generate reports',
      url: 'http://apply.example.com',
      companyId: '2', // Microsoft
    },
  });

  // Seed internships
  const internship1 = await prisma.internship.create({
    data: {
      company: 'Google',
      position: 'Software Intern',
      duration: '3 months',
      details: 'Worked on backend services',
      studentId: '1', // John Doe
    },
  });

  const internship2 = await prisma.internship.create({
    data: {
      company: 'Microsoft',
      position: 'Data Intern',
      duration: '6 months',
      details: 'Analyzed big data',
      studentId: '2', // Jane Smith
    },
  });

  // Seed achievements
  const achievement1 = await prisma.achievement.create({
    data: {
      title: 'Hackathon Winner',
      description: 'Won first place in a national hackathon',
      date: new Date('2023-05-01'),
      studentId: '1', // John Doe
    },
  });

  const achievement2 = await prisma.achievement.create({
    data: {
      title: 'Best Student Award',
      description: 'Awarded for academic excellence',
      date: new Date('2023-06-01'),
      studentId: '2', // Jane Smith
    },
  });

  // Seed certificates
  const certificate1 = await prisma.certificate.create({
    data: {
      title: 'AWS Certified',
      issuer: 'Amazon',
      date: new Date('2023-04-01'),
      img: 'http://example.com/certificate/john_aws.png',
      studentId: '1', // John Doe
    },
  });

  const certificate2 = await prisma.certificate.create({
    data: {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: new Date('2023-02-01'),
      img: 'http://example.com/certificate/jane_google.png',
      studentId: '2', // Jane Smith
    },
  });

  // Seed student-job applications
  const studentJob1 = await prisma.studentJob.create({
    data: {
      jobId: '1', // Software Engineer job at Google
      studentId: '1', // John Doe
      appliedAt: new Date(),
    },
  });

  const studentJob2 = await prisma.studentJob.create({
    data: {
      jobId: '2', // Data Analyst job at Microsoft
      studentId: '2', // Jane Smith
      appliedAt: new Date(),
    },
  });

  // Seed placed students
  const placedStudent1 = await prisma.placedStudents.create({
    data: {
      studentId: '1', // John Doe
      jobId: '1', // Software Engineer at Google
      placementDate: new Date(),
    },
  });

  const placedStudent2 = await prisma.placedStudents.create({
    data: {
      studentId: '2', // Jane Smith
      jobId: '2', // Data Analyst at Microsoft
      placementDate: new Date(),
    },
  });

  // Seed feedbacks
  const feedback1 = await prisma.feedback.create({
    data: {
      studentId: '1', // John Doe
      companyId: '1', // Google
      feedback: 'Great experience at Google',
      date: new Date(),
    },
  });

  const feedback2 = await prisma.feedback.create({
    data: {
      studentId: '2', // Jane Smith
      companyId: '2', // Microsoft
      feedback: 'Learned a lot at Microsoft',
      date: new Date(),
    },
  });

  // Seed announcements
  const announcement1 = await prisma.announcement.create({
    data: {
      title: 'Campus Placements Announcement',
      content: 'Campus placements will begin from December 1st.',
    },
  });

  // Seed resources
  const resource1 = await prisma.resorce.create({
    data: {
      title: 'Interview Preparation Guide',
      url: 'http://example.com/interview-guide',
    },
  });

  const resource2 = await prisma.resorce.create({
    data: {
      title: 'Resume Writing Tips',
      url: 'http://example.com/resume-tips',
    },
  });

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
