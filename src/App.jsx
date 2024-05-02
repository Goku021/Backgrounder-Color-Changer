import Login from "./User/Login";
import Profile from "./User/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
