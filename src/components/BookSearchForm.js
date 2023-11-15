import styled from '@emotion/styled';
import React from 'react'

const BookSearchForm = ({ onChange, onSubmit, searchTerm }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input 
        type='search' 
        placeholder='책 이름을 검색해주세요.' 
        onChange={onChange} 
        value={searchTerm}/>
      <Button type='submit'>Search</Button>
    </Form>
  )
}

export default BookSearchForm

const Form = styled.form``;

const Input = styled.input`
  outline: none;
  padding: .6rem 1rem;
  border: 1px solid #5E503F;
  border: 3px;
  min-width: 280px;

  &:focus,
  &:active {
    border-color: #221F1B;
  }

  @media (max-width: 778px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  background-color: #5E503F;
  color: #F2F4F3;
  padding: 1rem;
  margin-left: 15px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  
  &:hover {
    background-color: #DED6CE;
    color: #221F1B;
  }
`;