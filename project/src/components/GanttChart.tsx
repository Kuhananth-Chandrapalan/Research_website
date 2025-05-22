import React from 'react';

interface MilestoneItem {
  task: string;
  start: Date;
  end: Date;
  color?: string;
}

const milestones: MilestoneItem[] = [
  {
    task: 'Project Proposal',
    start: new Date(2024, 7, 1), // August 1, 2024
    end: new Date(2024, 7, 31),  // August 31, 2024
    color: '#4A90E2'
  },
  {
    task: 'Progress Review 1',
    start: new Date(2024, 9, 1),  // October 1, 2024
    end: new Date(2024, 9, 31),   // October 31, 2024
    color: '#50C878'
  },
  {
    task: 'Progress Review 2',
    start: new Date(2025, 0, 1),  // January 1, 2025
    end: new Date(2025, 0, 31),   // January 31, 2025
    color: '#FFA500'
  },
  {
    task: 'Final Report Submission',
    start: new Date(2025, 3, 1),  // April 1, 2025
    end: new Date(2025, 3, 30),   // April 30, 2025
    color: '#FF6347'
  },
  {
    task: 'Viva',
    start: new Date(2025, 4, 1),  // May 1, 2025
    end: new Date(2025, 4, 31),   // May 31, 2025
    color: '#9370DB'
  }
];

// Calculate the overall start and end date for the chart
const startDate = new Date(2024, 7, 1); // August 1, 2024
const endDate = new Date(2025, 4, 31);  // May 31, 2025
const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

export const GanttChart: React.FC = () => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const calculatePosition = (date: Date) => {
    const daysDiff = Math.ceil((date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return (daysDiff / totalDays) * 100;
  };

  const calculateWidth = (startDate: Date, endDate: Date) => {
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return (days / totalDays) * 100;
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{formatDate(startDate)}</span>
          <span>Project Timeline</span>
          <span>{formatDate(endDate)}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
      </div>
      
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{milestone.task}</span>
              <span className="text-sm text-gray-600">
                {formatDate(milestone.start)} - {formatDate(milestone.end)}
              </span>
            </div>
            <div className="relative w-full h-8 bg-gray-100 rounded">
              <div
                className="absolute h-full rounded"
                style={{
                  left: `${calculatePosition(milestone.start)}%`,
                  width: `${calculateWidth(milestone.start, milestone.end)}%`,
                  backgroundColor: milestone.color || '#4A90E2'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};