'use client'
import React, { JSX, useState } from 'react';
import { Calendar, Clock, Users, Plus, Edit3, Trash2, X, Save } from 'lucide-react';

// Type definitions
interface Event {
  id: number;
  title: string;
  time: string;
  day: string;
  participants: number;
  tag: string;
  description: string;
  duration: string;
}

interface EventForm {
  title: string;
  description: string;
  participants: number;
  duration: string;
  tag: string;
}

interface SelectedSlot {
  day: string;
  hour: string;
}

const DarkScheduler: React.FC = () => {
  const [currentSession, setCurrentSession] = useState<string>('Current Session');
  const [isClockIn, setIsClockIn] = useState<boolean>(true);
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date());

  const [scheduleData, setScheduleData] = useState<Event[]>([
    {
      id: 1,
      title: 'Acme Redesign',
      time: '8AM',
      day: 'Sat',
      participants: 3,
      tag: '#5',
      description: 'Redesign project meeting',
      duration: '1h'
    },
    {
      id: 2,
      title: 'Delta App',
      time: '7AM',
      day: 'Mon',
      participants: 3,
      tag: '#10',
      description: 'App development review',
      duration: '2h'
    },
    {
      id: 3,
      title: 'Portfolio Review',
      time: '11AM',
      day: 'Mon',
      participants: 3,
      tag: '#15',
      description: 'Portfolio presentation',
      duration: '1h'
    },
    {
      id: 4,
      title: 'Freelance UX Audit',
      time: '9AM',
      day: 'Thurs',
      participants: 3,
      tag: '#8',
      description: 'UX audit session',
      duration: '3h'
    }
  ]);

  const [eventForm, setEventForm] = useState<EventForm>({
    title: '',
    description: '',
    participants: 1,
    duration: '1h',
    tag: ''
  });

  const days: string[] = ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
  const hours: string[] = ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM'];

  const getEventForTimeSlot = (day: string, hour: string): Event | undefined => {
    return scheduleData.find(event => event.day === day && event.time === hour);
  };

  const handleSlotClick = (day: string, hour: string): void => {
    const existingEvent = getEventForTimeSlot(day, hour);
    if (existingEvent) {
      setEditingEvent(existingEvent);
      setEventForm({
        title: existingEvent.title,
        description: existingEvent.description,
        participants: existingEvent.participants,
        duration: existingEvent.duration,
        tag: existingEvent.tag
      });
    } else {
      setEditingEvent(null);
      setEventForm({
        title: '',
        description: '',
        participants: 1,
        duration: '1h',
        tag: `#${Math.floor(Math.random() * 20) + 1}`
      });
    }
    setSelectedSlot({ day, hour });
    setShowEventModal(true);
  };

  const handleSaveEvent = (): void => {
    if (!eventForm.title.trim() || !selectedSlot) return;

    if (editingEvent) {
      // Update existing event
      setScheduleData(prev => prev.map(event =>
        event.id === editingEvent.id
          ? { ...event, ...eventForm, day: selectedSlot.day, time: selectedSlot.hour }
          : event
      ));
    } else {
      // Add new event
      const newEvent: Event = {
        id: Date.now(),
        ...eventForm,
        day: selectedSlot.day,
        time: selectedSlot.hour
      };
      setScheduleData(prev => [...prev, newEvent]);
    }

    setShowEventModal(false);
    setSelectedSlot(null);
    setEditingEvent(null);
  };

  const handleDeleteEvent = (): void => {
    if (editingEvent) {
      setScheduleData(prev => prev.filter(event => event.id !== editingEvent.id));
      setShowEventModal(false);
      setSelectedSlot(null);
      setEditingEvent(null);
    }
  };

  const handleFormChange = (field: keyof EventForm, value: string | number): void => {
    setEventForm(prev => ({ ...prev, [field]: value }));
  };

  const getParticipantAvatars = (count: number): JSX.Element[] => {
    const colors: string[][] = [
      ['#4ade80', '#22c55e'],
      ['#60a5fa', '#3b82f6'],
      ['#f59e0b', '#d97706'],
      ['#ef4444', '#dc2626']
    ];

    return Array.from({ length: Math.min(count, 4) }, (_, index) => (
      <div 
        key={index}
        className="w-6 h-6 bg-gray-400 rounded-full border-2 border-gray-700 -ml-2 first:ml-0 relative"
        style={{
          background: `linear-gradient(45deg, ${colors[index % 4][0]}, ${colors[index % 4][1]})`
        }}
      >
        {index === 3 && count > 4 && (
          <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold">
            +{count - 3}
          </span>
        )}
      </div>
    ));
  };

  const totalParticipants: number = scheduleData.reduce((sum, event) => sum + event.participants, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-medium text-gray-200">{currentSession}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar size={16} />
            <span>Week View</span>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <button 
            onClick={() => setIsClockIn(!isClockIn)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              isClockIn 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Clock In
          </button>
          <button 
            onClick={() => setIsClockIn(!isClockIn)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              !isClockIn 
                ? 'bg-gray-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Clock Out
          </button>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-[1200px] overflow-x-auto">
     
        <div className="grid grid-cols-8 bg-gray-700">
          <div className="p-4 border-r border-gray-600"></div>
          {days.map((day: string, index: number) => (
            <div key={day} className="p-4 text-center text-gray-300 font-medium border-r border-gray-600 last:border-r-0">
              {day}
            </div>
          ))}
        </div>

    
        {hours.map((hour: string, hourIndex: number) => (
          <div key={hour} className="grid grid-cols-8 border-t border-gray-600">
          
            <div className="p-4 text-right text-gray-400 font-medium border-r border-gray-600 bg-gray-750">
              {hour}
            </div>
            
         
            {days.map((day: string, dayIndex: number) => {
              const event: Event | undefined = getEventForTimeSlot(day, hour);
              return (
                <div 
                  key={`${day}-${hour}`} 
                  className="relative border-r border-gray-600 last:border-r-0 min-h-[80px] p-2 hover:bg-gray-750 transition-colors cursor-pointer"
                  onClick={() => handleSlotClick(day, hour)}
                >
                  {event ? (
                    <div className="bg-gray-700 rounded-lg p-3 h-full border border-gray-600 hover:border-gray-500 transition-all group relative">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-white text-sm pr-2">{event.title}</h3>
                        <span className="text-xs text-green-400 font-medium">{event.tag}</span>
                      </div>
                      <p className="text-xs text-gray-400 mb-2 truncate">{event.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {getParticipantAvatars(event.participants)}
                        </div>
                        <span className="text-xs text-gray-500">{event.duration}</span>
                      </div>
                      <div className="absolute inset-0   bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all"></div>
                    </div>
                  ) : (
                    <div className="h-full rounded-lg transition-colors flex items-center justify-center text-gray-600 hover:text-gray-400">
                      <Plus size={20} className="opacity-0 hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                {editingEvent ? 'Edit Event' : 'Add New Event'}
              </h2>
              <button 
                onClick={() => setShowEventModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                <input
                  id="title"
                  type="text"
                  value={eventForm.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange('title', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter event title"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                <textarea
                  id="description"
                  value={eventForm.description}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleFormChange('description', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 h-20 resize-none"
                  placeholder="Enter description"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="participants" className="block text-sm font-medium text-gray-300 mb-1">Participants</label>
                  <input
                    id="participants"
                    type="number"
                    min="1"
                    max="10"
                    value={eventForm.participants}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                      handleFormChange('participants', parseInt(e.target.value) || 1)
                    }
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-1">Duration</label>
                  <select
                    id="duration"
                    value={eventForm.duration}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFormChange('duration', e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="30m">30 minutes</option>
                    <option value="1h">1 hour</option>
                    <option value="2h">2 hours</option>
                    <option value="3h">3 hours</option>
                    <option value="4h">4 hours</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="tag" className="block text-sm font-medium text-gray-300 mb-1">Tag</label>
                <input
                  id="tag"
                  type="text"
                  value={eventForm.tag}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormChange('tag', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="#tag"
                />
              </div>

              {selectedSlot && (
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-300">
                    <span className="font-medium">Time:</span> {selectedSlot.day} at {selectedSlot.hour}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between pt-6">
              {editingEvent && (
                <button
                  onClick={handleDeleteEvent}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  type="button"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              )}
              <div className="flex gap-3 ml-auto">
                <button
                  onClick={() => setShowEventModal(false)}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEvent}
                  className="flex items-center gap-2 px-4 py-2   text-white rounded-lg hover:bg-blue-700 transition-colors"
                  type="button"
                >
                  <Save size={16} />
                  {editingEvent ? 'Update' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legend/Stats */}
      <div className="mt-6 flex gap-6 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span>Active Sessions ({scheduleData.length})</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>Total Participants ({totalParticipants})</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>Click any time slot to add/edit events</span>
        </div>
      </div>
    </div>
  );
};

export default DarkScheduler;
