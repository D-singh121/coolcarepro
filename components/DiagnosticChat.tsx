
import React, { useState, useRef, useEffect } from 'react';
import { getDiagnosticResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

interface DiagnosticChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiagnosticChat: React.FC<DiagnosticChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Hi! I'm your CoolCare AI Diagnostic Assistant. Describe the problem with your appliance, and I'll help you troubleshoot it." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getDiagnosticResponse(userMsg);
    
    setIsLoading(false);
    setMessages(prev => [...prev, { role: 'model', content: aiResponse || "Sorry, I encountered an error." }]);
  };

  const renderMessageContent = (content: string) => {
    let html = content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/^\s*(\d+)\.\s+(.*)$/gm, '<div class="ml-4 flex gap-2"><span>$1.</span><span>$2</span></div>');
    html = html.replace(/^\s*[\-\*]\s+(.*)$/gm, '<li class="ml-4 list-disc">$1</li>');
    html = html.replace(/\n/g, '<br/>');
    
    return { __html: html };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md">
      <div className="bg-white dark:bg-gray-900 w-full max-w-lg h-[90vh] md:h-[650px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300 border dark:border-gray-800">
        {/* Header */}
        <div className="bg-blue-600 p-5 md:p-6 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <i className="fas fa-robot text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold">AI Diagnostic Assistant</h3>
              <p className="text-xs text-blue-100">Troubleshoot your appliance</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition" aria-label="Close Chat">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 bg-gray-50 dark:bg-gray-800/50 scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-gray-700'
              }`}>
                <div 
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={renderMessageContent(m.content)}
                />
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shrink-0">
          <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:bg-white dark:focus-within:bg-gray-700 transition-all shadow-inner">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe the issue..."
              className="flex-grow bg-transparent border-none focus:ring-0 text-sm px-3 py-2 outline-none text-black dark:text-white font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 transition shadow-md active:scale-95"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-3 font-medium uppercase tracking-wider">
            Powered by Gemini AI Engine
          </p>
        </form>
      </div>
    </div>
  );
};

export default DiagnosticChat;