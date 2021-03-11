import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA4QaRSp2Rqt8Qg3beATCA746rpOWuSVwk',
  authDomain: 'livrosbl.firebaseapp.com',
  projectId: 'livrosbl',
  storageBucket: 'livrosbl.appspot.com',
  messagingSenderId: '435743156625',
  appId: '1:435743156625:web:faa700125c2c752da59230',
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

export const addUser = async (user) => {
  const isUser = await db.collection('users').doc().set({
    name: user.name,
    email: user.email,
    password: user.password,
  });
  return isUser;
};

export const getAllBooks = async () => {
  const allBooks = [];
  const books = db.collection('books');
  const result = await books.get();

  result.forEach((book) => {
    allBooks.push(book.data());
  });

  return allBooks;
};

export const verifyUserLogged = () => {
  const isUser = auth.onAuthStateChanged((user) => {
    if (user) return true;
    return false;
  });

  return isUser;
};

export const auth = app.auth();

export default app;

// para verificar se existe um usuário logado eu uso
// o método onAuthStateChanged do auth, q me retorna um objeto
// com a chave user se tiver um usuário logado

// auth.onAuthStateChanged((user) => {
//   console.log(user);
//   if (user) {
//     setUserData(user.email);
//   } else {
//     history.push("/login");
//   }
// });
