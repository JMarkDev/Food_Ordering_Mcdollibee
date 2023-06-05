import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";

function Profile() {
  return (
    <div>
      <Header/>
    <div style={{height: "100vh", textAlign: "center"}}>
      <h1>This is my profile</h1>
    </div>
    <Footer/>
    </div>
  );
}

export default Profile;
