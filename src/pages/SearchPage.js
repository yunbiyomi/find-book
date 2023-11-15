import styled from '@emotion/styled'
import React, { useState } from 'react'
import BookSearchForm from '../components/BookSearchForm'
import axios from 'axios';
import Loader from '../components/Loader';
import BookList from '../components/BookList';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = `https://www.googleapis.com/books`;

  const fetchBooks = async () => {
    
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/v1/volumes?q=${searchTerm}`)
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = e => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetchBooks();
  }

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>FIND BOOK</LogoText>
          <HeaderSearchForm>
            <BookSearchForm 
              onChange={handleChange} 
              onSubmit={handleSubmit} 
              searchTerm={searchTerm}
            />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
      <Container>
        <Loader
          loading={loading}
        >
          "<strong>{searchTerm}</strong>" 책을 찾고 있습니다.
        </Loader>
        <BookList books={books} />
      </Container>
    </>
  )
}

export default SearchPage

const Header = styled.header`
  border-bottom: 1px solid #221F1B;
`;

const Container = styled.div`
  max-width: 960px;
  padding: 15px;
  margin: 0 auto;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;

  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoText = styled.h1`
  margin: 0;
`;

const HeaderSearchForm = styled.div`
  margin-left: auto;
`;