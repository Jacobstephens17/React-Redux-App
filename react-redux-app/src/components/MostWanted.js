import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMostWanted } from '../actions';
import styled from 'styled-components';

const MostWanted = ({image, isFetching, error, getMostWanted}) => {
    useEffect(() => {
        getMostWanted();
      }, []);
      
    const handleClick = () => {
        getMostWanted();
    }

    if (error) {
        return <h2>We encountered an error... {error}</h2>;
      }
    
    if (isFetching) {
        return <h2>Fetching Data...</h2>; 
    }

    return(
        <div>
            <h1>MOST WANTED: </h1>
            <h2>Image Below:</h2> 
            <Image imgUrl={image} />
            <button onClick={handleClick}>GetMostWanted</button>
        </div>
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
    width: 500px;
    height: 500px;
    background: url(${(props)=>props.imgUrl}); 
`