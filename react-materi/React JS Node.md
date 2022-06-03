React JS Node


Prequissites
1. Node JS v
- npm | npx | yarn
- node js (version stable) => 14.0.0
2. tentukan folder dan running di terminal

npx create-react-app nama-project
$ npx create-react-app project-name => SPA (Single Page Application)

3. masuk ke folder project
cd project-name

4. running project
npm start

5. Simple Component

const Header = () => {
  return (
    <div className='header-top'>
      <div className='container'>
        <h2>Header Top</h2>
      </div>
    </div>
  );
}

export default Header;

- parent component
import Header from 'Header';

render (
  <>
    <Header />
    <Banner />
    <Footer />
  </>
)



6. Stateless VS Statefull

state adalah => tempat nampung sebuah nilai yang bisa di manipulasi

a. Stateless
digunakan untuk create component yang tidak me-manage state/data

- Dynamic components
// child component
const TeamItem = (props) => {
  // destructuring array
  const { gambar, ngaran, jabatan } = props;
  return (
    <div className="say-hi-item">
      <div className="say-hi__img">
        <img className="say-hi__img__el" src={gambar alt="John Bailey" />
        </div>
      <div className="say-hi__txt">
        <h3 className="say-hi__nm">{ngaran}</h3>
        <h5 className="say-hi__pstn">{jabatan}</h5>
      </div>
      <div className="say-hi__sosmed">
        <li classname="say-hi__sosmed__item">
          <a className="say-hi__somed__lnk--email" href="#">Email</a>
        </li>
        <li classname="say-hi__sosmed__item">
          <a className="say-hi__somed__lnk--whatsapp" href="#">WhatsApp</a>
        </li>
      </div>
  )
}

export default TeamItem;


b. statefull
Digunakan untuk tidak me-manage state/data


props = tempat untuk menerima menyimpan sebuah nilai (parameter)

