import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá
        <button title='Timer'>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        exercitationem enim voluptates recusandae unde dicta reprehenderit et
        ratione, odio saepe dolor illum impedit labore vero temporibus aliquam
        rem nemo. Culpa!
      </p>
    </>
  );
}
