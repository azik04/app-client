import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://10.200.17.141:5103/api/ChatBot",
});

export default function ChatBot() {
  const [chat, setChat] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    loadMainMenu();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, loading]);


  const loadMainMenu = async () => {
    try {
      setLoading(true);

      const res = await api.post("", {
        action: null,
        message: null,
      });

      setChat([
        {
          sender: "bot",
          text: res.data.message,
        },
      ]);

      setButtons(res.data.buttons || []);

    } catch (error) {

      console.error(error);

      setChat([
        {
          sender: "bot",
          text: "Server ilə əlaqə qurulmadı.",
        },
      ]);

    } finally {
      setLoading(false);
    }
  };


  const handleAction = async (button) => {

    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: button.text,
      },
    ]);


    try {

      setLoading(true);


      const res = await api.post("", {
        action: button.id,
        message: null,
      });


      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: res.data.message,
        },
      ]);


      setButtons(res.data.buttons || []);


    } catch (error) {

      console.error(error);

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Xəta baş verdi.",
        },
      ]);

    } finally {
      setLoading(false);
    }
  };



  const handleSend = async () => {

    if (!message.trim()) return;


    const userText = message;


    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
      },
    ]);


    setMessage("");


    try {

      setLoading(true);


      const res = await api.post("", {
        action: null,
        message: userText,
      });


      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: res.data.message,
        },
      ]);


      setButtons(res.data.buttons || []);



    } catch(error){

      console.error(error);


      setChat((prev)=>[
        ...prev,
        {
          sender:"bot",
          text:"Xəta baş verdi."
        }
      ]);

    }
    finally{
      setLoading(false);
    }

  };



  return (

    <div style={styles.page}>


      <div style={styles.container}>


        <div style={styles.header}>
          ADRA Virtual Köməkçi
        </div>



        <div style={styles.chat}>


          {chat.map((item,index)=>(

            <div
              key={index}
              style={{
                textAlign:
                  item.sender==="user"
                  ? "right"
                  : "left",

                marginBottom:10,
              }}
            >


              <span
                style={{
                  display:"inline-block",
                  padding:"10px 14px",
                  borderRadius:12,
                  maxWidth:"85%",
                  whiteSpace:"pre-wrap",

                  background:
                  item.sender==="user"
                  ? "#4f46e5"
                  : "#e5e7eb",


                  color:
                  item.sender==="user"
                  ? "#fff"
                  : "#111",
                }}
              >

                {item.text}

              </span>


            </div>

          ))}




          {
            loading &&
            <div>
              🤖 Yazır...
            </div>
          }



          <div ref={chatEndRef}/>


        </div>





        <div style={styles.footer}>


          <div style={styles.buttonsContainer}>


            {
              buttons.map((btn)=>(

                <button

                  key={btn.id}

                  style={styles.button}

                  onClick={()=>
                    handleAction(btn)
                  }

                >

                  {btn.text}


                </button>

              ))
            }


          </div>





          <div style={styles.inputContainer}>


            <input

              value={message}

              onChange={(e)=>
                setMessage(e.target.value)
              }


              onKeyDown={(e)=>{

                if(e.key==="Enter"){
                  handleSend();
                }

              }}


              placeholder="Sualınızı yazın..."

              style={styles.input}

            />



            <button

              onClick={handleSend}

              style={styles.sendButton}

            >

              Göndər

            </button>



          </div>



        </div>





      </div>


    </div>

  );
}






const styles = {


page:{

height:"100vh",

background:"#0f172a",

display:"flex",

justifyContent:"center",

alignItems:"center",

},




container:{

width:450,

height:750,

background:"#fff",

borderRadius:12,

overflow:"hidden",

display:"flex",

flexDirection:"column",

boxShadow:"0 10px 30px rgba(0,0,0,.25)"

},




header:{

background:"#111827",

color:"#fff",

textAlign:"center",

padding:15,

fontWeight:600,

fontSize:18,

},




chat:{

flex:1,

overflowY:"auto",

padding:15,

background:"#f3f4f6",

},





footer:{

borderTop:"1px solid #ddd",

background:"#fff",

},




buttonsContainer:{

padding:10,

display:"flex",

flexWrap:"wrap",

gap:8,

},




button:{

border:"1px solid #d1d5db",

background:"#fff",

borderRadius:20,

padding:"8px 12px",

cursor:"pointer",

fontSize:13,

},




inputContainer:{

display:"flex",

gap:8,

padding:10,

borderTop:"1px solid #ddd",

},





input:{

flex:1,

padding:"10px",

border:"1px solid #d1d5db",

borderRadius:8,

fontSize:14,

outline:"none",

},




sendButton:{

background:"#4f46e5",

color:"#fff",

border:"none",

borderRadius:8,

padding:"10px 18px",

cursor:"pointer",

}

};