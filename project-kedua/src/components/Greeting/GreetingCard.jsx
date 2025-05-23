import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

export default function GreetingCard() {
    const title = "How are yor"
    const message = "How are you elvira. what are you doing?. how about your shcool";
    const sender = "Fajar saputra";
    const recipient = "Elvira maharani";


    return (
        <div style={{ border: '1px solid gray', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
            <CardHeader title={title}/>
            <CardBody  message={message}/>
            <CardFooter sender={sender} recipient={recipient}/>
        </div>
    );
}
