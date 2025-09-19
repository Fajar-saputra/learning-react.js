import { useState } from "react";

export default function ContactForm() {
    const [contact, setContact] = useState({
        nama: "",
        message: "",
    });

    function handleNameInput(e) {
        setContact({ ...contact, nama: e.target.value })
    }


    function handleMessageInput(e) {
        setContact({ ...contact, message: e.target.value })
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form action="">
                <input type="text" value={contact.nama} placeholder="Enter your name" className="style-input" onChange={handleNameInput} />
                <br />
                <br />
                <input type="text" value={contact.message} placeholder="Enter your message" className="style-input" onChange={handleMessageInput} />
            </form>
            <h2>Contact Detail</h2>
            <p>Nama : {contact.nama}</p>
            <p>Message : {contact.message}</p>
        </div>
    );
}
