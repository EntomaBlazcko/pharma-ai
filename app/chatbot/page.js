'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Sidebar from '../../public/components/Sidebar.js';

export default function ChatbotPage() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setChatHistory([{
      sender: 'bot',
      text: 'Hello! I am your OTC medicine assistant. How can I help you today?'
    }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: message };
    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.response };
      setChatHistory(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { 
        sender: 'bot', 
        text: 'Sorry, I encountered an error. Please try again later.' 
      };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f5f0e7]">
      {/* Sidebar - fixed width */}
      <div className="w-64 shrink-0 h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Welcome Introduction - full viewport height */}
        <div className="h-screen flex flex-col items-center justify-center p-4 bg-white w-full">
          <div className="w-full max-w-4xl p-6">
            <h1 className="text-3xl font-bold text-[#18442A] mb-4">Welcome to PharmaBot</h1>
            <p className="text-lg text-gray-700 mb-6">
              Your personal assistant for medicine information in the Philippines. 
              Ask about medications available at Mercury Drug, Watsons, or other local pharmacies.
            </p>
            <div className="flex flex-col items-center mt-12">
              <p className="text-gray-500 mb-4">Scroll down to start chatting</p>
              <svg 
                className="animate-bounce w-8 h-8 text-[#18442A]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Chat Container - appears after scrolling */}
        <div className="w-full flex flex-col items-center p-4 bg-[#f5f0e7]">
          <div className="w-full max-w-4xl flex flex-col">
            {/* Chat Messages - scrollable area */}
            <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-md p-4 space-y-4">
              {chatHistory.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[75%] rounded-lg px-4 py-2 ${
                      msg.sender === 'user' 
                        ? 'bg-[#18442A] text-white rounded-br-none' 
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 rounded-lg rounded-bl-none px-4 py-2">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-100"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - fixed at bottom */}
            <div className="bg-white rounded-b-lg shadow-md border-t p-4 mt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your question about medicines..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#18442A] focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !message.trim()}
                  className="bg-[#18442A] text-white px-6 py-2 rounded-lg hover:bg-[#143b28] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Ask about medicines available at Mercury Drug, Watsons, or other Philippine pharmacies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}