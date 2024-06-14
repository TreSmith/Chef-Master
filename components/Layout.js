import Header from './Header.js';
import NavBar from './Navbar.js';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />

      <main className="mainApp">
        <div className="contentArea">{children}</div>
      </main>
    </>
  );
};
