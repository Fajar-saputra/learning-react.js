const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);
const Header = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Cara buat komponent");
};
function MainContent() {
  return /*#__PURE__*/React.createElement("p", null, " ", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam corrupti tenetur quaerat fuga illum aliquid praesentium sit minus officia eum, asperiores fugit veniam consequuntur velit magni numquam ab pariatur suscipit aperiam? Dolores ab quam reiciendis rerum corporis eos est.");
}
const Footer = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("footer", null, "copy; right by ", /*#__PURE__*/React.createElement("b", null, "Fajar saputra"), " made 2025"));
};
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(MainContent, null), /*#__PURE__*/React.createElement(Footer, null));
}
container.render(/*#__PURE__*/React.createElement(App, null));