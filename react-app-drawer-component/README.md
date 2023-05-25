#### Logic

- when user clicks on the menu icon (open menu):

  - the menu appears on the left side of the page
    - CSS: When the menu drawer is open you can show it with `transform: translateX(0)`;
  - rest of the page on the right has a shade
    - CSS: `opacity: 0.5`;
    - CSS: it can capture all mouse clicks with `pointer-events: all`;

- when user clicks on the links (inside menu bar) OR the shaded area(close menu):

  - menu disappears
    - CSS: When the menu drawer is closed you can hide it with transform: `translateX(-283px)`;
  - shade disappears
    - CSS: When the menu is closed, the shade can be hidden with `opacity: 0`;
    - CSS: all mouse clicks pass through to elements beneath it with `pointer-events: none`;

- CSS: animate the transition between open/close:
  - `transition: transform 0.2s ease-in-out;`

Website (menu bar list -- inside App.js)

- Home
- About
- Pricing
- Contact
- Book Now

Components

- App()
- menu bar list
  - FaBars()
    - handleClick function to decide what to display: menu or the page (open menu vs. close menu)
  - Shade()
    - toggle className to shade or unshade when clicked
  - RenderMenu()
    - rendering function to display the selected display (menu or the page)

Accordion Example

```JavaScript
export default function Accordion({ topics }) {
  const [activeIndex, setActiveIndex] = useState();
  function handleClick(index) {
    index === activeIndex ? setActiveIndex() : setActiveIndex(index);
  }
  return (
    <RenderTopics
      topics={topics}
      onClick={handleClick}
      currentIndex={activeIndex}
    />
  );
}

function RenderTopics({ topics, onClick, currentIndex }) {
  const topicsList = topics.map((topics, index) => (
    <div key={index} className="topics-wrap">
      <h1 onClick={() => onClick(index)}>{topics.title}</h1>
      {currentIndex === index && <p>{topics.text}</p>}
    </div>
  ));
  return <div>{topicsList}</div>;
}
```

#### Accordion()

- Accordion manages state of active index of the topics using activeIndex
- the handleClick function updates the activeIndex by setting setActiveIndex to the clicked index or removing it if it is already matching index
- the prop topics array is passed from parent (App()) to Accordion
- Accordion returns the RenderTopics component, passing to it topics, onClick, and currentIndex

#### RenderTopics()

- RenderTopics receives list of topics , currentIndex, and click handler function as props (from Accordion -- parent) and renders the topics to be displayed
- topics uses the map method to transform the topics array
- onClick is passed from Accordion(parent) to handle when the user clicks on the title
- currentIndex to determine which content should be displayed by comparing the currentIndex with the index that was passed
- RenderTopics renders and returns jsx elements of the selected index
