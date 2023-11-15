import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Header, HeaderContainer, LogoText } from '../components/Shared';
import Loader from '../components/Loader';
import BookDetail from '../components/BookDetail';

const BookDetailPages = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `https://www.googleapis.com/books`;
    const fetchBook = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/v1/volumes/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }

    fetchBook();
  }, [bookId])

  return (
    <>
      <Header>
        <HeaderContainer>
          <Link to={'/'}>
            <LogoText>FIND BOOK</LogoText>
          </Link>
        </HeaderContainer>
      </Header>
      <Container>
        <Loader loading={loading}>
          <strong>{bookId}</strong>라는 북 ID를 가진 북 정보를 가져오고 있습니다.
        </Loader>
        {book.volumeInfo
          ? <BookDetail book={book} />
          : null
        } 
      </Container>
    </>
  )
}

export default BookDetailPages