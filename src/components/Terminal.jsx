// Terminal.jsx
import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const xterm = new Terminal();
    xterm.open(terminalRef.current);
    xterm.write('Welcome to the terminal!\r\n');

    // Additional terminal setup here

    return () => {
      xterm.dispose();
    };
  }, []);

  return <div ref={terminalRef} style={{ width: '100%', height: '400px' }} />;
};

export default TerminalComponent;