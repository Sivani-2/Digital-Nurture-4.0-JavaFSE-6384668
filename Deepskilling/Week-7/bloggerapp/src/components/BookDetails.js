function BookDetails(props) {
  const bookdet = (
    <ul>
      {props.books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>📚 Book Details</h2>
      {bookdet}
    </div>
  );
}

export default BookDetails;