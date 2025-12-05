import { useEffect, useRef, useState } from "react";
// here we declare the message interface = type
interface Message{
    id:number;
    author:"user"|"bot";
    text:string
}
// create simple database of messages 
// on va utiliser Map: structure de données nous permettade stocker les données sous forme de paire cle valeur
const bot_responses:Map<string,string>=new Map([
    ["hello","Hi there! How can I assist you today?"],
    ["how are you?","I'm just a bot, but thanks for asking! How can I help you?"],  
    ["what is your name?","I am ChatBot, your virtual assistant."],
    ["bye","Goodbye! Have a great day!"]
]); 
const default_answer:string="I'm sorry, I don't understand. Can you please rephrase?" 

const ChatBot = () => {
    console.log(bot_responses.get("hello"))
// we need a variable to stock user's input
const [input,setInput]=useState<string>("");
// wwe need an an array elli bech n7oto fih l'historique mte3 el messages
const [messages,setMessages]=useState<Message[]>([]);
// the two side effects(code runs after the page reloads) that we gonna do are: focus on the the input and the auto scroll down everytime the a message is sent

const chatContainer = useRef<HTMLDivElement>(null);
const inputRef = useRef<HTMLInputElement>(null);
//think of useRef like a sticky note that says this points to that div 

useEffect(()=>{
   // first side effect : focus on the input box 

},[]);
useEffect(()=>{
   // second side effect : scroll to the bottom of the chat window when a new message is added

},[....]);
function getBotResponse(userMessage:string):string{
// clean the input
  const cleaned = userMessage.toLowerCase().trim();
for(const [key,value] of bot_responses){
    if(cleaned.includes(key)){
        return value;
    }
}
return default_answer;
}
// we need a function to handle form submission
function handleSend(e:React.FormEvent){
    e.preventDefault(); // prevent the default behavior of the form which is to reload the page everytime we submit
    if(input.trim()==="") return; // if the input is empty we do nothing
    //create  a new message from the user
    const userMessage: Message = {
        id:Date.now(),
        author:"user",
        text:input
    };  
    // get the bot response :
    const botMessage: Message = {
    id: Date.now() + 1, 
    author: "bot",
    text: getBotResponse(input)  
  };
    // update the messages state
    // if i did setMessages([userMessage,botMessage]) it will replace the previous messages with the new but i want to keep the old ones so I do 
    // this ...prevMessages it will keep the previous messages and add the new ones
    setMessages(prevMessages=>[...prevMessages,userMessage,botMessage]);
    //  Clear the input box
  setInput("");
}
return (
  <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-4">
    <h1 className="text-xl font-semibold mb-3 text-center">Mini Chatbot 🤖</h1>
    
    <div
      ref={chatContainer}
      className="h-72 overflow-y-auto border rounded p-3 space-y-3 bg-gray-50"
    >

      {messages.map(msg => (
        <div
          key={msg.id}
          className={`p-3 rounded-lg max-w-[80%] ${
            msg.author === "user"
              ? "bg-blue-500 text-white ml-auto"   
              : "bg-gray-200 text-gray-800"        
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
    
    <form onSubmit={handleSend} className="mt-4 flex gap-2">
      <input
        ref={inputRef}
        type="text"
        className="flex-1 border p-2 rounded"
        placeholder="Type your message…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  </div>
);
}
export default ChatBot;