// import React, { useState } from 'react';
// import './App.css';
// import { API_KEY, URL } from './constants';

// const App = () => {
//   const [question, setQuestion] = useState('');
//   const [result, setResult] = useState(undefined);
//   const [error, setError] = useState(undefined);

//   const buildPayload = (text) => ({
//     contents: [
//       {
//         parts: [
//           {
//             text,
//           },
//         ],
//       },
//     ],
//   });

// // `${URL}?key=${API_KEY}`

// const askQuestion = async () =>{
//   setError(undefined);
//   setResult(undefined);
//   try {
//     const response = await fetch(`${URL}?key=${API_KEY}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(buildPayload(question || 'Say hello')),
//     });

//     if (!response.ok) {
//       const text = await response.text();
//       throw new Error(`HTTP ${response.status}: ${text}`);
//     }

//     const data = await response.json();
//     const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
//     if (!text) {
//       throw new Error('No text found in API response');
//     }
//     setResult(text);
//   } catch (e) {
//     setError(e.message);
//   }
// };

//   return (
//     <div className="grid grid-cols-5 h-screen text-center">
//       <div className="col-span-1 bg-zinc-800"></div>

//       <div className="col-span-4 p-10 ">
//         <div className="container h-170 w-1/2">
//         <div className='text-white overflow-scroll h-96'>
//           {error && (
//             <div className="text-red-400 text-sm mb-2">{error}</div>
//           )}
//           {result}
//         </div>
//         </div>
//         <div className="bg-zinc-800 w-1/2 p-1 pr-5 text-white m-auto rounded-4xl border border-zinc-100 flex h-16">
//           <input
//             type="text"
//             value={question}
//             onChange={(event) => setQuestion(event.target.value)}
//             className="w-full h-full p-3 outline-none"
//             placeholder="Ask me Anything"
//           />
//           <button onClick={askQuestion}>Ask</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
 

// import React, { useState } from 'react';
// import './App.css';
// import { API_KEY, URL } from './constants';

// const App = () => {
//   const [question, setQuestion] = useState('');
//   const [result, setResult] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const buildPayload = (text) => ({
//     contents: [
//       {
//         parts: [{ text }],
//       },
//     ],
//   });

//   const askQuestion = async () => {
//     if (!question.trim()) return;
    
//     setError('');
//     setResult('');
//     setLoading(true);

//     try {
//       const response = await fetch(`${URL}?key=${API_KEY}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(buildPayload(question)),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`HTTP ${response.status}: ${errorText}`);
//       }

//       const data = await response.json();
      
//       // Safe navigation for Gemini API response
//       const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
//                    data?.error?.message || 'No response received';
      
//       setResult(text);
//     } catch (e) {
//       console.error('API Error:', e);
//       setError(e.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="grid grid-cols-5 h-screen text-center">
//       <div className="col-span-1 bg-zinc-800"></div>
      
//       <div className="col-span-4 p-10">
//         <div className="container mx-auto w-1/2">
//           <div className="text-white overflow-y-auto h-96 p-4 bg-zinc-900 rounded-lg border border-zinc-700 mb-4">
//             {error && (
//               <div className="text-red-400 text-sm mb-4 p-3 bg-red-900/30 rounded-lg border border-red-500">
//                 Error: {error}
//               </div>
//             )}
//             {result && (
//               <div className="whitespace-pre-wrap text-left">{result}</div>
//             )}
//             {!error && !result && (
//               <div className="text-zinc-400 italic">Ask a question to start chatting...</div>
//             )}
//           </div>
          
//           <div className="bg-zinc-800 w-1/2 mx-auto p-4 rounded-2xl border border-zinc-600 flex items-center h-16">
//             <input
//               type="text"
//               value={question}
//               onChange={(e) => setQuestion(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && askQuestion()}
//               className="flex-1 h-12 p-3 bg-transparent text-white outline-none placeholder-zinc-400"
//               placeholder="Ask me Anything..."
//               disabled={loading}
//             />
//             <button 
//               onClick={askQuestion}
//               disabled={!question.trim() || loading}
//               className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-600 text-white rounded-lg font-medium transition-colors"
//             >
//               {loading ? '...' : 'Ask'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// <div className="grid grid-cols-5 h-screen text-center">
//   <div className="col-span-1 bg-zinc-800"></div>

//   <div className="col-span-4 p-10">
//     <div className="container mx-auto w-1/2">
//       <div className="text-white overflow-y-auto h-96 p-4 bg-zinc-900 rounded-lg border border-zinc-700 mb-4">
//         {error && <div className="text-red-400 text-sm mb-4 p-3 bg-red-900/30 rounded-lg border border-red-500">Error: {error}</div>}
    //         {result && <div className="whitespace-pre-wrap text-left">{result}</div>}
    //         {!error && !result && <div className="text-zinc-400 italic">Ask a question to start chatting...</div>}
    //       </div>
    
    //       <div className="bg-zinc-800 w-1/2 mx-auto p-4 rounded-2xl border border-zinc-600 flex items-center h-16">
    //         <input
    //           type="text"
    //           value={question}
    //           onChange={(e) => setQuestion(e.target.value)}
    //           onKeyPress={(e) => e.key === 'Enter' && askQuestion()}
    //           className="flex-1 h-12 p-3 bg-transparent text-white outline-none placeholder-zinc-400"
    //           placeholder="Ask me Anything..."
    //           disabled={loading}
    //         />
    //         <button
    //           onClick={askQuestion}
    //           disabled={!question.trim() || loading}
    //           className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-600 text-white rounded-lg font-medium transition-colors"
    //         >
    //           {loading ? '...' : 'Ask'}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
    
    // -------------------------------------------------------------
    
    
    //     <div className="grid grid-cols-5 h-screen text-center bg-gradient-to-br from-slate-900 via-zinc-900 to-black">
    //   {/* Sidebar - Enhanced */}
    //   <div className="col-span-1 bg-gradient-to-b from-zinc-900/80 to-zinc-800/50 backdrop-blur-xl border-r border-zinc-700/50 flex flex-col p-6 gap-6">
    //     <div className="flex items-center gap-3">
    //       <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
    //         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    //         </svg>
    //       </div>
    //       <div>
    //         <h2 className="font-bold text-white text-lg">Gemini AI</h2>
    //         <p className="text-zinc-400 text-xs">2.5 Flash</p>
    //       </div>
    //     </div>
    
    //     <div className="flex-1 space-y-2">
    //       <button className="w-full p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center gap-3 text-left group">
    //         <div className="w-2 h-2 bg-emerald-400 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
    //         <span className="text-white font-medium">New Chat</span>
    //       </button>
    //       <button className="w-full p-3 rounded-2xl hover:bg-white/10 border border-transparent border-1 transition-all opacity-60 hover:opacity-100 flex items-center gap-3 text-left">
    //         <span className="text-zinc-400 text-sm">History</span>
    //       </button>
    //     </div>
    //   </div>
    
    //   {/* Main Content - Modern Chat */}
    //   <div className="col-span-4 p-8 flex flex-col justify-between">
    
    //     {/* Messages Container */}
    //     <div className="flex-1 overflow-hidden flex flex-col">
    //       <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 p-6 space-y-6">
    
    //         {/* Empty State */}
    //         {!error && !result && (
      //           <div className="h-full flex flex-col items-center justify-center text-zinc-400 space-y-4">
      //             <div className="w-24 h-24 bg-zinc-800/50 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-zinc-700/50">
      //               <svg className="w-12 h-12 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      //               </svg>
      //             </div>
      //             <div className="text-center">
      //               <h3 className="text-xl font-bold text-white mb-2">Welcome to Gemini</h3>
      //               <p className="text-zinc-400 max-w-md">Ask anything and get intelligent responses powered by Google Gemini 2.5 Flash</p>
      //             </div>
      //           </div>
      //         )}
      
      //         {/* Error Message */}
      //         {error && (
        //           <div className="max-w-2xl mx-auto bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-3xl p-6 shadow-xl animate-pulse">
        //             <div className="flex items-center gap-3">
        //               <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
        //               <div>
        //                 <p className="text-red-200 font-medium">Error</p>
        //                 <p className="text-red-300 text-sm mt-1">{error}</p>
        //               </div>
        //             </div>
        //           </div>
        //         )}
        
        //         {/* AI Response */}
        //         {result && (
          //           <div className="max-w-2xl ml-auto bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800/50 backdrop-blur-md border border-zinc-600/50 rounded-3xl p-8 shadow-2xl hover:shadow-zinc-500/25 transition-all duration-300 transform hover:-translate-y-1">
          //             <div className="flex items-start gap-4 mb-4">
          //               <div className="w-3 h-3 bg-emerald-400 rounded-full mt-1 flex-shrink-0 animate-pulse"></div>
          //               <div className="flex-1">
          //                 <p className="whitespace-pre-wrap text-zinc-100 leading-relaxed text-left">{result}</p>
          //                 <div className="mt-4 pt-4 border-t border-zinc-600/50 flex items-center gap-2 text-xs text-zinc-400">
          //                   <span>🤖 Gemini AI</span>
          //                   <div className="w-px h-3 bg-zinc-500"></div>
          //                   <span>{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          //                 </div>
          //               </div>
          //             </div>
          //           </div>
          //         )}
          //       </div>
          //     </div>
          
          //     {/* Input Area - Modern Design */}
          //     <div className="mt-8">
          //       <div className="max-w-2xl mx-auto">
          //         <div className="bg-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 rounded-3xl p-6 shadow-2xl hover:shadow-zinc-500/30 transition-all duration-300 hover:border-zinc-600/70">
          //           <div className="flex items-center gap-4">
          //             <input
          //               type="text"
          //               value={question}
          //               onChange={(e) => setQuestion(e.target.value)}
          //               onKeyPress={(e) => e.key === 'Enter' && askQuestion()}
          //               className="flex-1 h-16 px-6 py-4 bg-zinc-900/50 backdrop-blur-md border border-zinc-600/50 rounded-3xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-transparent transition-all duration-200 text-lg font-medium"
          //               placeholder="Ask Gemini anything..."
          //               disabled={loading}
          //             />
          //             <button
          //               onClick={askQuestion}
          //               disabled={!question.trim() || loading}
          //               className="group w-16 h-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 disabled:from-zinc-700 disabled:to-zinc-800 text-white rounded-3xl flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
          //             >
          //               {loading ? (
            //                 <div className="flex space-x-1">
            //                   <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            //                   <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            //                 </div>
            //               ) : (
              //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              //                 </svg>
              //               )}
              //             </button>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              
              
              // ----------------------------------------------------------------------------------------------
              
              // <div className="flex h-screen bg-[#1F1F1F] text-white">
              //   {/* Sidebar - Dark Gray */}
              //   <div className="w-64 bg-[#171717] border-r border-[#2F2F2F] flex flex-col pt-6 px-4">
              //     {/* Sidebar content simplified to placeholder, like in the image's context */}
              //   </div>
              
              //   {/* Main Content Area - Dark Background */}
              //   <div className="flex-1 flex flex-col items-center justify-end pb-12 px-4">
              
              //     {/* Content Area (Empty State matching the image) */}
              //     <div className="flex-1 w-full flex items-center justify-center">
              //       {/* Messages are hidden/not yet displayed in this empty state */}
              //     </div>
              
              //     {/* Input Area - Centered and Distinct */}
              //     <div className="w-full max-w-2xl mx-auto">
              //       <div className="flex items-center gap-2 bg-[#2E2E2E] rounded-3xl p-2 border border-[#3A3A3A]">
              //         <input
              //           type="text"
              //           value={question}
              //           onChange={(e) => setQuestion(e.target.value)}
              //           onKeyPress={(e) => e.key === 'Enter' && askQuestion()}
              //           className="flex-1 h-12 px-4 bg-transparent text-white placeholder-[#8A8A8A] focus:outline-none text-base"
              //           placeholder="Ask me anything"
              //           disabled={loading}
              //         />
              //         <button
              //           onClick={askQuestion}
              //           disabled={!question.trim() || loading}
              //           className="w-10 h-10 mr-1 bg-[#1A73E8] hover:bg-[#4285F4] disabled:bg-[#444444] text-white rounded-full flex items-center justify-center transition-colors"
              //         >
              //           {loading ? (
                //             // Minimal loading state (e.g., a simple white dot/pulse)
                //             <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                //           ) : (
                  //             // Placeholder for the Send Icon (If you decide to add the icon back)
                  //             <span className="text-white font-bold text-sm">Ask</span>
                  //           )}
                  //         </button>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                  
                  
                  // ---------------------------------------------
                  
                  // {/* <div className="flex h-screen bg-[#1F1F1F] text-white">
                  //   {/* Sidebar - Dark Gray */}
                  //   <div className="w-64 bg-[#171717] border-r border-[#2F2F2F] flex flex-col pt-6 px-4">
                  //     <div className="flex items-center gap-3 mb-8 p-3 rounded-2xl bg-[#2F2F2F]/50">
                  //       <div className="w-10 h-10 bg-gradient-to-r from-[#1A73E8] to-[#4285F4] rounded-xl flex items-center justify-center">
                  //         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  //         </svg>
                  //       </div>
                  //       <div>
                  //         <h2 className="font-bold text-white text-lg">Gemini AI</h2>
                  //         <p className="text-[#8A8A8A] text-xs">2.5 Flash</p>
                  //       </div>
                  //     </div>
                  
                  //     <div className="flex-1 space-y-2">
                  //       <button className="w-full p-3 rounded-2xl bg-[#2E2E2E]/50 hover:bg-[#2E2E2E] border border-[#3A3A3A]/50 transition-all flex items-center gap-3 text-left group">
                  //         <div className="w-2 h-2 bg-[#1A73E8] rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                  //         <span className="text-white font-medium">+ New Chat</span>
                  //       </button>
                  //     </div>
                  //   </div>
                  
                  //   {/* Main Content Area - Fixed Layout */}
                  //   <div className="flex-1 flex flex-col px-4">
                  
                  //     {/* Messages Area - FIXED: Now properly scrollable */}
                  //     <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6 scrollbar-thin scrollbar-thumb-[#3A3A3A] scrollbar-track-[#1F1F1F]">
                  
                  //       {/* Empty State - Only when no messages */}
                  //       {!result && !error && !loading && (
//         <div className="h-full flex flex-col items-center justify-center text-[#8A8A8A] space-y-4">
//           <div className="w-20 h-20 bg-[#2E2E2E] rounded-2xl flex items-center justify-center">
//             <svg className="w-10 h-10 text-[#5A5A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//             </svg>
//           </div>
//           <div className="text-center">
//             <h3 className="text-xl font-semibold text-white mb-2">Gemini</h3>
//             <p className="text-[#8A8A8A] max-w-sm">Ask anything and get intelligent responses</p>
//           </div>
//         </div>
//       )}

//       {/* Error Display */}
//       {error && (
  //         <div className="max-w-2xl mx-auto bg-[#2E2E2E]/80 backdrop-blur-sm border border-[#FF5252]/30 rounded-2xl p-6 animate-in slide-in-from-bottom-2">
  //           <div className="flex items-start gap-3">
  //             <div className="w-2 h-2 bg-[#FF5252] rounded-full mt-2 animate-pulse"></div>
  //             <div>
  //               <p className="text-[#FF5252] font-medium text-sm">Error</p>
  //               <p className="text-[#B0B0B0] text-sm mt-1">{error}</p>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  
  //       {/* AI Response - VISIBLE */}
  //       {result && (
    //         <div className="max-w-xl bg-[#2E2E2E] backdrop-blur-sm border border-[#3A3A3A] rounded-2xl p-6 shadow-2xl animate-in slide-in-from-bottom-4">
    //           <div className="flex items-start gap-4">
    //             <div className="w-8 h-8 bg-gradient-to-r from-[#1A73E8] to-[#4285F4] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
    //               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01" />
    //               </svg>
    //             </div>
    //             <div className="flex-1 min-w-0">
    //               <p className="text-white leading-relaxed whitespace-pre-wrap text-base">{result}</p>
    //               <div className="mt-4 pt-3 border-t border-[#3A3A3A]/50 flex items-center gap-2 text-xs text-[#8A8A8A]">
    //                 <span>🤖 Gemini AI</span>
    //                 <div className="w-px h-2 bg-[#3A3A3A]"></div>
    //                 <span>{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    
    //       {/* Loading State */}
    //       {loading && (
      //         <div className="max-w-xl mx-auto bg-[#2E2E2E]/80 backdrop-blur-sm border border-[#3A3A3A] rounded-2xl p-6">
      //           <div className="flex items-start gap-4">
      //             <div className="w-8 h-8 bg-gradient-to-r from-[#1A73E8] to-[#4285F4] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
      //               <div className="flex space-x-1">
      //                 <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
      //                 <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
      //                 <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      //               </div>
      //             </div>
      //             <div className="text-[#8A8A8A] text-sm">Gemini is typing...</div>
      //           </div>
      //         </div>
      //       )}
      //     </div>
      
      //     {/* Input Area - Your Original Design */}
      //     <div className="pb-12 px-6">
      //       <div className="w-full max-w-2xl mx-auto">
      //         <div className="flex items-center gap-2 bg-[#2E2E2E] rounded-3xl p-2 border border-[#3A3A3A]">
      //           <input
      //             type="text"
      //             value={question}
      //             onChange={(e) => setQuestion(e.target.value)}
      //             onKeyPress={(e) => e.key === 'Enter' && askQuestion()}
      //             className="flex-1 h-12 px-4 bg-transparent text-white placeholder-[#8A8A8A] focus:outline-none focus:ring-1 focus:ring-[#1A73E8]/50 text-base"
      //             placeholder="Ask me anything"
      //             disabled={loading}
      //           />
      //           <button
      //             onClick={askQuestion}
      //             disabled={!question.trim() || loading}
      //             className="w-10 h-10 mr-1 bg-[#1A73E8] hover:bg-[#4285F4] disabled:bg-[#444444] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#1A73E8]/25"
      //           >
      //             {loading ? (
        //               <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        //             ) : (
          //               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          //               </svg>
          //             )}
          //           </button>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div> */}
          
          // {/* <div className="flex h-screen bg-[#1F1F1F] text-white overflow-hidden">
          //   {/* Sidebar - Fixed width, doesn't scroll */}
          //   <div className="w-64 bg-[#171717] border-r border-[#2F2F2F] flex flex-col pt-6 px-4 flex-shrink-0">
          //     {/* Sidebar content */}
          //   </div>
          
          //   {/* Main Content Area - Scrolls independently */}
          //   <div className="flex-1 flex flex-col overflow-hidden">
          //     {/* Scrollable Content Area */}
          //     <div className="flex-1 overflow-y-auto px-4 py-12">
          //       {result && (
            //         <div className="w-full max-w-2xl mx-auto bg-[#2E2E2E] rounded-2xl p-6 border border-[#3A3A3A] mb-4 max-h-[60vh] overflow-y-auto">
            //           <p className="text-white whitespace-pre-wrap">{result}</p>
            //         </div>
            //       )}
            //       {error && (
              //         <div className="w-full max-w-2xl mx-auto bg-red-900/50 rounded-2xl p-6 border border-red-500/50 mb-4 max-h-[60vh] overflow-y-auto">
              //           <p className="text-red-300 whitespace-pre-wrap">{error}</p>
              //         </div>
              //       )}
              //     </div>
              
              //     {/* Fixed Input Area - Always at bottom */}
              //     <div className="w-full max-w-2xl mx-auto px-4 pb-6 pt-4 bg-[#1F1F1F] flex-shrink-0">
              //       <div className="flex items-center gap-2 bg-[#2E2E2E] rounded-3xl p-2 border border-[#3A3A3A]">
              //         <input
              //           type="text"
              //           value={question}
              //           onChange={(e) => setQuestion(e.target.value)}
              //           onKeyPress={(e) => e.key === 'Enter' && askQuestion()}
              //           className="flex-1 h-12 px-4 bg-transparent text-white placeholder-[#8A8A8A] focus:outline-none text-base"
              //           placeholder="Ask me anything"
              //           disabled={loading}
              //         />
              //         <button
              //           onClick={askQuestion}
              //           disabled={!question.trim() || loading}
              //           className="w-10 h-10 mr-1 bg-[#1A73E8] hover:bg-[#4285F4] disabled:bg-[#444444] text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
              //         >
              //           {loading ? (
                //             <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                //           ) : (
                  //             <span className="text-white font-bold text-sm">Ask</span>
                  //           )}
                  //         </button>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div> */}
                  
                  
import React, { useState } from 'react';
import './App.css';
import { API_KEY, URL } from './constants';

const App = () => {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const buildPayload = (text) => ({
    contents: [
      {
        parts: [{ text }],
      },
    ],
  });

  const askQuestion = async () => {
    if (!question.trim()) return;

    setError('');
    setResult('');
    setLoading(true);

    try {
      const response = await fetch(`${URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(buildPayload(question)),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from API';
      setResult(text);
    } catch (e) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return (
 <div className="flex h-screen bg-[#1F1F1F] text-white overflow-hidden">
      {/* Sidebar (optional, hidden on small screens) */}
      <div className="w-64 bg-[#171717] border-r border-[#2F2F2F] flex flex-col pt-6 px-4 hidden lg:flex">
        {/* Sidebar content placeholder */}
        <div className="text-gray-400 text-center">Sidebar</div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Scrollable messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:py-12 bg-gradient-to-b from-[#1F1F1F] to-[#171717]">
          <div className="max-w-4xl mx-auto w-full space-y-4">
            {result && (
              <div className="bg-[#2E2E2E] rounded-2xl p-6 border border-[#3A3A3A] w-full whitespace-pre-wrap">
                {result}
              </div>
            )}
            {error && (
              <div className="bg-red-900/50 rounded-2xl p-6 border border-red-500/50 w-full whitespace-pre-wrap text-red-300">
                {error}
              </div>
            )}
            {!result && !error && (
              <div className="text-center text-[#8A8A8A] mt-20 text-lg">
                Ask me anything
              </div>
            )}
          </div>
        </div>

        {/* Fixed input area at the bottom */}
        <div className="w-full max-w-4xl mx-auto px-4 pb-6 pt-4 bg-[#1F1F1F] flex-shrink-0">
          <div className="flex items-end gap-3 bg-[#2E2E2E] rounded-3xl p-4 border border-[#3A3A3A] max-w-full">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  askQuestion();
                }
              }}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 resize-none max-h-32 h-12 px-4 py-2 bg-transparent text-white placeholder-[#8A8A8A] focus:outline-none rounded-xl scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            />
            <button
              onClick={askQuestion}
              disabled={!question.trim() || loading}
              className="w-12 h-12 bg-[#1A73E8] hover:bg-[#4285F4] disabled:bg-[#444444] text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0 shadow-lg"
              aria-label="Send question"
              title="Send"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>

);
};

export default App;
