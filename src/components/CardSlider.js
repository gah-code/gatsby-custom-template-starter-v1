import React from 'react';
import styled from 'styled-components';
import Underlining from '../styles/underlining';
import Card from './Card';

const SliderContainer = styled.div`
  /* width: 100%; */
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 3rem 1.2rem;
  margin: 0 1rem;
`;

const CardSlider = () => {
  return (
    <SliderContainer>
      <Card
        name='Article Name'
        date='May 26, 2023'
        description='This is a short description about the related article.'
      />
      <Card>Card 2</Card>
      <Card>Card 3</Card>
      <Card>Card 4</Card>
      <Card>Card 5</Card>
    </SliderContainer>
  );
};

export default CardSlider;
