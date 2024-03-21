import React, { useState } from 'react';
import "../useredite-page/userform.scss";
const Userform = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [score] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Form verilerini işleme kodu
      console.log('Form gönderildi!');
    };
  
    const handleDelete = () => {
      // Silme işlemini gerçekleştirme kodu
      setShowConfirmation(true);
    };
  
    const handleConfirmDelete = () => {
      // Silme işlemini gerçekleştirme kodu
      console.log('Kullanıcı silindi!');
      setShowConfirmation(false);
    };
  
    return (
      <div className='disalan'>
        <form onSubmit={handleSubmit}>

          <label className='name' htmlFor="name">Ad:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <br />

          <label className='lastname' htmlFor="surname">Soyad:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />

          <br />

          <label className='email' htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br />

          <label className='password' htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />
            
          <label className='phoneNumber' htmlFor="phoneNumber">Telefon Numarası:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

         <br /> 

      <label className='address' htmlFor="address">Adres:</label>
      <textarea
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      ></textarea>
    
          <br />

          <label className='score' htmlFor="score">Puan:</label>
          <input
            type="text"
            id="score"
            value={score}
            readOnly
          />

          <br />

          <label>
            <input
             className='admin'
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            Admin mi?
          </label>

          <br />

          <button className='kaydet' type="submit">Kaydet</button>
          <button className='sil' type="button" onClick={handleDelete}>Sil</button>
        </form>
        
        {showConfirmation && (
          <div className='kullanicisilmek'>
            <p className='yazi'>Kullanıcıyı silmek istediğinize emin misiniz?</p>
            <button className='evet' onClick={handleConfirmDelete}>Evet</button>
            <button className='hayir' onClick={() => setShowConfirmation(false)}>Hayır</button>
          </div>
        )}
      </div>
    );
  };
  
  const LoanHistory = () => {
    // Kullanıcının ödünç aldığı kitapların ve ödünç bilgilerinin listesi
    return (
      <div>
        {/* Ödünç alınan kitapları listelemek için gerekli kod */}
      </div>
    );
  };
  
  const UserUpdateForm = ({ isAdmin }) => {
    const [userType, setUserType] = useState('');
    const [showForm, setShowForm] = useState(isAdmin);
  
    const handleUserTypeChange = (e) => {
      setUserType(e.target.value);
      if (e.target.value === 'member') {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };
  
    return (
      <div className='disalan2'>
        <label className='kullanici'>
          Kullanıcı Türü:
          <select value={userType} onChange={handleUserTypeChange}>
            <option value="admin">Admin</option>
            <option value="member">Üye</option>
            <option value="employee">Çalışan</option>
          </select>
        </label>
        
        {showForm && (
          <form>
            {/* Kullanıcı güncelleme formu */}
          </form>
        )}
      </div>
    );
  };
  
  const App = () => {
    return (
      <div>
        <Userform/>
        <LoanHistory/>
        <UserUpdateForm isAdmin={true} />
      </div>
    );
};

export default App;
