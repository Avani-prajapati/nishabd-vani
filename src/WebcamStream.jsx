// import React, { useRef, useCallback, useEffect, useState } from 'react';
// import Webcam from 'react-webcam';
// import io from 'socket.io-client';

// const WebcamStream = () => {
//   const [start,setStart] = useState(false);
//   const webcamRef = useRef(null);
//   const socketRef = useRef(null);
//   const [gesture, setGesture] = useState(null); // State to hold the recognized gesture
//   const [isWebSocketActive, setIsWebSocketActive] = useState(false); // State to track WebSocket status

//   useEffect(() => {
//     if (isWebSocketActive) {
//       // Initialize socket connection
//       socketRef.current = io.connect('http://localhost:5000');

//       // Listen for gesture recognition results from the server
//       socketRef.current.on('result', (data) => {
//         setGesture(data.gesture_name);
//       });

//       // Listen for any errors from the server
//       socketRef.current.on('error', (message) => {
//         console.error('Error:', message);
//       });

//       return () => {
//         socketRef.current.disconnect();
//       };
//     }
//   }, [isWebSocketActive]);

//   const startWebSocket = async () => {
//     setStart(!start);
//     if(isWebSocketActive){
//       socketRef.current.disconnect();
//       setIsWebSocketActive(false);
//       setStart(false);
//     }
//     else{
//     try {
//       const response = await fetch('http://localhost:5000/start-websocket');
//       const message = await response.text();

//       if (message.includes('WebSocket connection is now active.')) {
//         setIsWebSocketActive(true); // Trigger WebSocket connection
        
//       }
//       } catch (error) {
//       console.error('Failed to start WebSocket:', error);
//      }
//     }
//   };

//   const captureFrame = useCallback(() => {
//     if (webcamRef.current && socketRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       if (imageSrc) {
//         socketRef.current.emit('videoFrame', imageSrc);
//       }
//     }
//   }, []);

//   // Capture frames at regular intervals (e.g., every 500ms) once WebSocket is active
//   useEffect(() => {
//     if (isWebSocketActive) {
//       const intervalId = setInterval(captureFrame, 100); // Adjust the interval as needed
//       return () => clearInterval(intervalId); // Cleanup on component unmount
//     }
//   }, [captureFrame, isWebSocketActive]);

//   return (
//     <div>
//       <button onClick={startWebSocket} >
//         {start?"Stop WebSocket":"Start WebSocket"}
//       </button>
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={640}
//         height={480}
//         style={{
//           transform: 'scaleX(-1)', // Flip horizontally
//           marginTop: '20px',
//         }}
//       />
//       <div style={{ marginTop: '20px', fontSize: '24px' }}>
//         {gesture ? `Recognized Gesture: ${gesture}` : 'Waiting for gesture...'}
//       </div>
//     </div>
//   );
// };

// export default WebcamStream;
import React, { useRef, useCallback, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import io from 'socket.io-client';

const WebcamStream = () => {
  const [start, setStart] = useState(false);
  const webcamRef = useRef(null);
  const socketRef = useRef(null);
  const [gesture, setGesture] = useState(null); 
  const [isWebSocketActive, setIsWebSocketActive] = useState(false); 

  useEffect(() => {
    if (isWebSocketActive) {
      socketRef.current = io.connect('http://localhost:5000');

      socketRef.current.on('result', (data) => {
        setGesture(data.gesture_name);
      });

      socketRef.current.on('error', (message) => {
        console.error('Error:', message);
      });

      return () => {
        socketRef.current.disconnect();
      };
    }
  }, [isWebSocketActive]);

  const startWebSocket = async () => {
    if (isWebSocketActive) {
      // Disconnect the socket and stop the WebSocket
      socketRef.current.disconnect();
      setIsWebSocketActive(false);
      setStart(false);
      setGesture(null)
    } else {
      try {
        const response = await fetch('http://localhost:5000/start-websocket');
        const message = await response.text();

        if (message.includes('WebSocket connection is now active.')) {
          setIsWebSocketActive(true);
          setStart(true);
        }
      } catch (error) {
        console.error('Failed to start WebSocket:', error);
      }
    }
  };

  const captureFrame = useCallback(() => {
    if (webcamRef.current && socketRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        socketRef.current.emit('videoFrame', imageSrc);
      }
    }
  }, []);

  useEffect(() => {
    if (isWebSocketActive) {
      const intervalId = setInterval(captureFrame, 100); 
      return () => clearInterval(intervalId); 
    }
  }, [captureFrame, isWebSocketActive]);

  return (
    <div>
      <button onClick={startWebSocket}>
        {start ? "Stop WebSocket" : "Start WebSocket"}
      </button>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        style={{
          transform: 'scaleX(-1)', 
          marginTop: '20px',
        }}
      />
      <div style={{ marginTop: '20px', fontSize: '24px' }}>
        {gesture ? `Recognized Gesture: ${gesture}` : 'Waiting for gesture...'}
      </div>
    </div>
  );
};

export default WebcamStream;

