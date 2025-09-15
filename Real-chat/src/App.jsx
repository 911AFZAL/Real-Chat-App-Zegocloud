import { useEffect, useState, useRef } from "react";
import { ZIM } from "zego-zim-web";
import "./App.css";

function App() {
  const [zimInstance, setZimInstance] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [message, setMessage] = useState([]);
  const [selectedUser, setSelectedUser] = useState("afzal");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const messageEndRef = useRef(null);

  const appId = 1072705387;
  const tokenA = "04AAAAAGjICdUADO++PYBQqICfNknTagCvBMKXGYq2YqKuI8im993v++cYbhaiA8ztXJAHKCWmyMQkKDlRylPq8PoZrYHK5p5sOYxtZ8PC4dUfc+rtdt6QvEQ7foLuXlVRrHyE/ohZY5c/ZbBW8KSGT4i7RemOo96+3iG7u2vrUwIJi91pwTXLcC3RpjBUiNX6uFTYM63s9nzlXdtenWTqitdMPQPm3Hb6bbJYIRXaI2vSuVJPc3v+wmemcKqgk6qolcSuP8jyiwE=";
  const tokenB = "04AAAAAGjICh4ADKKpL1T/i+ScaJPLUQCwgJRghHzTptEhiu/x6e6x9XPLAGDWg+r8/HlEf66tNzaCUVeTd/TUm8FomPV2TBfVOlHSik65SGJIToFLckaamCjzqGYi37w5szz+17j0yJ+PTlzo30uopY/M/Dr8AgJui4PHRQJi4j5q3IcuRbNCiillmCxCdQy43Qd5PolZAeyN+gtW4o8iuztdTYd34vdJhXsFUQqnLy64VrmZPFC4knDopjP8NhCTQIKePqm9XC8B";

  useEffect(() => {
    const instance = ZIM.create(appId);
    setZimInstance(instance);

    instance.on("error", function (zim, errorInfo) {
      console.log("error", errorInfo.code, errorInfo.message);
    });

    instance.on("connectionStateChanged", function (zim, { state, event }) {
      console.log("connectionStateChanged", state, event);
    });

    instance.on("peerMessageReceived", function (zim, { messageList }) {
      setMessage((prev) => [...prev, ...messageList]);
    });

    instance.on("tokenWillExpire", function (zim, { second }) {
      console.log("tokenWillExpire", second);
      zim
        .renewToken(selectedUser === "afzal" ? tokenA : tokenB)
        .then(() => console.log("Token-renewed"))
        .catch((err) => console.log(err));
    });

    return () => {
      instance.destroy();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  const handleLogin = () => {
    const info = {
      userID: selectedUser,
      userName: selectedUser === "afzal" ? "Afzal" : "Sahil",
    };
    setUserInfo(info);

    const loginToken = selectedUser === "afzal" ? tokenA : tokenB;

    if (!zimInstance) {
      console.log("instance error");
      return;
    }

    zimInstance
      .login(info, loginToken)
      .then(() => {
        setIsLoggedIn(true);
        console.log("Logged in");
      })
      .catch((err) => {
        console.log("login failed", err);
      });
  };

  const handleSendMessage = () => {
    if (!isLoggedIn || !messageText.trim()) return;

    const toConversationID = selectedUser === "afzal" ? "sahil" : "afzal";
    const conversationType = 0;
    const config = { priority: 1 };

    const messageTextObj = {
      type: 1,
      message: messageText,
      extendedData: "",
    };

    zimInstance
      .sendMessage(messageTextObj, toConversationID, conversationType, config)
      .then(({ message: sentMessage }) => {
        setMessage((prev) => [...prev, sentMessage]);
      })
      .catch((err) => {
        console.log(err);
      });

    setMessageText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timeStamp) => {
    const data = new Date(timeStamp);
    return data.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-2 md:p-4">
      <div className="w-full h-full max-w-full md:max-w-md md:h-[90%] mx-auto bg-white shadow-xl rounded-lg md:rounded-2xl overflow-hidden flex flex-col border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-4 flex justify-between items-center shadow-md">
          <div>
            <h1 className="text-lg font-bold">Real-time Chat</h1>
            {isLoggedIn && (
              <p className="text-xs opacity-80 mt-1">
                Logged in as {selectedUser === "afzal" ? "Afzal" : "Sahil"}
              </p>
            )}
          </div>
          {!isLoggedIn ? (
            <div className="flex gap-2 items-center">
              <select
                className="px-3 py-2 rounded-lg bg-white bg-opacity-20 text-white border-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                onChange={(e) => setSelectedUser(e.target.value)}
                value={selectedUser}
              >
                <option value="afzal">Afzal</option>
                <option value="sahil">Sahil</option>
              </select>
              <button
                className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          ) : (
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" title="Online"></div>
          )}
        </div>

        {/* Messages */}
        {isLoggedIn ? (
          <>
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {message.length === 0 ? (
                <div className="text-center text-gray-500 my-8">
                  <div className="mx-auto w-16 h-16 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-300">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p>No messages yet. Start a conversation!</p>
                </div>
              ) : (
                message.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex mb-4 ${msg.senderUserID === selectedUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.senderUserID === selectedUser
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                        }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <div className={`text-xs mt-1 ${msg.senderUserID === selectedUser ? "text-indigo-100" : "text-gray-500"} text-right`}>
                        {formatTime(msg.timestamp)}
                      </div>
                    </div>
                  </div>
                ))
              )}
              <div ref={messageEndRef} />
            </div>

            {/* Input Box */}
            <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
              <div className="flex-1 bg-gray-100 rounded-2xl pl-4 pr-2 py-1 flex items-center">
                <input
                  type="text"
                  className="flex-1 bg-transparent border-none focus:outline-none text-gray-800 py-2"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className={`p-2 rounded-full ${messageText ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200' : 'text-gray-400'}`}
                  onClick={handleSendMessage}
                  disabled={!messageText}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-500 p-8 text-center">
            <div className="w-24 h-24 mb-6 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Welcome to Chat App</h3>
            <p className="text-sm">Please select a user and login to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;