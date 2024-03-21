import "../category-page/category-author.scss";
import React, { useState } from "react";

const CategoryAuthor = () => {
const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    // TODO: Form verilerini gönderin.
    console.log(`İsim: ${name}, Kategori: ${category}`);
  };

  const handleDelete = () => {
    // TODO: Verileri silin.
    console.log("Veriler silindi!");
  };

  const handleShow = () => {
    // TODO: Verileri gösterin.
    console.log("Veriler gösteriliyor!");
  };

  return (
    <div>
      <h1>Kişisel Bilgi Formu</h1>
      <label htmlFor="name">İsim:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="category">Kategori:</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Seçiniz...</option>
        <option value="Öğrenci">Öğrenci</option>
        <option value="Çalışan">Çalışan</option>
        <option value="Diğer">Diğer</option>
      </select>
      <br />
      <br />
      <button onClick={handleSubmit}>Gönder</button>
      <button onClick={handleDelete}>Sil</button>
      <button onClick={handleShow}>Göster</button>
    </div>
  );
};
 
export default CategoryAuthor;