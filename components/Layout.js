import Header from './Header';
import NavBar from './navbar';

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
