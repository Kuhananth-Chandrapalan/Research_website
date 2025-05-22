import React from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const Documents: React.FC = () => {
  return (
    <section id="documents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Research Documents" 
          subtitle="Access the complete collection of project documentation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Proposal Reports */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Proposal Reports</h3>
            <div className="space-y-3 text-sm text-gray-700">
              {[
                { name: "Dissanayake D.J.R", file: "24-25J-206_IT21313370_Project_Proposal_Dissanayake D.J.R.pdf" },
                { name: "Kuhananth C", file: "24-25J-206_IT21332244_Project_Proposal_Kuhananth C.pdf" },
                { name: "Sulakkana H.D.S.R", file: "IT21224348 - Project Proposal Report.pdf" },
                { name: "Rizmaan M.F.M", file: "IT21295188_24-25J-206_Proposal_Report.pdf" }
              ].map(({ name, file }) => (
                <div key={name} className="flex justify-between items-center">
                  <span>{name}</span>
                  <a
                    href={`/downloads/proposal_reports/${file}`}
                    download
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Final Reports */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Individual Final Reports</h3>
            <div className="space-y-3 text-sm text-gray-700">
              {[
                { name: "Dissanayake D.J.R", file: "IT21313370_Final_Report.pdf" },
                { name: "Kuhananth C", file: "IT21302244_FinalReport.pdf" },
                { name: "Sulakkana H.D.S.R", file: "IT21224348_FinalReport.pdf" },
                { name: "Rizmaan M.F.M", file: "IT21295188_FinalReport.pdf" }
              ].map(({ name, file }) => (
                <div key={name} className="flex justify-between items-center">
                  <span>{name}</span>
                  <a
                    href={`/downloads/Individual_finalreports/${file}`}
                    download
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Final Report */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Final Research Report</h3>
            <p className="text-sm text-gray-700 mb-4">Group submission of the complete research methodology, implementation and findings.</p>
            <a 
              href="/downloads/System_FinalReport/24-25J-206_Final Report.pdf" 
              download 
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
            >
              Download Final Report
            </a>
          </div>

          {/* Research Paper */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Research Paper</h3>
            <p className="text-sm text-gray-700 mb-4">IEEE-formatted paper summarizing the full research framework and results.</p>
            <a 
              href="/downloads/Research_Paper/24-25J-206_ResearchPaper.pdf" 
              download 
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
            >
              Download Research Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
