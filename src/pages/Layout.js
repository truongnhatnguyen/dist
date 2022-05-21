import AppNav from "../components/AppNav";

const Layout = ({children}) => {
  return (
    <>
    <AppNav/>
     {children}
    </>
  )
};

export default Layout;