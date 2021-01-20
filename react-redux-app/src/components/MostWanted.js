import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMostWanted } from '../actions';
import styled from 'styled-components';

const MostWanted = ({image, isFetching, error, getMostWanted}) => {
    useEffect(() => {
      }, []);
      
    const handleClick = () => {
        getMostWanted();
    }

    if (error) {
        return <H2>We encountered an error... {error}</H2>;
      }
    
    if (isFetching) {
        return <H2>Fetching Data...</H2>; 
    }

    return(
        <StyledDiv>
            <H1>Random Image Below:</H1> 
            <Button onClick={handleClick}>Get Image</Button>
            <Image imgUrl={image} />
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

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    align-content:center;
    justify-content:center;
`

const Image = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-content:center;
    height:900px;
    justify-content:center;
    align-items:center;
    justify-items:center;
    margin:0 auto;
    background: url(${(props)=>props.imgUrl}) no-repeat; 
    background-size:500px;
    
`
const H1 = styled.h1`
    color:white;
    font-size:4rem;
    text-align:center;
    font-weight:bolder;
`
const Button = styled.button`
    padding:2rem 5rem;
    border-radius:4px;
    margin-top:0%;
    font-size:1rem;
`

const H2 = styled.h2`
color:white;
background-color:black;
width:100%;
height:auto;
`
