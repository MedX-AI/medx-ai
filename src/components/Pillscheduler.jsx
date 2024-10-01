import React, { useState, useEffect } from 'react';

const PillScheduler = () => {
  const [medications, setMedications] = useState([]);
  const [newMed, setNewMed] = useState({ name: '', schedule: [], dosage: '', days: [] });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [newTime, setNewTime] = useState('');

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const addMedication = (e) => {
    e.preventDefault();
    if (newMed.name && newMed.schedule.length > 0 && newMed.dosage && newMed.days.length > 0) {
      setMedications([...medications, { ...newMed, id: Date.now() }]);
      setNewMed({ name: '', schedule: [], dosage: '', days: [] });
    }
  };

  const removeMedication = (id) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  const addTime = () => {
    if (newTime && !newMed.schedule.includes(newTime)) {
      setNewMed(prev => ({
        ...prev,
        schedule: [...prev.schedule, newTime]
      }));
      setNewTime('');
    }
  };

  const removeTime = (time) => {
    setNewMed(prev => ({
      ...prev,
      schedule: prev.schedule.filter(t => t !== time)
    }));
  };

  const toggleDay = (day) => {
    setNewMed(prev => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter(d => d !== day)
        : [...prev.days, day]
    }));
  };

  const getUpcomingReminders = () => {
    const now = new Date();
    const upcoming = medications.flatMap(med => 
      med.schedule.flatMap(time => {
        const [hours, minutes] = time.split(':').map(Number);
        return med.days.map(day => {
          const dayIndex = daysOfWeek.indexOf(day);
          let reminderDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (dayIndex + 7 - now.getDay()) % 7, hours, minutes);
          if (reminderDate < now) {
            reminderDate.setDate(reminderDate.getDate() + 7);
          }
          return { ...med, reminderTime: reminderDate };
        });
      })
    ).sort((a, b) => a.reminderTime - b.reminderTime).slice(0, 5);
    return upcoming;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className=" mt-10 p-6 bg-white rounded-lg shadow-xl text-gray-700 ">
      <h1 className="text-2xl font-bold mb-6">Alternatively,fill this form</h1>
      
      <form onSubmit={addMedication} className="mb-6">
        <input
          type="text"
          placeholder="Medication Name"
          value={newMed.name}
          onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          placeholder="Dosage"
          value={newMed.dosage}
          onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
          className="w-full p-2 mb-2 border rounded"
        />
        <div className="mb-2">
          <p className="mb-1 font-medium">Schedule:</p>
          <div className="flex mb-2">
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="p-2 border rounded mr-2"
            />
            <button
              type="button"
              onClick={addTime}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Time
            </button>
          </div>
          <div className="flex flex-wrap">
            {newMed.schedule.map(time => (
              <div key={time} className="mr-2 mb-2 px-3 py-1 bg-blue-100 text-blue-800 rounded flex items-center">
                {time}
                <button
                  type="button"
                  onClick={() => removeTime(time)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <p className="mb-1 font-medium">Days:</p>
          <div className="flex flex-wrap">
            {daysOfWeek.map(day => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`mr-2 mb-2 px-3 py-1 rounded ${
                  newMed.days.includes(day)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Medication
        </button>
      </form>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Medications</h2>
        {medications.map(med => (
          <div key={med.id} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
            <div>
              <span className="font-medium">{med.name}</span> - {med.dosage}
              <div className="text-sm text-gray-600">
                {med.schedule.join(', ')} on {med.days.join(', ')}
              </div>
            </div>
            <button
              onClick={() => removeMedication(med.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Upcoming Reminders</h2>
        <div className="text-sm text-gray-600 mb-2">
          Current time: {formatTime(currentTime)}
        </div>
        {getUpcomingReminders().map((reminder, index) => (
          <div key={index} className="mb-2 p-2 bg-yellow-100 rounded">
            <div className="font-medium">{reminder.name} - {reminder.dosage}</div>
            <div className="text-sm text-gray-600">
              {formatDate(reminder.reminderTime)} at {formatTime(reminder.reminderTime)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillScheduler;