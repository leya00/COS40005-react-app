import React from 'react';

const CommuterDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Commuter View</h1>
      <p>Here you’ll see train frequencies, recommended arrival times, and departure countdowns.</p>
      {/* Placeholder: Replace with real-time train info components */}
      <div className="mt-6">
        <p className="font-semibold">Next Train: 3 mins</p>
        <p className="font-semibold">Recommended Arrival: 2 mins</p>
      </div>
    </div>
  );
};

export default CommuterDashboard;
