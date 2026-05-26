import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const ChatBot = () => {
  const [lang, setLang] = useState("");
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  // 1️⃣ SELECT LANGUAGE → LOAD CATEGORIES
  const selectLanguage = async (lng) => {
    setLang(lng);
    setQuestions([]);
    setChat([{ sender: "bot", text: "Language selected. Choose category or ask question." }]);

    try {
      const res = await axios.get("http://10.200.17.141:5103/api/ChatBot", {
        params: { lng },
      });

      setCategories(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  // 2️⃣ CLICK CATEGORY → LOAD QUESTIONS
  const selectCategory = async (cat) => {
    setChat((p) => [...p, { sender: "user", text: cat }]);

    try {
      const res = await axios.get("http://10.200.17.141:5103/api/ChatBot", {
        params: {
          lng: lang,
          category: cat,
        },
      });

      setQuestions(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  // 3️⃣ CLICK QUESTION → GET ANSWER
  const selectQuestion = async (q) => {
    setChat((p) => [...p, { sender: "user", text: q }]);
    setLoading(true);

    try {
      const res = await axios.get("http://10.200.17.141:5103/api/ChatBot", {
        params: {
          lng: lang,
          question: q,
        },
      });

      setChat((p) => [
        ...p,
        { sender: "bot", text: res.data?.answer || "No answer" },
      ]);
    } catch (err) {
      setChat((p) => [...p, { sender: "bot", text: "Error" }]);
    } finally {
      setLoading(false);
    }
  };

  // 4️⃣ TYPE QUESTION DIRECTLY
  const sendMessage = async () => {
    if (!input.trim()) return;

    const msg = input;
    setInput("");

    setChat((p) => [...p, { sender: "user", text: msg }]);
    setLoading(true);

    try {
      const res = await axios.get("http://10.200.17.141:5103/api/ChatBot", {
        params: {
          lng: lang,
          question: msg,
        },
      });

      setChat((p) => [
        ...p,
        { sender: "bot", text: res.data?.answer || "No answer found" },
      ]);
    } catch (err) {
      setChat((p) => [...p, { sender: "bot", text: "Server error" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <div style={styles.header}>ChatBot</div>

        {/* LANGUAGE */}
        {!lang && (
          <div style={styles.langBox}>
            <button onClick={() => selectLanguage("az")} style={styles.btn}>AZ</button>
            <button onClick={() => selectLanguage("en")} style={styles.btn}>EN</button>
            <button onClick={() => selectLanguage("ru")} style={styles.btn}>RU</button>
          </div>
        )}

        {/* CATEGORIES */}
        {categories.length > 0 && (
          <div style={styles.box}>
            {categories.map((c, i) => (
              <button
                key={i}
                onClick={() => selectCategory(c)}
                style={styles.item}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        {/* QUESTIONS */}
        {questions.length > 0 && (
          <div style={styles.box}>
            {questions.map((q, i) => (
              <button
                key={i}
                onClick={() => selectQuestion(q.question)}
                style={styles.item}
              >
                {q.question}
              </button>
            ))}
          </div>
        )}

        {/* CHAT */}
        <div style={styles.chat}>
          {chat.map((c, i) => (
            <div
              key={i}
              style={{
                textAlign: c.sender === "user" ? "right" : "left",
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: 8,
                  borderRadius: 10,
                  background: c.sender === "user" ? "#4f46e5" : "#e5e7eb",
                  color: c.sender === "user" ? "white" : "black",
                }}
              >
                {c.text}
              </span>
            </div>
          ))}

          {loading && <div>🤖 typing...</div>}
          <div ref={chatEndRef} />
        </div>

        {/* INPUT */}
        {lang && (
          <div style={styles.inputBox}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask question..."
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} style={styles.send}>
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },
  container: {
    width: 420,
    height: 700,
    background: "white",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: 10,
    background: "#111827",
    color: "white",
    textAlign: "center",
  },
  langBox: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    padding: 10,
  },
  btn: {
    padding: 10,
    cursor: "pointer",
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    padding: 10,
  },
  item: {
    padding: "5px 10px",
    border: "1px solid #ccc",
    borderRadius: 20,
    cursor: "pointer",
    fontSize: 12,
  },
  chat: {
    flex: 1,
    padding: 10,
    overflowY: "auto",
    background: "#f3f4f6",
  },
  inputBox: {
    display: "flex",
    padding: 10,
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: 8,
  },
  send: {
    marginLeft: 6,
    padding: "8px 12px",
    background: "#111827",
    color: "white",
    border: "none",
  },
};

export default ChatBot;