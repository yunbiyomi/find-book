import styled from '@emotion/styled'
import React, { useState } from 'react'
import BookSearchForm from '../components/BookSearchForm'

const SearchPage = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>FIND BOOK</LogoText>
          <HeaderSearchForm>
            <BookSearchForm />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
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