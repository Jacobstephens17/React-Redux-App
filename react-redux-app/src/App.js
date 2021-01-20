import React from 'react';
import MostWanted from './components/MostWanted';
import styled from 'styled-components'

function App() {
  return (
    <StyledDiv>
      <MostWanted/>
    </StyledDiv>
  );
}

export default App;
const StyledDiv = styled.div`
display:flex;
background-color:black;
align-items:center;
flex-direction:column;

`