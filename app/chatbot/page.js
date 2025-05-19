'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', icon: '/icons/HOME.png', label: 'Home' },
  { href: '/medicine', icon: '/icons/MEDICINE.png', label: 'Medicines' }
];

export default function ChatbotPage() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const introContainerRef = useRef(null);
  const mainContainerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!showWelcome && chatHistory.length > 0) {
      scrollToBottom();
    }
  }, [chatHistory, showWelcome]);

  useEffect(() => {
    introContainerRef.current?.scrollIntoView();
  }, []);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToChat = () => {
    setIsTransitioning(true);
    
    // Initialize chat with welcome message
    setChatHistory([{
      sender: 'bot',
      text: 'Hello! I am PH.AI your friendly medicine assistant. How can I help you today?'
    }]);
    
    // Smooth scroll to chat container
    setTimeout(() => {
      chatContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
      
      // After scroll completes, hide welcome section
      setTimeout(() => {
        setShowWelcome(false);
        setIsTransitioning(false);
      }, 500);
    }, 100);
  };

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
      
      setTimeout(() => {
        const botMessage = { sender: 'bot', text: data.response };
        setChatHistory(prev => [...prev, botMessage]);
      }, 800);
    } catch (error) {
      console.error('Error:', error);
      setTimeout(() => {
        const errorMessage = { 
          sender: 'bot', 
          text: 'Sorry, I encountered an error. Please try again later.' 
        };
        setChatHistory(prev => [...prev, errorMessage]);
      }, 800);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside
        className="sidebar fixed top-0 left-0 h-screen w-20 p-4 flex flex-col justify-between text-white z-50"
        style={{ backgroundColor: '#18442A' }}
      >
        <div className="flex justify-center mb-8">
          <div className="relative w-[65px] h-[65px] min-w-[65px]">
            <Image
              src="/icons/PH.AI.svg"
              alt="Pharma AI Logo"
              fill
              className="object-contain drop-shadow-md"
              priority
              sizes="65px"
            />
          </div>
        </div>
        
        <nav className="flex flex-col items-center gap-6">
          {navItems.map(({ href, icon, label }) => (
            <Link href={href} key={href}>
              <div className="relative group">
                <Image
                  src={icon}
                  alt={label}
                  width={24}
                  height={24}
                  className={`cursor-pointer transition-transform duration-200 ${
                    pathname === href ? 'drop-shadow-md scale-110' : ''
                  }`}
                />
                <span className="absolute left-full ml-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div ref={mainContainerRef} className="flex-1 flex flex-col ml-20 relative overflow-hidden">
        {/* Welcome Section */}
        <div 
          ref={introContainerRef} 
          className={`w-full transition-all duration-500 ease-in-out ${
            showWelcome ? 'h-screen opacity-100' : 'h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="h-screen flex flex-col items-center justify-center p-4 bg-white w-full">
            <div className="w-full max-w-4xl p-6 text-center">
              <h1 className="text-3xl font-bold text-[#18442A] mb-4">HELLO I AM PH.AI</h1>
              <p className="text-lg text-gray-700 mb-6">
                Your personal assistant for over-the-counter (OTC) medicine information in the Philippines.
Get details about symptoms, recommended medications, side effects, precautions, and usage guidelines.
Ask about medicines available at Mercury Drug, Watsons, and other local pharmacies — all in one place.
Powered by AI, Pharma.AI helps you make informed decisions, but always consult a healthcare professional when needed.
              </p>
              <button 
                onClick={scrollToChat}
                disabled={isTransitioning}
                className="mt-8 bg-[#18442A] text-white px-6 py-3 rounded-lg hover:bg-[#143b28] transition-colors cursor-pointer transform hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                {isTransitioning ? 'Loading...' : 'Start Chatting'}
              </button>
              <div className="flex flex-col items-center mt-12">
              
                <svg 
                  className="animate-bounce w-8 h-8 text-[#18442A] cursor-pointer" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  onClick={scrollToChat}
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
        </div>

        {/* Chat Interface */}
        <div 
          ref={chatContainerRef} 
          className={`w-full flex flex-col bg-[#f9f9f9] transition-all duration-500 ease-in-out ${
            showWelcome ? 'h-0 opacity-0 overflow-hidden' : 'h-screen opacity-100'
          }`}
        >
          {/* Chat Header */}
          <div className="border-b border-gray-200 bg-white p-4 sticky top-0 z-10">
            <h2 className="text-xl font-semibold text-[#18442A]">PH.AI Your AI Medicine Assistant</h2>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-xl px-4 py-3 whitespace-pre-wrap ${
                    msg.sender === 'user' 
                      ? 'bg-[#18442A] text-white rounded-br-none' 
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                  }`}
                >
                  {msg.sender === 'bot' ? (
                    <div className="prose prose-sm max-w-none">
                      {msg.text.split('\n').map((line, i) => (
                        <p key={i} className="mb-2 last:mb-0">
                          {line.startsWith('•') || line.startsWith('-') ? (
                            <span className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{line.substring(1)}</span>
                            </span>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-xl rounded-bl-none px-4 py-3 border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area - Sticky Bottom */}
          <div className="border-t border-gray-200 bg-white p-4 sticky bottom-0">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about medicines..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#18442A] focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !message.trim()}
                className="bg-[#18442A] text-white p-3 rounded-lg hover:bg-[#143b28] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Pharma.AI may produce inaccurate information. Always consult a healthcare professional. If symptoms persist, please consult your doctor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}