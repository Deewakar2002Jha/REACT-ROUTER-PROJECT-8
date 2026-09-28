import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Users, 
  Mail, 
  Phone, 
  ArrowRight, 
  BookOpen, 
  Filter 
} from 'lucide-react';
import { students } from '../data/studentsData';

const Students = () => {
  const [search, setSearch] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');

  const courses = ['All', ...Array.from(new Set(students.map((s) => s.course)))];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchQuery =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(search.toLowerCase()) ||
        student.course.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        selectedCourse === 'All' || student.course === selectedCourse;

      return matchQuery && matchCategory;
    });
  }, [search, selectedCourse]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>Student Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            All Students
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            View, search, and access records of all registered students.
          </p>
        </div>

        <div className="text-xs bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-slate-700 font-semibold self-start sm:self-auto">
          Showing {filteredStudents.length} of {students.length} Students
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by student name, roll number, or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Department Select */}
          <div className="flex items-center gap-2 shrink-0">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full sm:w-auto py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            >
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course === 'All' ? 'All Departments' : course}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
          <span className="text-slate-400 font-medium mr-1">Filter by:</span>
          {courses.map((course) => (
            <button
              key={course}
              onClick={() => setSelectedCourse(course)}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                selectedCourse === course
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {course}
            </button>
          ))}
        </div>
      </div>

      {/* Student Cards Grid */}
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5">
                {/* Header with Avatar & GPA */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-13 h-13 rounded-2xl object-cover ring-2 ring-slate-100"
                  />
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md border border-emerald-100">
                      GPA {student.gpa}
                    </span>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">{student.year}</p>
                  </div>
                </div>

                {/* Name & Roll */}
                <h3 className="font-bold text-slate-900 text-base">{student.name}</h3>
                <p className="text-xs font-semibold text-slate-400 mb-2.5">{student.rollNo}</p>

                {/* Department Tag */}
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-lg">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{student.course}</span>
                  </span>
                </div>

                {/* Contact info */}
                <div className="space-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{student.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{student.phone}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Attendance: <strong className="text-slate-800 font-semibold">{student.attendance}</strong>
                </span>
                <Link
                  to={`/profile/${student.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-2xs transition-colors"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center max-w-sm mx-auto space-y-3">
          <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No students match search</h3>
          <p className="text-xs text-slate-500">
            Try searching with a different name or resetting the department filter.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCourse('All');
            }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Students;
