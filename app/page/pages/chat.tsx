"use client";

import { useState } from 'react';
import { FaBell } from 'react-icons/fa';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useState(0);
  const [messages, setMessages] = useState<string[]>([]); // เก็บข้อความทั้งหมด
  const [showNotifications, setShowNotifications] = useState(false); // ควบคุมการแสดงเมนู

  const handleSendMessage = () => {
    if (message.trim() === '') return; // ห้ามส่งข้อความเปล่า
    setMessages((prev) => [...prev, message]); // เพิ่มข้อความใหม่ในรายการ
    setNotifications((prev) => prev + 1); // เพิ่มการแจ้งเตือน
    setMessage(''); // ล้างกล่องข้อความ
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev); // เปิดหรือปิดเมนู
    setNotifications(0); // ล้างการแจ้งเตือนเมื่อเปิดเมนู
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Notification Icon */}
      <div className="fixed top-4 right-4">
        <button className="relative" onClick={toggleNotifications}>
          <FaBell size={30} />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>
        {/* Notification Dropdown */}
        {showNotifications && (
          <div className="absolute top-10 right-0 bg-white shadow-md rounded-lg w-60 p-4 z-50">
            <h2 className="text-lg font-bold mb-2">ข้อความที่ส่งมา</h2>
            {messages.length > 0 ? (
              <ul className="space-y-2">
                {messages.map((msg, index) => (
                  <li key={index} className="border-b py-1">
                    {msg}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">ยังไม่มีข้อความ</p>
            )}
          </div>
        )}
      </div>

      {/* Chat Box */}
      <div className="bg-white p-6 shadow-md rounded-lg w-80">
        <h1 className="text-xl font-bold mb-4">ส่งข้อความ</h1>
        <textarea
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="พิมพ์ข้อความที่นี่..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          ส่งข้อความ
        </button>
      </div>
    </div>
  );
}
