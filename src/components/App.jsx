import React from 'react';
import { Container, FirstTitle, SecondTitle, Button } from './App.styled.js';

function App() {
const [count, setCount] = React.useState(0); // React Hook useState, в який передаємо змінну count та функцію оновлення значення змінної setCount

const onClickPlus = () => {
  setCount(count + 1);
};

const onClickMinus = () => {
  setCount(count - 1);
};

  return (
    <Container>
      <div>
        <FirstTitle>Лічильник:</FirstTitle>
        <SecondTitle>{count}</SecondTitle>
        <Button onClick={onClickMinus} className="minus">- Мінус</Button>
        <Button onClick={onClickPlus} className="plus">Плюс +</Button>
      </div>
    </Container>
  );
}

export default App;
