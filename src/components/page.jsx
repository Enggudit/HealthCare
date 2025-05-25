import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import FBXModel from '../models/FBXModel';
import { OrbitControls } from '@react-three/drei';
import { Sphere } from '@react-three/drei'

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({ dayIndex: 1, time: '09:00' });
  
  const data = [
  ['bg-gray-400 h-[35px]', 'bg-cyan-400 h-[25px]', 'bg-indigo-700 h-[53px]'],
  ['bg-gray-400 h-[55px]', 'bg-indigo-700 h-[25px]', 'bg-cyan-400 h-[35px]'],
  ['bg-gray-400 h-[55px]', 'bg-cyan-400 h-[25px]', 'bg-indigo-700 h-[53px]'],
  ['bg-gray-400 h-[55px]', 'bg-indigo-700 h-[35px]', 'bg-cyan-400 h-[24px]'],
  ['bg-cyan-400 h-[55px]', 'bg-indigo-700 h-[25px]', 'bg-cyan-300 h-[35px]'],
  ['bg-gray-400 h-[17px]', 'bg-cyan-400 h-[55px]', 'bg-indigo-700 h-[31px]'],
  ['bg-cyan-400 h-[55px]', 'bg-gray-400 h-[25px]', 'bg-indigo-700 h-[53px]']
  ]

  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
  const day = [
    { day: 'Mon', date: 25, slots: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, slots: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, slots: ['12:00', '13:00'] },
    { day: 'Thurs', date: 28, slots: ['10:00', '11:00'] },
    { day: 'Fri', date: 29, slots: ['14:00', '16:00'] },
    { day: 'Sat', date: 30, slots: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, slots: ['09:00', '10:00', '11:00'] },
  ];
  return (
    <div className='w-[97%] h-[96%] rounded-2xl bg-[#ffffff] shadow-xl flex flex-wrap overflow-hidden nunito-regular'>
      <div className="md:hidden relative pt-4 pl-4 pr-2 z-[100] bg-blue-100/50">
        <button onClick={() => setIsOpen(!isOpen)}>
          <ion-icon name={isOpen ? 'close' : 'menu'} size="large" className="text-[#41c0c7]"></ion-icon>
        </button>
      </div>
      <div className={`h-full w-[75%] z-[99] md:w-[20%] py-[2%] md:pl-[3%] pl-[5%] flex flex-col bg-zinc-100/50 justify-between items-start transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div>
          <h1 className='text-[#41c0c7] text-2xl font-extrabold pb-7 mt-7'>
            Health<span className='text-[#1c1242]'>care.</span>
          </h1>
          <h3 className='text-zinc-300 font-bold text-md mb-[3%]'>General</h3>
          <h2 className='text-md flex font-semibold items-center mb-4 text-[#261e67]'><ion-icon name="grid"></ion-icon>&nbsp;&nbsp;Dashboard</h2>
          <h2 className='text-md flex font-semibold items-center mb-4 text-zinc-500'><ion-icon name="swap-vertical"></ion-icon>&nbsp;&nbsp;History</h2>
          <h2 className='text-md flex font-semibold items-center mb-4 text-zinc-500'><ion-icon name="calendar"></ion-icon>&nbsp;&nbsp;Calender</h2>
          <h2 className='text-md flex font-semibold items-center mb-4 text-zinc-500'><ion-icon name="medkit"></ion-icon>&nbsp;&nbsp;Appointment</h2>
          <h2 className='text-md flex font-semibold items-center mb-4 text-zinc-500'><ion-icon name="analytics"></ion-icon>&nbsp;&nbsp;Statistics</h2>
          <h3 className='text-zinc-300 font-bold text-md mb-[3%]'>Tools</h3>
          <h2 className='text-md flex font-semibold items-center mb-4 text-zinc-500'><ion-icon name="chatbubble-ellipses"></ion-icon>&nbsp;&nbsp;Chat</h2>
          <h2 className='text-md flex font-semibold items-center mb-4 text-zinc-500'><ion-icon name="call"></ion-icon>&nbsp;&nbsp;Support</h2>
          
        </div>
        <div>
          <h2 className='text-md flex font-semibold items-center mb-4 text-zinc-500'><ion-icon name="settings"></ion-icon>&nbsp;&nbsp;Setting</h2>
        </div>
      </div>
      <div className="z-[44] right-div absolute md:relative rounded-t-2xl  w-[97%] md:w-[80%] md:flex block">
        <div className="mid-var w-full md:w-[45%] rounded-t-2xl  md:rounded-none overflow-hidden md:overflow-hidden md:pl-10 pl-20">
          <div className=" w-[80%] h-[35px] relative mt-14 flex justify-between items-center">
            <ion-icon className="text-2xl text-zinc-400" name="search"></ion-icon>
            <input type="text" placeholder="Search" className="w-full h-full text-xl bg-transparent outline-none pl-5 text-zinc-500" />
            <ion-icon className="text-2xl text-[#261e67]" name="notifications"></ion-icon>
          </div>
          <div className="mt-1 flex mr-6 justify-between items-center">
            <h1 className='text-2xl font-bold text-[#261e67]'>Dashboard</h1>
            <h6 className='text-sm flex items-center'>This Week<ion-icon name="chevron-down"></ion-icon></h6>
          </div>
          <div className="flex">
            <div className="w-1/2 h-[350px] md:h-[350px] mt-2 bg-[#e6f0f8] rounded-2xl shadow-lg flex flex-col justify-center items-center overflow-hidden">
              <div className="h-6 mt-2 ml-[87%] text-xl text-zinc-500">
                <ion-icon className="" name="add-circle-outline"></ion-icon>
              </div>
              <Canvas camera={{ position: [0, 1, 3], fov: 38 }}>
                <ambientLight intensity={5} />
                <FBXModel path="../public/images/Anatomical_Muscle_Dia_0524140038_texture.fbx" />
                <OrbitControls autoRotate={false} />
              </Canvas>
            </div>
            <div className="">
              <div className="bg-[#e6f0f8] rounded-2xl w-[150px] h-[30%] ml-8 mb-4 shadow-lg flex flex-col justify-center pl-3">
                <div className="flex w-full justify-baseline items-center">
                  <h1 className='text-4xl'>🫁</h1>
                  <h1 className='text-xl text-[#261e67] font-bold'>&nbsp;Lungs</h1>
                </div>
                <h3 className='text-sm text-zinc-400 mt-2'>Date: 26-oct-2021</h3>
                <div className="w-[90%] h-2 mt-2 bg-zinc-400 rounded-full"><div className="bg-red-600 w-3/4 h-full rounded-full"></div></div>
              </div>
              <div className="bg-[#e6f0f8] rounded-2xl w-[150px] h-[30%] ml-8 mb-4 shadow-lg flex flex-col justify-center pl-3">
                <div className="flex w-full justify-baseline items-center">
                  <h1 className='text-4xl'>🦷</h1>
                  <h1 className='text-xl text-[#261e67] font-bold'>&nbsp;Teeth</h1>
                </div>
                <h3 className='text-sm text-zinc-400 mt-2'>Date: 26-oct-2021</h3>
                <div className="w-[90%] h-2 mt-2 bg-zinc-400 rounded-full"><div className="bg-[#7ed1c2] w-[70%] h-full rounded-full"></div></div>
              </div>
              <div className="bg-[#e6f0f8] rounded-2xl w-[150px] h-[30%] ml-8 mb-4 shadow-lg flex flex-col justify-center pl-3">
                <div className="flex w-full justify-baseline items-center">
                  <h1 className='text-4xl'>🦴</h1>
                  <h1 className='text-xl text-[#261e67] font-bold'>&nbsp;Bone</h1>
                </div>
                <h3 className='text-sm text-zinc-400 mt-2'>Date: 26-oct-2021</h3>
                <div className="w-[90%] h-2 mt-2 bg-zinc-400 rounded-full"><div className="bg-[#f67459] w-[73%] h-full rounded-full"></div></div>
              </div>
            </div>
          </div>
          <h1 className='text-[#3734a7] mt-3 flex ml-[82%] items-center'>details&nbsp;&nbsp;<ion-icon name="arrow-forward"></ion-icon></h1>
          <div className="w-[95%] md:h-[130px] h-[120px] overflow-hidden mt-2 rounded-2xl bg-[#e6f0f8] p-2">
            <div className="flex justify-between items-center overflow-hidden">
              <h1 className='text-[#1f1d47] text-md font-bold'>Activity</h1>
              <h2 className='text-zinc-400 text-sm'>3 appointment on this week</h2>
            </div>
            <div className="flex justify-center gap-4 pt-2 rounded-md overflow-auto">
              {data.map((dayBars, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 min-w-[40px]">
                  <div className="flex space-x-1">
                    {dayBars.map((bar, i) => (
                      <div
                        key={i}
                        className={`w-[4px] rounded-sm transition-all duration-300 ${bar}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 mt-2">{days[index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='rounded-b-2xl md:rounded-none h-full w-full md:w-[55%] p-4 ' >
          <div className="flex">
            <div className="flex gap-2 absolute right-5">
              <h1 className='text-3xl bg-[#00e4ef] p-2 rounded-2xl'>👦🏻</h1>
              <h1 className='bg-blue-800 w-[50px] pl-4 pt-2 rounded-2xl text-3xl rouhnded-2xl text-white'>+</h1>
            </div>
            <div className="">
              <div className="max-w-3xl mx-auto p-2 bg-[#e6f0f8] rounded-xl shadow-lg text-[#1a1a4b] font-sans mt-15">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">October 2021</h2>
                <div className="space-x-2">
                  <button className="text-purple-400 hover:text-purple-600 text-xl">&larr;</button>
                  <button className="text-purple-400 hover:text-purple-600 text-xl">&rarr;</button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {day.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`px-4 py-2 rounded-lg ${
                      selected.dayIndex === dayIndex ? 'bg-[#abd0d2] shadow-md' : ''
                    }`}
                  >
                    <div className="text-center font-bold">{day.day}</div>
                    <div className="text-center text-lg mb-2">{day.date}</div>
                    <div className="space-y-2 flex flex-col items-center ]">
                      {day.slots.map((time) => (
                        <div
                          key={time}
                          onClick={() => setSelected({ dayIndex, time })}
                          className={`text-center md:w-[55px] cursor-pointer py-1 px-2 rounded-lg ${
                            selected.dayIndex === dayIndex && selected.time === time
                              ? 'bg-indigo-600 text-white'
                              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[14%] flex justify-around items-center mt-2">
              <div className="bg-[#3835ac] rounded-4xl w-[30%] h-full p-3 pt-1 text-white ">
                <div className="flex justify-between mr-2">
                  <h1 className='ml-2 mt-1'>Dentist</h1>
                  <h1 className='text-3xl'>🦷</h1>
                </div>
                <h1 className='text-sm pl-2 text-zinc-200'>  09:00-11:00</h1>
                <h1 className='text-sm pl-2 text-zinc-200'>Dr. Cameron Williamson</h1>
              </div>
              <div className="bg-[#dde2f9] w-[50%] h-full rounded-4xl  text-[#23214f]">
                <div className="flex justify-between mr-2">
                  <h1 className='ml-3 mt-3 font-bold'>Physiotherapy Appoinment</h1>
                  <h1 className='text-3xl mr-3 mt-1'>💪🏻</h1>
                </div>
                <h1 className='text-sm pl-3 text-[#23214f]'>11:00-12:00</h1>
                <h1 className='text-sm pl-3 text-[#23214f]'>Dr. Kevin Djones</h1>
              </div>
            </div>
            <h1 className='text-xl pl-2 pt-2 font-bold text-[#23214f]'>The Upcoming Schedule</h1>
            <h3 className='text-zinc-400 pl-3 py-1'>On Thursday</h3>
            <div className="w-full h-[12%] flex justify-around items-center mt-1">
              <div className="bg-[#dde2f9] rounded-4xl w-[45%] h-full px-2 pt-1 text-[#23214f]">
                <div className="flex justify-between mr-2 items-center">
                  <h1 className='ml-2 font-bold text-[85%]'>Health Checkup complete</h1>
                  <h1 className='text-3xl'>🌡️</h1>
                </div>
                <h1 className='text-sm pl-5 text-[#23214f]'>11:00 AM</h1>
              </div>
              <div className="bg-[#dde2f9] w-[40%] h-full rounded-4xl text-[#23214f]">
                <div className="flex justify-between mr-2">
                  <h1 className='ml-3 mt-3 font-bold text-[85%]'>Ophthalmologist</h1>
                  <h1 className='text-3xl mr-3 mt-1'>👁️</h1>
                </div>
                <h1 className='text-sm pl-5 text-[#23214f]'>14:00</h1>
              </div>
            </div>
            <h3 className='text-zinc-400 pl-3 py-1'>On Saturday</h3>
            <div className="w-full h-[12%] flex items-center gap-7 ml-7 mt-1">
              <div className="bg-[#dde2f9] rounded-4xl w-[35%] h-full px-2 pt-1 text-[#23214f]">
                <div className="flex justify-between mr-2 items-center">
                  <h1 className='ml-2 font-bold'>Cardiologist</h1>
                  <h1 className='text-3xl'>🩷</h1>
                </div>
                <h1 className='text-sm pl-5 text-[#23214f]'>12:00 AM</h1>
              </div>
              <div className="bg-[#dde2f9] w-[30%] h-full rounded-4xl text-[#23214f]">
                <div className="flex justify-between mr-2">
                  <h1 className='ml-3 mt-3 font-bold'>Neurologist</h1>
                  <h1 className='text-3xl mr-3 mt-1'>👨🏻‍⚕️</h1>
                </div>
                <h1 className='text-sm pl-5 text-[#23214f]'>16:00 PM</h1>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};



export default page;
