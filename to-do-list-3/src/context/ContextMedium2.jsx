import { createContext, useContext, useState } from "react";

// create context
const ProfileContext = createContext();

// provider
function ProfileProvider({ children }) {
  const [name, setName] = useState("");

  return (
    <ProfileContext.Provider value={{ name, setName }}>
      {children}
    </ProfileContext.Provider>
  );
}

// komponen untuk menampilkan nama
function Name() {
  const { name } = useContext(ProfileContext);
  return <p>Name : {name}</p>;
}

// form untuk mengubah nama
function FormProfile() {
  const { name, setName } = useContext(ProfileContext);
  return (
    <input
      type="text"
      placeholder="Name..."
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

// main
export default function ContextMedium2() {
  return (
    <div>
      <ProfileProvider>
        <h2>Contoh Context Medium 2</h2>
        <FormProfile />
        <Name />
      </ProfileProvider>
    </div>
  );
}
