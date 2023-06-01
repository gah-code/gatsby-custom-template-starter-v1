import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  font-family: 'Coiny', sans-serif;
  line-height: 1;
  text-transform: uppercase;

  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;

  border-radius: 4px;
  background-image: linear-gradient(135deg, #263, #2618, #16a34a, #263);
  color: inherit;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1) rotate(-2deg);
  }
`;

const LargeButton = styled(Button)`
  font-size: 20px;
  padding: 20px 32px 17px;
`;

const AllCategoriesButton = styled(Button)`
  margin-bottom: 16px;
  width: 100%;
`;

const CategoryButton = styled(Button)`
  width: 100%;
  background-image: none;
`;

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

const Btn = ({ title, description, setCurrentCategory }) => {
  return (
    <>
      <Button>Button Test</Button>
    </>
  );
};

export default Btn;
