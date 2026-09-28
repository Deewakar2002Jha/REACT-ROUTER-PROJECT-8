import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  User, 
  GraduationCap, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { students } from '../data/studentsData';

const Home = () => {
  const totalStudents = students.length;
  const avgGpa = (students.reduce((acc, s) => acc + parseFloat(s.gpa), 0) / totalStudents).toFixed(2);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 rounded-3xl text-white p-8 sm:p-10 shadow-md">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-xs">
            <GraduationCap className="w-4 h-4" />
            <span>Student Information App</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Manage &amp; View Student Information
          </h1>
          <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
            A simple, lightweight application built with React, React Router HashRouter, and TailwindCSS. Browse through student profiles, track academic performance, and view detailed records.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/students"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-bold text-sm shadow-xs hover:bg-indigo-50 transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>Browse Students</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500/40 text-white hover:bg-indigo-500/60 font-semibold text-sm border border-white/20 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>View Profile</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Total Students</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">{totalStudents}</h2>
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">All active student records</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Average GPA</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">{avgGpa}</h2>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">Across all departments</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Avg Attendance</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">93.5%</h2>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3 font-medium">Consistent attendance track</p>
        </div>
      </div>

      {/* Main Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link
          to="/students"
          className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Students List
            </h3>
            <p className="text-sm text-slate-500 mt-1 leading-relaxed">
              Explore the entire roster of enrolled students with real-time name and department search filters.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-indigo-600 gap-1">
            <span>Open Students List</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <Link
          to="/profile"
          className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Student Profile
            </h3>
            <p className="text-sm text-slate-500 mt-1 leading-relaxed">
              Inspect in-depth academic records, enrolled courses, grades, contact details, and student information.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-indigo-600 gap-1">
            <span>Open Student Profile</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Recent / Featured Students */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Featured Students</h2>
            <p className="text-xs text-slate-500 mt-0.5">Quick access to student profile cards</p>
          </div>
          <Link
            to="/students"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {students.slice(0, 3).map((student) => (
            <div
              key={student.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-200"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{student.name}</h3>
                    <p className="text-xs text-slate-400 font-medium">{student.rollNo}</p>
                  </div>
                </div>

                <span className="inline-block px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-lg mb-3">
                  {student.course}
                </span>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {student.bio}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">GPA: <strong className="text-slate-900">{student.gpa}</strong></span>
                <Link
                  to={`/profile/${student.id}`}
                  className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
