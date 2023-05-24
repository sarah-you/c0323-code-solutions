import './App.css';
import Accordion from './Accordion';

function App() {
  const topics = [
    {
      title: 'Hypertext Markup Language',
      text: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
    },
    {
      title: 'Cascading Style Sheets',
      text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing a presentation of a document written in a markup language with HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.',
    },
    {
      title: 'JavaScript',
      text: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.JavaScript has curly. bracket syntax, dynamic typing, prototype-based obiect-orientation.and first-class functions.',
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <Accordion topics={topics} />
      </div>
    </div>
  );
}

export default App;
