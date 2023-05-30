import React from 'react';
import styled from 'styled-components';
import Underlining from '../styles/underlining';

const CardWrapper = styled.div`
  flex: 0 0 auto;
  width: 300px;
  height: 200px;
  /* background-color: #f0f0f0; */
  border-radius: 8px;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  .card {
    width: 17.25rem;
    height: 12.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin: 2rem 1rem;

    box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.card};
    transition: box-shadow 0.3s ease-out;
    &:hover {
      box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadowHover};
    }
    &:hover ${Underlining} {
      box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondary};
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      margin: 2rem 2.5rem 2rem 0;
    }

    .category {
      color: ${({ theme }) => theme.colors.primary};
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
    }
    .title {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
    }
    .date {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.subtext};
      letter-spacing: 0.5px;
    }
  }
`;

const CardName = styled.h2`
  font-size: 20px;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
`;

const CardDate = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 16px;
`;

const Card = ({ name, date, description }) => {
  return (
    <CardWrapper>
      <div className='card'>
        <CardName>
          <span className='category'>
            <Underlining color='tertiary' hoverColor='secondary'>
              {name}
            </Underlining>
          </span>
        </CardName>
        <CardDate>Date Created: {date}</CardDate>
        <CardDescription>{description}</CardDescription>
      </div>
    </CardWrapper>
  );
};

export default Card;
