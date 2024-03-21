import React, { useState } from "react";
import "../book-page1/bookupdateform.scss";
const Bookupdateform = () => {

    const [name, setName] = useState("");
    const [isbn, setIsbn] = useState("");
    const [shelfCode, setShelfCode] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [category, setCategory] = useState("");
    const [borrowed, ] = useState(false);
    const [returnDate, ] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      // Form verilerini işleme kodu
      console.log("Form gönderildi!");
    };

    const handleSetReturned = () => {
      // İade edildi olarak ayarla işlemini gerçekleştirme kodu
      console.log("İade edildi olarak ayarlandı!");
    };

  return (
    <div>
      
        <form className="disalan" onSubmit={handleSubmit}>
          <label className="ad" htmlFor="name">Adı:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={2}
            maxLength={80}
            required
          />
          <br />
          <label className="isbn" htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            pattern="\d{3}-\d{2}-\d{6}-\d{1,2}"
            maxLength={17}
            required
          />
          <br />
          <label className="rafkod" htmlFor="shelfCode">Raf Kodu:</label>
          <input
            type="text"
            id="shelfCode"
            value={shelfCode}
            onChange={(e) => setShelfCode(e.target.value)}
            pattern="[A-Za-z]{2}-\d{3}"
            maxLength={6}
            required
          />
          <br />
          <label className="yazar" htmlFor="author">Yazar:</label>
          <select id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required>
            <option value="">Seçiniz...</option>
            {/* Yazarları burada listelemek için gerekli kod */}
          </select>
          <br />
          <label className="yayinci" htmlFor="publisher">Yayıncı:</label>
          <select id="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} required>
            <option value="">Seçiniz...</option>
            {/* Yayıncıları burada listelemek için gerekli kod */}
          </select>
          <br />
          <label className="kategory" htmlFor="category">Kategori:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Seçiniz...</option>
            {/* Kategorileri burada listelemek için gerekli kod */}
          </select>
          <br />
          {borrowed ? (
            <div>
              <p>İade Tarihi: {returnDate}</p>
              <button type="button" onClick={handleSetReturned}>İade edildi olarak ayarla</button>
            </div>
          ) : (
            <>
              <button className="submitbuton" type="submit">Submit</button>
              <button className="deletebuton" type="button" onClick={handleSetReturned}>delete</button>
            </>
          )}
        </form>
      </div>
  );
}

export default Bookupdateform;