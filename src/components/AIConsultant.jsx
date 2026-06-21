import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const AIConsultant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'สวัสดีครับ ผมคือ AI ที่ปรึกษาธุรกิจของคุณ จากข้อมูลล่าสุดประจำเดือนนี้ ยอดขายของคุณเติบโตขึ้น 12.5% แต่พบว่าค่าโฆษณาใน Facebook มีผลตอบแทน (ROI) ลดลง มีอะไรให้ผมช่วยวิเคราะห์หรือแนะนำเพิ่มเติมไหมครับ?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Mock AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'ai',
        text: 'จากที่ผมวิเคราะห์ ผมแนะนำให้ลองนำงบประมาณโฆษณา 20% จาก Facebook ย้ายไปทำแคมเปญ Flash Sale บน Shopee ในช่วงปลายเดือนครับ เนื่องจากข้อมูลที่ผ่านมา Shopee มีอัตราการแปลง (Conversion Rate) สูงกว่าในช่วงเวลาดังกล่าว ซึ่งอาจช่วยเพิ่มกำไรสุทธิได้ประมาณ 3-5%'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="ai-container glass-card animate-fade-in">
      <div className="ai-header">
        <div className="ai-title-wrapper">
          <div className="ai-icon-bg">
            <Bot size={24} className="text-blue" />
          </div>
          <div>
            <h2>AI Business Consultant</h2>
            <p className="status-text">
              <span className="online-dot"></span> Online and ready to help
            </p>
          </div>
        </div>
        <button className="suggestion-btn glass-card">
          <Sparkles size={16} className="text-purple" />
          Analyze P&L
        </button>
      </div>

      <div className="chat-window">
        {messages.map(msg => (
          <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
            <div className={`avatar ${msg.sender}`}>
              {msg.sender === 'ai' ? <Bot size={20} /> : <User size={20} />}
            </div>
            <div className={`message-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input 
          type="text" 
          placeholder="Ask me about your sales, expenses, or get recommendations..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="send-btn" onClick={handleSend} disabled={!input.trim()}>
          <Send size={20} />
        </button>
      </div>

      <style>{`
        .ai-container {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 12rem);
          max-height: 800px;
        }

        .ai-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .ai-title-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .ai-icon-bg {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(59, 130, 246, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-blue { color: var(--accent-blue); }
        .text-purple { color: var(--accent-purple); }

        .status-text {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .online-dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent-green);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--accent-green);
        }

        .suggestion-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .chat-window {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .message-wrapper {
          display: flex;
          gap: 1rem;
          max-width: 80%;
        }

        .message-wrapper.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .avatar.ai { background: var(--gradient-primary); color: white; }
        .avatar.user { background: rgba(255, 255, 255, 0.1); color: var(--text-primary); }

        .message-bubble {
          padding: 1rem 1.25rem;
          border-radius: 1rem;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .message-bubble.ai {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-top-left-radius: 0.25rem;
        }

        .message-bubble.user {
          background: var(--accent-blue);
          color: white;
          border-top-right-radius: 0.25rem;
        }

        .chat-input-area {
          padding: 1.5rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 1rem;
        }

        .chat-input-area input {
          flex: 1;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-color);
          border-radius: 2rem;
          padding: 0 1.5rem;
          color: var(--text-primary);
          outline: none;
          transition: all var(--transition-fast);
        }

        .chat-input-area input:focus {
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .send-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent-blue);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .send-btn:hover:not(:disabled) {
          background: #2563eb;
          transform: scale(1.05);
        }

        .send-btn:disabled {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.3);
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default AIConsultant;
