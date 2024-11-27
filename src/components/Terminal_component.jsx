import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

const Terminal_component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [showFsociety, setShowFsociety] = useState(false);
  const [fsocietyMessage, setFsocietyMessage] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  // Handle fsociety Easter egg
  const handleFsocietyEasterEgg = () => {
    setIsOpen(false);
    setShowFsociety(true);
    const messages = [
      'Hello friend...',
      'Is that what you\'re thinking?',
      'I think you\'re ready...',
      'To join fsociety...',
      'But first...',
      'Let me show you something...'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        setFsocietyMessage(messages[index]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowFsociety(false);
          setIsOpen(true);
        }, 1000);
      }
    }, 1500);
  };

  // Available commands
  const commands = {
    help: {
      description: 'Show available commands',
      execute: () => (
        'Available commands:\n' +
        '  help          Show this help message\n' +
        '  about         About me\n' +
        '  skills        List my technical skills\n' +
        '  projects      View my projects\n' +
        '  contact       Get my contact information\n' +
        '  clear         Clear the terminal\n' +
        '  whoami        Display current user\n' +
        '  date          Show current date\n' +
        '  echo [text]   Display a line of text\n' +
        '  matrix        Start Matrix effect\n' +
        '  fsociety      Join fsociety\n' +
        '  exit          Close the terminal'
      )
    },
    about: {
      description: 'About me',
      execute: () => 'Hello friend. I am a developer focused on building secure and scalable web applications.'
    },
    skills: {
      description: 'List technical skills',
      execute: () => (
        'Technical Skills:\n' +
        '├── Frontend\n' +
        '│   ├── React.js\n' +
        '│   ├── TypeScript\n' +
        '│   ├── Angular\n' +
        '|   └── Tailwind CSS\n' +
        '├── Backend\n' +
        '│   ├── Node.js\n' +
        '|   ├── Symfony\n' +
        '|   ├── Java Spring Boot\n +
        '│   └── Python\n' +
        '└── Security\n' +
        '    ├── Cryptography\n' +
        '    └── Network Security'
      )
    },
    projects: {
      description: 'View projects',
      execute: () => (
        'Projects:\n' +
        '1. E-commerce Platform\n' +
        '   - Secure e-commerce solution\n' +
        '   - Tech: React, Node.js, MongoDB\n\n' +
        '2. Network Monitor\n' +
        '   - Real-time traffic analysis\n' +
        '   - Tech: React, Socket.io, D3.js\n\n' +
        '3. Task Management\n' +
        '   - Collaborative project tool\n' +
        '   - Tech: React, Redux, Firebase'
      )
    },
    contact: {
      description: 'Get contact information',
      execute: () => (
        'Contact Information:\n' +
        'Email: kamil.serrai@gmail.com\n' +
        'GitHub: www.github.com/Klima42\n' +
        'LinkedIn: www.linkedin.com/in/kamil-serrai-ba30b7168\n'
      )
    },
    clear: {
      description: 'Clear the terminal',
      execute: () => {
        setHistory([]);
        return null;
      }
    },
    whoami: {
      description: 'Display current user',
      execute: () => 'guest@portfolio:~$'
    },
    date: {
      description: 'Show current date',
      execute: () => new Date().toLocaleString()
    },
    echo: {
      description: 'Display a line of text',
      execute: (args) => args.join(' ') || 'Error: No text provided'
    },
    matrix: {
      description: 'Start Matrix effect',
      execute: () => {
        setHistory(prev => [...prev, 'Initializing the Matrix...']);
        terminalRef.current.classList.add('matrix-effect');
        setTimeout(() => {
          terminalRef.current.classList.remove('matrix-effect');
        }, 5000);
        return null;
      }
    },
    fsociety: {
      description: 'Join fsociety',
      execute: () => {
        handleFsocietyEasterEgg();
        return 'Initializing fsociety protocol...';
      }
    },
    // Hidden commands
    '5/9': {
      description: null,
      execute: () => {
        handleFsocietyEasterEgg();
        return 'Accessing restricted files...';
      }
    },
    'mr.robot': {
      description: null,
      execute: () => {
        handleFsocietyEasterEgg();
        return 'Control is an illusion...';
      }
    },
    'elliot': {
      description: null,
      execute: () => {
        handleFsocietyEasterEgg();
        return 'Sometimes I dream of saving the world...';
      }
    },
    exit: {
      description: 'Close the terminal',
      execute: () => {
        setTimeout(() => setIsOpen(false), 500);
        return 'Goodbye, friend.';
      }
    }
  };

  const handleCommand = (cmd) => {
    const args = cmd.trim().split(' ');
    const command = args.shift().toLowerCase();
    
    if (commands[command]) {
      const output = commands[command].execute(args);
      if (output !== null) {
        setHistory(prev => [...prev, { type: 'input', content: cmd }, { type: 'output', content: output }]);
      }
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'input', content: cmd },
        { type: 'output', content: `Command not found: ${command}. Type 'help' for available commands.` }
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [history, isOpen]);

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('terminal-header')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);
  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth <= 768) {
      setIsMaximized(true);
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <>
      
      
{showFsociety && (
  <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
    <div className="text-center max-w-lg p-8">
      <div className="fsociety-mask mb-8">
        <svg
  viewBox="0 0 100 100"
  className="w-48 h-48 mx-auto text-[#00ff41]"
  fill="currentColor"
>
  <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 96C24.6 96 4 75.4 4 50S24.6 4 50 4s46 20.6 46 46-20.6 46-46 46z"/>
  <path d="M73 35.5c0 1.9-1.6 3.5-3.5 3.5h-39c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5h39c1.9 0 3.5 1.6 3.5 3.5z"/>
  <path d="M50 45c-8.3 0-15 6.7-15 15v10c0 8.3 6.7 15 15 15s15-6.7 15-15V60c0-8.3-6.7-15-15-15zm0 35c-5.5 0-10-4.5-10-10V60c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z"/>
  <circle cx="35" cy="35.5" r="3"/>
  <circle cx="65" cy="35.5" r="3"/>
</svg>
      </div>
      <div className="relative overflow-hidden h-12">
        <p className="text-[#00ff41] font-mono text-2xl typewriter">
          {fsocietyMessage}
        </p>
      </div>
    </div>
  </div>
)}
      {/* Terminal Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-[#1a1b23] border border-[#00ff41]/20 p-2 rounded-full hover:border-[#00ff41]/40 transition-all duration-300 z-40"
      >
        <TerminalIcon size={20} className="text-[#00ff41]" />
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div
          ref={terminalRef}
          style={{
            position: 'fixed',
            top: isMaximized ? '0' : `${position.y}px`,
            left: isMaximized ? '0' : `${position.x}px`,
            width: isMaximized ? '100%' : '600px',
            height: isMaximized ? '100%' : '400px',
          }}
          className="bg-[#0a0b0f] border border-[#00ff41]/20 rounded-lg shadow-2xl overflow-hidden z-50"
        >
         {/* Terminal Header */}
<div
  className="terminal-header flex items-center justify-between px-4 py-2 bg-[#1a1b23] border-b border-[#00ff41]/20"
  onMouseDown={handleMouseDown}
>
  <span className="text-[#00ff41] font-mono text-sm">guest@portfolio:~$</span>
  <div className="flex items-center space-x-2">
    {!isMobile && (
      <button
        onClick={() => setIsMaximized(!isMaximized)}
        className="text-[#00ff41] hover:text-[#00ff41]/80 transition-colors"
      >
        {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
      </button>
    )}
    <button
      onClick={() => setIsOpen(false)}
      className="text-[#00ff41] hover:text-[#00ff41]/80 transition-colors p-2"
    >
      <X size={isMobile ? 24 : 14} />
    </button>
  </div>
</div>
          {/* Terminal Output */}
          <div
            ref={outputRef}
            className="p-4 h-[calc(100%-88px)] overflow-y-auto font-mono text-sm"
          >
            <div className="text-[#00ff41] mb-4">
              Welcome to Portfolio Terminal v1.0.0
              <br />
              Type 'help' for available commands.
            </div>
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                {entry.type === 'input' ? (
                  <div className="text-[#00ff41]">
                    $ {entry.content}
                  </div>
                ) : (
                  <div className="text-gray-300 whitespace-pre-wrap">
                    {entry.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Terminal Input */}
          <div className="px-4 py-2 border-t border-[#00ff41]/20 bg-[#1a1b23] flex items-center">
            <span className="text-[#00ff41] mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-[#00ff41] font-mono text-sm flex-1"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Terminal_component;
