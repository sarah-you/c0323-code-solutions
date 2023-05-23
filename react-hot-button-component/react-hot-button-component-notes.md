# react-hot-button-component-notes

## Notes

```JavaScript
import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);

 function handleClick() {
setIsClicked(!isClicked)
 }

const bkgColor = isClicked ? color : 'white';

return (
<button onClick={handleClick} style={{ backgroundColor : color}}>{text}</button>
);
}
```

if statements for clicks -> updates the className for button -> className is used to set CSS rule for each background color (and text colors)

#### background colors

- 3 clicks: #351C74
- 6 clicks: #674EA7
- 9 clicks: #E06666
- 12 clicks: #F6B26A
- 15 clicks: #FFFF00
- 18 clicks: #FFFFFF
