// React Working ---------*
// const BasicsOfJsx = () => {
//   return (
//     <section id="section">
//       <h1>My Website</h1>
//       <article>
//         <h2>Welcome To React.</h2>
//         <p className="text">This is the paragraph content.</p>
//       </article>
//     </section>
//   );
// };

// Bebel Working ---------*
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const BasicsOfJsx = () => {
  return _jsxs("section", {
    id: "section",
    children: [
      _jsx("h1", {
        children: "My Website",
      }),
      _jsxs("article", {
        children: [
          _jsx("h2", {
            children: "Welcome To React.",
          }),
          _jsx("p", {
            class: "text",
            children: "This is the paragraph content.",
          }),
        ],
      }),
    ],
  });
};

export default BasicsOfJsx;
