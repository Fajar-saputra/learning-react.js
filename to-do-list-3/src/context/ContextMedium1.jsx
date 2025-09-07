import { createContext, useContext, useState } from "react";

// create context
const ProfileContext = createContext();

// komponen untuk menampilkan nama
function Name() {
  const { name } = useContext(ProfileContext);
  return <p>Name : {name}</p>;
}

// komponen form, ngambil langsung dari context
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

export default function ContextMedium1() {
  const [name, setName] = useState("");

  return (
    <div>
      <ProfileContext.Provider value={{ name, setName }}>
        <h2>Contoh Context Medium 1</h2>
        <FormProfile />
        <Name />
      </ProfileContext.Provider>
    </div>
  );
}
