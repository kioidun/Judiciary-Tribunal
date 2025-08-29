import React, { useState, useRef } from 'react';
import './accessibilityAssistant.css';

const AccessibilityAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textToRead, setTextToRead] = useState('');
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const recognitionRef = useRef(null);

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const speakText = (text) => {
    if (!window.speechSynthesis) {
      alert('Text-to-Speech not supported in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      utterance.voice = voices.find(v => v.lang.includes('en')) || voices[0];
    }
    window.speechSynthesis.speak(utterance);
  };

  const handleStartVoice = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition not supported in this browser.');
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log('Voice Command:', command);

      if (command.includes('scroll down')) window.scrollBy(0, 200);
      else if (command.includes('scroll up')) window.scrollBy(0, -200);
      else if (command.includes('go to contact')) window.location.href = '/contact';
      else if (command.includes('go to home')) window.location.href = '/';
       else if (command.includes('go to about')) window.location.href = '/about';
        else if (command.includes('go to events')) window.location.href = '/events';
         else if (command.includes('go to team')) window.location.href = '/team';
          else if (command.includes('go to gallery')) window.location.href = '/gallery';
             else if (command.includes('go to gallery')) window.location.href = '/resources';
             else if (command.includes('go to capital markets')) window.location.href = '/CapitalMarkets';

      else alert('Unrecognized command: ' + command);
    };

    recognition.onerror = (event) => {
      console.error('Voice recognition error', event);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  const increaseFont = () => {
    const newSize = fontSize + 2;
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}px`;
  };

  const decreaseFont = () => {
    const newSize = fontSize - 2;
    setFontSize(newSize);
    document.body.style.fontSize = `${newSize}px`;
  };

  const handleChatSubmit = async () => {
    if (!chatInput.trim()) return;
    setChatResponse('Thinking...');
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: chatInput }]
        })
      });
      const data = await res.json();
      const message = data.choices[0]?.message?.content || 'No response';
      setChatResponse(message);
    } catch (err) {
      setChatResponse('Error connecting to assistant.');
    }
  };

  return (
    <>
      <button className="accessibility-toggle" onClick={toggleAssistant}>🗣 Assist Me</button>
      {isOpen && (
        <div className="assistant-modal">
          <h2>Accessibility Assistant</h2>

          <textarea
            placeholder="Paste or type text to read aloud..."
            value={textToRead}
            onChange={(e) => setTextToRead(e.target.value)}
          ></textarea>

          <div className="assistant-controls">
            <button onClick={() => speakText(textToRead)}>🔊 Read Aloud</button>
            <button onClick={handleStartVoice}>🎙️ Voice Command</button>
            <button onClick={toggleContrast}>🌗 Toggle Contrast</button>
            <button onClick={increaseFont}>A+</button>
            <button onClick={decreaseFont}>A-</button>
          </div>

          <p className="hint">Try saying: "Scroll down", "Scroll up", or "Go to contact"</p>

          <div className="chat-section">
            <input
              type="text"
              placeholder="Ask the assistant..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button onClick={handleChatSubmit}>Send</button>
            {chatResponse && <div className="chat-response">{chatResponse}</div>}
          </div>

          <button className="close-btn" onClick={toggleAssistant}>Close</button>
        </div>
      )}
    </>
  );
};

export default AccessibilityAssistant;
