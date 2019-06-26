import React, { useState } from 'react';
import Checkbox from './Checkbox';

function App() {
  // const [checked, setState] = useState(false)
  // const toggleCheckbox = () => setState(!checked)

  const [state, setState] = useState('unchecked');
  const nextStates = {
    'unchecked': 'checked',
    'checked': 'indeterminate',
    'indeterminate': 'unchecked'
  }

  const toggleCheckbox = () => setState(nextStates[state])

  return (
    <div>
      <div>
        <h4>Checkboxes</h4>
        <div>
          <Checkbox />
        </div>
        <div>
          <Checkbox checked />
        </div>
        <div>
          <Checkbox indeterminate />
        </div>
        <div>
          <Checkbox disabled />
        </div>
        <div>
          <Checkbox hasError />
        </div>
      </div>
      {/* <div>
      <h4>Test 1</h4>
      <div>
        <Checkbox onChange={toggleCheckbox} checked={checked} />
      </div>
      </div>
      <div> */}
      <h4>Test 2</h4>
      <div>
        <Checkbox
          onChange={toggleCheckbox}
          checked={state === 'checked'}
          indeterminate={state === 'indeterminate'}
        />
      </div>
      <div>
          <Checkbox />
        </div>
      </div>

    // </div>
  );
}

export default App;
