import React from 'react'

const BookDetail = ({ book }) => {
  const IMG_BASE_URL = `http://www.google.com/books`;

  return (
    <section>
      <div>
        <img 
            src={`${IMG_BASE_URL}/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          alt={`${book.volumeInfo.title} book`}
        />
        <div>
          <h3>
            <strong>책 이름: </strong>{book.volumeInfo.title}
          </h3>
          <p>
            <strong>저자: </strong>{book.volumeInfo.authors}
          </p>
          <p>
            <strong>출판 날짜: </strong>{book.volumeInfo.publishedDate}
          </p>
          <p>
            <strong>출판사: </strong>{book.volumeInfo.publisher}
          </p>
          <p>
            <strong>설명: </strong>{book.volumeInfo.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default BookDetail