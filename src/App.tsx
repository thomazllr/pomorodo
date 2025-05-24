import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <label htmlFor='input'>task: </label>
            <input id='input' type='text' />
          </div>

          <div className='formRow'>
            <span>Lorem ipsum dolor sit amet</span>
          </div>

          <div className='formRow'>
            <span>Ciclos</span>
            <span>0 0 0 0 0</span>
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
