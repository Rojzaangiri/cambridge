export type User = {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  status: 'pending' | 'approved' | 'rejected';
};

export type Assignment = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  teacherId: string;
  classId: string;
  subject: string;
  attachments?: string[];
};

export type Submission = {
  id: string;
  assignmentId: string;
  studentId: string;
  submittedAt: string;
  content: string;
  attachments?: string[];
  grade?: string;
  feedback?: string;
};

export type Notice = {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  target: 'all' | 'students' | 'teachers';
};

export type ReportCard = {
  id: string;
  studentId: string;
  term: string;
  year: string;
  subjects: {
    name: string;
    grade: string;
    remarks: string;
  }[];
  attendance: number;
  teacherRemarks: string;
  principalRemarks: string;
};