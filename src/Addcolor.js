import { useState } from 'react';
import { Colorbox } from './Colorbox';

function Addcolor() {
  const [colorlist, setcolorlist] = useState(["teal", "crimson", "orange"]);

  const [color, setcolor] = useState("");
  const styles = {
    background: color
  };
  return (
    <div>
      <input style={styles} type='text' onChange={(event) => setcolor(event.target.value)}></input>
      <button onClick={() => setcolorlist([...colorlist, color])}>Add Color</button>
      {colorlist.map((clrs) => (<Colorbox clr={clrs} />))}
    </div>

  );
}
