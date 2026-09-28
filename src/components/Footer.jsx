import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2 font-semibold text-slate-700">
          <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
            <GraduationCap className="w-3.5 h-3.5" />
          </div>
          <span>Student Information Portal</span>
        </div>
        <p>Built with React &bull; HashRouter &bull; TailwindCSS</p>
      </div>
    </footer>
  );
};

export default Footer;
