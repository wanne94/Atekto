import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Pozdrav! Ja sam vaš AI asistent za A-Frame kuće. Mogu vam pomoći oko odabira modela, cijena ili materijala. Kako vam mogu pomoći danas?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(messages, userMessage.text);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-wood-600/90 backdrop-blur-sm hover:bg-wood-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(203,146,77,0.4)] transition-transform hover:scale-105 border border-white/10 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm md:w-96 glass-panel bg-stone-900/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden h-[500px] animate-fade-in-up border border-white/10">
          {/* Header */}
          <div className="bg-wood-600/20 backdrop-blur-md p-4 flex justify-between items-center text-white border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="bg-wood-500 p-1.5 rounded-full shadow-lg">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm tracking-wide">A-Frame Asistent</h3>
                <p className="text-[10px] text-wood-200 uppercase tracking-wider font-bold">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm border ${
                    msg.role === 'user'
                      ? 'bg-wood-600/80 border-wood-500/50 text-white rounded-br-none shadow-lg'
                      : 'bg-white/10 border-white/10 text-stone-200 rounded-bl-none shadow-md backdrop-blur-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-wood-400" />
                  <span className="text-xs text-stone-400">Kucam odgovor...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black/20 border-t border-white/10 backdrop-blur-md">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pitajte o cijenama..."
                className="flex-1 bg-white/5 border border-white/10 focus:bg-white/10 focus:border-wood-500 focus:ring-0 rounded-full px-4 py-2.5 text-sm transition-all outline-none text-white placeholder:text-stone-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-wood-600 hover:bg-wood-500 disabled:bg-stone-700 disabled:text-stone-500 text-white p-2.5 rounded-full transition-colors shadow-lg border border-white/5"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};