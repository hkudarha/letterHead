// import React, { useState } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import ReactMarkdown from "react-markdown";
// import { createRoot } from "react-dom/client";
// import letterhead from "../../assets/letterhead.jpg";

// const LetterGenerator = () => {
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(false); 
//   const CONTENT_TOP = 150;
//   const CONTENT_BOTTOM = 200;
//   const PAGE_HEIGHT = 1170;

//   const CONTENT_HEIGHT = PAGE_HEIGHT - CONTENT_TOP - CONTENT_BOTTOM;

//   const splitContentIntoPages = (text) => {
//     const lines = text.split("\n");
//     const pages = [];
//     let current = [];

//     const MAX_LINES = 24;

//     lines.forEach((line) => {
//       if (current.length < MAX_LINES) {
//         current.push(line);
//       } else {
//         pages.push(current.join("\n"));
//         current = [line];
//       }
//     });

//     if (current.length) pages.push(current.join("\n"));

//     return pages;
//   };

//   const waitForRender = () =>
//     new Promise((resolve) => requestAnimationFrame(resolve)); 

//   const downloadPDF = async () => {
//     if (loading) return; 

//     setLoading(true);

//     const pages = splitContentIntoPages(content);
//     const pdf = new jsPDF("p", "mm", "a4");

//     for (let i = 0; i < pages.length; i++) {
//       const container = document.createElement("div");

//       container.style.width = "794px";
//       container.style.height = "1170px";
//       container.style.position = "fixed"; 
//       container.style.top = "-9999px"; 
//       container.style.background = "white";

//       container.innerHTML = `
//         <div style="position:relative; width:794px; height:1170px;">
//           <img src="${letterhead}" style="width:100%; height:100%;" />
//           <div id="md-content" style="
//             position:absolute;
//             top:${CONTENT_TOP}px;
//             left:80px;
//             right:80px;
//             height:${CONTENT_HEIGHT}px;
//             overflow:hidden;
//             font-family:serif;
//             line-height:1.8;
//           "></div>
//         </div>
//       `;

//       document.body.appendChild(container);

//       const mdDiv = container.querySelector("#md-content");

//       const root = createRoot(mdDiv);
//       root.render(
//         <ReactMarkdown
//           components={{
//             p: ({ children }) => (
//               <p style={{ marginBottom: "10px" }}>{children}</p>
//             ),
//           }}
//         >
//           {pages[i]}
//         </ReactMarkdown>
//       );

//       await waitForRender();
//       await waitForRender();

//       const canvas = await html2canvas(container, {
//         scale: 2,
//         useCORS: true,
//       });

//       const imgData = canvas.toDataURL("image/png");

//       if (i !== 0) pdf.addPage();
//       pdf.addImage(imgData, "PNG", 0, 0, 210, 295);

//       root.unmount();
//       document.body.removeChild(container);
//     }

//     pdf.save("letter.pdf");
//     setLoading(false);
//   };

//   return (
//     <div className="bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto grid gap-10">

//         {/* INPUT */}
//         <div className="bg-white shadow-xl rounded-xl p-6">
//           <h2 className="text-2xl font-semibold mb-4">
//             Letter Generator (Markdown Supported)
//           </h2>

//           <textarea
//             rows={10}
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full p-3 border rounded font-mono"
//           />

//           <button
//             onClick={downloadPDF}
//             disabled={loading}
//             className={`mt-4 px-4 py-3 rounded text-white ${
//               loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
//             }`}
//           >
//             {loading ? "Generating PDF..." : "Download PDF"}
//           </button>
//         </div>

//         {/* PREVIEW */}
//         <div className="flex justify-center">
//           <div className="shadow-2xl bg-white">
//             <div
//               style={{
//                 width: "794px",
//                 height: "1170px",
//                 position: "relative",
//               }}
//             >
//               <img
//                 src={letterhead}
//                 alt="letterhead"
//                 style={{ width: "100%", height: "100%" }}
//               />

//               <div
//                 style={{
//                   position: "absolute",
//                   top: `${CONTENT_TOP}px`,
//                   left: "80px",
//                   right: "80px",
//                   height: `${CONTENT_HEIGHT}px`,
//                   overflow: "hidden",
//                   fontFamily: "serif",
//                   lineHeight: "1.8",
//                 }}
//               >
//                 <ReactMarkdown
//                   components={{
//                     p: ({ children }) => (
//                       <p style={{ marginBottom: "10px" }}>{children}</p>
//                     ),
//                   }}
//                 >
//                   {content || "Type **markdown** content here..."}
//                 </ReactMarkdown>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default LetterGenerator;

import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactMarkdown from "react-markdown";
import { createRoot } from "react-dom/client";
import letterhead from "../../assets/letterhead.jpg";

const LetterGenerator = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const CONTENT_TOP = 150;
  const CONTENT_BOTTOM = 250;
  const PAGE_HEIGHT = 1170;
  const CONTENT_HEIGHT = PAGE_HEIGHT - CONTENT_TOP - CONTENT_BOTTOM;

  const waitForRender = () =>
    new Promise((resolve) => requestAnimationFrame(resolve));

  // ✅ NEW: HEIGHT BASED PAGINATION
  const splitContentIntoPages = async (text) => {
    const tempDiv = document.createElement("div");
    tempDiv.style.position = "fixed";
    tempDiv.style.top = "-9999px";
    tempDiv.style.width = "634px"; // 794 - (80 + 80 padding)
    tempDiv.style.fontFamily = "serif";
    tempDiv.style.lineHeight = "1.8";

    document.body.appendChild(tempDiv);

    const root = createRoot(tempDiv);
    root.render(<ReactMarkdown>{text}</ReactMarkdown>);

    await waitForRender();
    await waitForRender();

    const children = Array.from(tempDiv.childNodes);

    const pages = [];
    let currentPage = document.createElement("div");

    tempDiv.innerHTML = "";

    for (let node of children) {
      currentPage.appendChild(node.cloneNode(true));
      tempDiv.appendChild(currentPage);

      if (currentPage.scrollHeight > CONTENT_HEIGHT) {
        currentPage.removeChild(currentPage.lastChild);
        pages.push(currentPage.innerHTML);

        currentPage = document.createElement("div");
        currentPage.appendChild(node.cloneNode(true));
      }
    }

    if (currentPage.innerHTML) {
      pages.push(currentPage.innerHTML);
    }

    root.unmount();
    document.body.removeChild(tempDiv);

    return pages;
  };

  const downloadPDF = async () => {
    if (loading) return;
    setLoading(true);

    const pages = await splitContentIntoPages(content);
    const pdf = new jsPDF("p", "mm", "a4");

    for (let i = 0; i < pages.length; i++) {
      const container = document.createElement("div");

      container.style.width = "794px";
      container.style.height = "1170px";
      container.style.position = "fixed";
      container.style.top = "-9999px";
      container.style.background = "white";

      container.innerHTML = `
        <div style="position:relative; width:794px; height:1170px;">
          <img src="${letterhead}" style="width:100%; height:100%;" />
          <div id="md-content" style="
            position:absolute;
            top:${CONTENT_TOP}px;
            left:80px;
            right:80px;
            height:${CONTENT_HEIGHT}px;
            overflow:hidden;
            font-family:serif;
            line-height:1.8;
          "></div>
        </div>
      `;

      document.body.appendChild(container);

      const mdDiv = container.querySelector("#md-content");
      mdDiv.innerHTML = pages[i]; // ✅ already split HTML

      await waitForRender();
      await waitForRender();

      const canvas = await html2canvas(container, {
        scale: 3, // 🔥 high quality
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");

      if (i !== 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 295);

      document.body.removeChild(container);
    }

    pdf.save("letter.pdf");
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid gap-10">

        {/* INPUT */}
        <div className="bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Letter Generator (Markdown Supported)
          </h2>

          <textarea
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border rounded font-mono"
          />

          <button
            onClick={downloadPDF}
            disabled={loading}
            className={`mt-4 px-4 py-3 rounded text-white ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
            }`}
          >
            {loading ? "Generating PDF..." : "Download PDF"}
          </button>
        </div>

        {/* PREVIEW */}
        <div className="flex justify-center">
          <div className="shadow-2xl bg-white">
            <div
              style={{
                width: "794px",
                height: "1170px",
                position: "relative",
              }}
            >
              <img
                src={letterhead}
                alt="letterhead"
                style={{ width: "100%", height: "100%" }}
              />

              <div
                style={{
                  position: "absolute",
                  top: `${CONTENT_TOP}px`,
                  left: "80px",
                  right: "80px",
                  height: `${CONTENT_HEIGHT}px`,
                  overflow: "hidden",
                  fontFamily: "serif",
                  lineHeight: "1.8",
                }}
              >
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p style={{ marginBottom: "10px", fontSize: "14px" }}>
                        {children}
                      </p>
                    ),
                  }}
                >
                  {content || "Type **markdown** content here..."}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LetterGenerator;