'use client'
import React, { JSX, useState } from 'react';
import { Calendar ,Trash2, X, Save } from 'lucide-react';
import LeftArrowPaginationIcon from '@/public/icons/LeftArrowPaginationIcon';
 
import RightArrowPaginationIcon from '@/public/icons/RightArrowPaginationIcon';

/* ================= Config ================= */
const SLOT_HEIGHT = 80; // প্রতি ঘন্টার স্লটের উচ্চতা (px)

/* ================= Types ================== */
interface Event {
  id: number;
  title: string;
  time: string;   // '7AM' | '8AM' ...
  day: string;    // 'YYYY-MM-DD'
  participants: number;
  tag: string;
  description: string;
  duration: string; // '30m' | '1h' | '2h' | '3h' | '4h'
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

/* ================ Component ================ */
const DarkScheduler: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date()); // current month থেকে শুরু
  const [currentSession] = useState<string>('Current Session');
 
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const [scheduleData, setScheduleData] = useState<Event[]>([
    { id: 1, title: 'Acme Redesign',      time: '8AM',  day: '2025-10-11', participants: 3, tag: '#5',  description: 'Redesign project meeting', duration: '1h' },
    { id: 2, title: 'Delta App',          time: '10AM', day: '2025-10-13', participants: 3, tag: '#10', description: 'App development review',   duration: '2h' },
    { id: 3, title: 'Portfolio Review',   time: '2PM',  day: '2025-10-14', participants: 3, tag: '#15', description: 'Portfolio presentation',   duration: '1h' },
    { id: 4, title: 'Freelance UX Audit', time: '9AM',  day: '2025-10-16', participants: 3, tag: '#8',  description: 'UX audit session',         duration: '3h' },
  ]);

  const [eventForm, setEventForm] = useState<EventForm>({
    title: '', description: '', participants: 1, duration: '1h', tag: ''
  });

  const hours: string[] = ['7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM'];

  /* ============== Helpers: Calendar ============== */
  const getCalendarDates = (): Date[] => {
    const y = currentMonth.getFullYear();
    const m = currentMonth.getMonth();
    const last = new Date(y, m + 1, 0).getDate();
    const arr: Date[] = [];
    for (let d = 1; d <= last; d++) arr.push(new Date(y, m, d));
    return arr;
  };
  const calendarDates = getCalendarDates();

  const isToday = (date: Date): boolean => {
    const t = new Date();
    return date.getDate() === t.getDate() && date.getMonth() === t.getMonth() && date.getFullYear() === t.getFullYear();
  };
  const isCurrentMonth = (date: Date): boolean =>
    date.getMonth() === currentMonth.getMonth() && date.getFullYear() === currentMonth.getFullYear();
  const formatDate = (date: Date): string => date.toISOString().split('T')[0];
 
  const changeMonth = (dir: 'prev'|'next') =>
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + (dir==='prev'?-1:1), 1));
  const getMonthYearDisplay = () => currentMonth.toLocaleDateString('en-US',{ month:'long', year:'numeric' });

  /* ============== Helpers: Events =============== */
  const getEventForTimeSlot = (date: Date, hour: string): Event | undefined =>
    scheduleData.find(e => e.day === formatDate(date) && e.time === hour);

  const getEventHeightMultiplier = (duration: string): number => {
    const map: Record<string, number> = { '30m': 0.5, '1h': 1, '2h': 2, '3h': 3, '4h': 4 };
    return map[duration] ?? 1;
  };

  const handleSlotClick = (date: Date, hour: string): void => {
    const dateStr = formatDate(date);
    const existing = getEventForTimeSlot(date, hour);
    if (existing) {
      setEditingEvent(existing);
      setEventForm({
        title: existing.title,
        description: existing.description,
        participants: existing.participants,
        duration: existing.duration,
        tag: existing.tag
      });
    } else {
      setEditingEvent(null);
      setEventForm({ title: '', description: '', participants: 1, duration: '1h', tag: `#${Math.floor(Math.random()*20)+1}` });
    }
    setSelectedSlot({ day: dateStr, hour });
    setShowEventModal(true);
  };

  const handleSaveEvent = (): void => {
    if (!eventForm.title.trim() || !selectedSlot) return;
    if (editingEvent) {
      setScheduleData(prev => prev.map(e => e.id === editingEvent.id ? { ...e, ...eventForm, day: selectedSlot.day, time: selectedSlot.hour } : e));
    } else {
      setScheduleData(prev => [...prev, { id: Date.now(), ...eventForm, day: selectedSlot.day, time: selectedSlot.hour }]);
    }
    setShowEventModal(false); setSelectedSlot(null); setEditingEvent(null);
  };

  const handleDeleteEvent = (): void => {
    if (!editingEvent) return;
    setScheduleData(prev => prev.filter(e => e.id !== editingEvent.id));
    setShowEventModal(false); setSelectedSlot(null); setEditingEvent(null);
  };

 
  const getParticipantAvatars = (count: number): JSX.Element[] => {
    const colors = [
      ['#4ade80','#22c55e'],
      ['#60a5fa','#3b82f6'],
      ['#f59e0b','#d97706'],
      ['#ef4444','#dc2626']
    ];
    return Array.from({ length: Math.min(count,4) }, (_, i) => (
      <div
        key={i}
        className="w-6 h-6 rounded-full border-2 border-[#a5a5ab] -ml-2 first:ml-0 relative"
        style={{ background: `linear-gradient(45deg, ${colors[i%4][0]}, ${colors[i%4][1]})` }}
      >
        {i===3 && count>4 && (
          <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold">
            +{count-3}
          </span>
        )}
      </div>
    ));
  };

 

  /* ================ Render ================= */
  return (
    <div className=" bg-[#151515] text-white p-6 rounded-3xl">
      {/* Header */}
      <div className="flex   justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-medium text-gray-200">{currentSession}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Calendar size={16} />
            <span>{getMonthYearDisplay()}</span>
            <div className="flex gap-2 ml-4">
              <button onClick={()=>changeMonth('prev')} className="p-2 arrow_btn " type="button">
                <LeftArrowPaginationIcon/>
              </button>
              <button onClick={()=>changeMonth('next')} className=" p-2 arrow_btn" type="button" ><RightArrowPaginationIcon/></button>
            </div>
          </div>
        </div>
        <div className=' flex items-center gap-4'>
            <div className='arrow_btn  py-10 font-bold '>Clock In</div>
            <div className=' arrow_btn py-[10px] px-6'>Clock Out</div>
        </div>
      </div>

      {/* ====== Schedule Panel: single scrollbar (both axes) at bottom ====== */}
      <div className="bg-[#161616] rounded-xl shadow-2xl w-full">
       
        <div className="relative h-[500px] overflow-auto scroll-smooth">
        
          <div className="flex w-max">
            {/* Time Column (sticky) */}
            <div className="sticky left-0 z-20 bg-[#151515]">
              <div className="bg-[#151515] p-4 border-r border-b border-gray-600 text-center text-gray-400 font-medium h-[72px] flex items-center justify-center">
                Time
              </div>
              {hours.map(h => (
                <div
                  key={h}
                  className="p-3 text-right text-gray-400 font-medium border-r border-t border-gray-600 bg-gray-750 flex items-center justify-end"
                  style={{ minHeight: `${SLOT_HEIGHT}px` }}
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Calendar Area */}
            <div className="min-w-max">
              {/* Header Row (DAY CELLS WITHOUT BORDERS) */}
              <div className="flex bg-[#161616]">
                {calendarDates.map((date, idx) => {
                  const today = isToday(date);
                  return (
                    <div
                      key={idx}
                      className={`p-4 text-center w-32 flex-shrink-0 ${today ? 'bg-blue-900 bg-opacity-30' : ''}`}
                    >
                      <div className={`font-medium ${today ? 'text-blue-400' : 'text-gray-300'}`}>
                        {['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'][date.getDay()]}
                      </div>
                      {/* <div className={`text-sm mt-1 ${today ? 'text-blue-300' : 'text-gray-400'}`}>
                        {date.getDate()}
                      </div> */}
                    </div>
                  );
                })}
              </div>

              {/* Body Rows — overlay cards, cells have fixed height */}
              {hours.map((hour) => (
                <div key={hour} className="flex border-t border-gray-600 overflow-visible">
                  {calendarDates.map((date) => {
                    const startEvent = scheduleData.find(e => e.day === formatDate(date) && e.time === hour);
                    const isMonth = isCurrentMonth(date);
                    const today = isToday(date);
                    const dateKey = `${formatDate(date)}-${hour}`;

                    return (
                      <div
                        key={dateKey}
                        className={`relative border-r border-gray-600 last:border-r-0 p-2 w-32 flex-shrink-0 ${
                          !isMonth ? 'bg-gray-850 opacity-50' : 'hover:bg-gray-750'
                        } ${today ? 'bg-blue-900 bg-opacity-10' : ''}`}
                        style={{ height: `${SLOT_HEIGHT}px` }}
                        onClick={() => handleSlotClick(date, hour)}
                      >
                        {!startEvent && (
                          <div className={`absolute top-1 right-1 w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium ${
                            today ? 'bg-blue-600 text-white' : isMonth ? 'text-gray-400' : 'text-gray-600'
                          }`}>{date.getDate()}</div>
                        )}

                        {startEvent && (
                          <div
                            className="absolute left-2 right-2 bg-gray-700 rounded-lg p-2 border border-gray-600 hover:border-gray-500 transition-all z-10"
                            style={{
                              top: 2,
                              height: `${getEventHeightMultiplier(startEvent.duration) * SLOT_HEIGHT - 4}px`,
                            }}
                            onClick={(e)=>{ e.stopPropagation(); handleSlotClick(date, hour); }}
                          >
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="font-medium text-white text-xs pr-1">{startEvent.title}</h3>
                              <span className="text-xs text-green-400 font-medium">{startEvent.tag}</span>
                            </div>
                            <p className="text-xs text-gray-400 mb-2 line-clamp-2">{startEvent.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">{getParticipantAvatars(startEvent.participants)}</div>
                              <span className="text-xs text-gray-500">{startEvent.time} • {startEvent.duration}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            {/* /Calendar Area */}
          </div>
          {/* /flex w-max */}
        </div>
        {/* /relative h-[500px] overflow-auto — একটাই স্ক্রলবার এখানেই */}
      </div>

      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#161616] rounded-xl p-6 w-full max-w-md border border-[#a5a5ab]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{editingEvent ? 'Edit Event' : 'Add New Event'}</h2>
              <button onClick={()=>setShowEventModal(false)} className="text-gray-400 hover:text-white" type="button"><X size={20}/></button>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                <input id="title" type="text" value={eventForm.title}
                  onChange={(e)=>setEventForm(p=>({ ...p, title: e.target.value }))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter event title"/>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                <textarea id="description" value={eventForm.description}
                  onChange={(e)=>setEventForm(p=>({ ...p, description: e.target.value }))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 h-20 resize-none"
                  placeholder="Enter description"/>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="participants" className="block text-sm font-medium text-gray-300 mb-1">Participants</label>
                  <input id="participants" type="number" min={1} max={10} value={eventForm.participants}
                    onChange={(e)=>setEventForm(p=>({ ...p, participants: parseInt(e.target.value) || 1 }))}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text:white focus:outline-none focus:border-blue-500"/>
                </div>
                <div>
                  <label htmlFor="duration" className="block text sm font-medium text-gray-300 mb-1">Duration</label>
                  <select id="duration" value={eventForm.duration}
                    onChange={(e)=>setEventForm(p=>({ ...p, duration: e.target.value }))}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500">
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
                <input id="tag" type="text" value={eventForm.tag}
                  onChange={(e)=>setEventForm(p=>({ ...p, tag: e.target.value }))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder="#tag"/>
              </div>

              {selectedSlot && (
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-300">
                    <span className="font-medium">Date & Time:</span>{' '}
                    {new Date(selectedSlot.day).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})} at {selectedSlot.hour}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between pt-6">
              {editingEvent && (
                <button onClick={handleDeleteEvent} className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" type="button">
                  <Trash2 size={16}/> Delete
                </button>
              )}
              <div className="flex gap-3 ml-auto">
                <button onClick={()=>setShowEventModal(false)} className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600" type="button">Cancel</button>
                <button onClick={handleSaveEvent} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" type="button">
                  <Save size={16}/> {editingEvent ? 'Update' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default DarkScheduler;
