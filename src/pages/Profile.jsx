import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  BookOpen, 
  ArrowLeft, 
  CheckCircle,
  Award,
  Sparkles
} from 'lucide-react';
import { students } from '../data/studentsData';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find student by URL parameter, or default to the first student
  const student = students.find((s) => s.id === id) || students[0];

  if (!student) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
        <h2 className="text-lg font-bold text-slate-800">Student Not Found</h2>
        <Link
          to="/students"
          className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          to="/students"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Students List</span>
        </Link>

        {/* Student Selector */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium">Select Student:</span>
          <select
            value={student.id}
            onChange={(e) => navigate(`/profile/${e.target.value}`)}
            className="py-1.5 px-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer"
          >
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.rollNo})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Profile Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="h-28 bg-gradient-to-r from-indigo-600 to-blue-600" />
        
        <div className="px-6 pb-6 pt-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 mb-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 text-center sm:text-left">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-white shadow-md bg-white"
              />
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl font-extrabold text-slate-900">{student.name}</h1>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {student.status}
                  </span>
                </div>
                <p className="text-xs font-bold text-indigo-600 mt-0.5">{student.rollNo}</p>
                <p className="text-xs text-slate-500 font-medium">
                  {student.course} &bull; {student.year} ({student.semester})
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center justify-center gap-4 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <div className="text-center px-2">
                <span className="text-[11px] text-slate-500 font-medium block">GPA</span>
                <span className="text-base font-extrabold text-indigo-600">{student.gpa}</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div className="text-center px-2">
                <span className="text-[11px] text-slate-500 font-medium block">Attendance</span>
                <span className="text-base font-extrabold text-emerald-600">{student.attendance}</span>
              </div>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="truncate">{student.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{student.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="truncate">{student.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout: About & Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* About & Skills */}
        <div className="md:col-span-2 space-y-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-600" />
              <span>Biography &amp; Summary</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {student.bio}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Key Skills</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {student.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>Personal Information</span>
          </h3>

          <div className="space-y-2.5 text-xs divide-y divide-slate-100">
            <div className="pt-2 flex justify-between">
              <span className="text-slate-500 font-medium">Roll No</span>
              <span className="font-bold text-slate-800">{student.rollNo}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-500 font-medium">Gender</span>
              <span className="font-semibold text-slate-800">{student.gender}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-500 font-medium">Date of Birth</span>
              <span className="font-semibold text-slate-800">{student.dateOfBirth}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-500 font-medium">Semester</span>
              <span className="font-semibold text-slate-800">{student.semester}</span>
            </div>
            <div className="pt-2 flex justify-between">
              <span className="text-slate-500 font-medium">Department</span>
              <span className="font-semibold text-slate-800">{student.course}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Courses & Grades Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">Enrolled Courses &amp; Performance</h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-lg">
            {student.semester}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                <th className="py-3 px-5">Code</th>
                <th className="py-3 px-5">Course Title</th>
                <th className="py-3 px-5 text-center">Credits</th>
                <th className="py-3 px-5 text-center">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {student.courses.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-5 font-bold text-indigo-600">{c.code}</td>
                  <td className="py-3 px-5 font-medium text-slate-800">{c.name}</td>
                  <td className="py-3 px-5 text-center text-slate-600 font-semibold">{c.credits}</td>
                  <td className="py-3 px-5 text-center">
                    <span className="inline-block px-2 py-0.5 rounded-md font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {c.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
