import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMostWanted } from '../actions';
import styled from 'styled-components';

const MostWanted = ({image, isFetching, error, getMostWanted}) => {
    useEffect(() => {
        getMostWanted();
      }, []);
      
    const handleClick = (e) => {
        e.preventDefault();
        getMostWanted();
    }

    if (error) {
        return <h2>We encountered an error... {error}</h2>;
      }
    
    if (isFetching) {
        return <h2>Fetching Data...</h2>; 
    }

    return(
        <StyledDiv>
            <h1>Random Image Below:</h1> 
            <Image imgUrl={image} />
            <Button onClick={handleClick}>Get Image</Button>
        </StyledDiv>
    )
}

const mapStateToProps = state => {
  return {
    image: state.image,
    isFetching:state.isFetching,
    error:state.error,
  };
};

export default connect(mapStateToProps, { getMostWanted })(MostWanted);

const Image = styled.div`
    width: 100%;
    height:900px;
    background: url(${(props)=>props.imgUrl}) no-repeat; 
    background-size:500px;
`

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    width:25%;
    justify-content:center;
    justify-items:center;
    align-items:center;
    align-content:center;
`

const Button = styled.button`
    padding:2rem 5rem;
    border-radius:4px;
    margin-top:0%;
`