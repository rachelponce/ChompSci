import React, { useEffect } from 'react';
import './Opportunities.css'

const MessageForm = ({ onSubmit }: {onSubmit:any}) => {
    const [message, setMessage] = React.useState('');
    const [isDisabled, setIsDisabled] = React.useState(true);

    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        onSubmit(message);
        setMessage('');
        setIsDisabled(true);
    
        const response = await fetch('http://localhost:3000/api/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            Message: message
        })
        });

        const content = await response.json();

    }

    function handleChangeMessage(event: { target: { value: string; }; }) {
        setMessage(event.target.value);
    }

    useEffect(() => {
    if (message !== '') {
        setIsDisabled(false);
    } else {
        setIsDisabled(true);
    }
    }, [message]);  

    return (
        <form onSubmit={handleSubmit}>
            <input className='input'
                        id="messageInput"
                        type="text"
                        onChange={handleChangeMessage}
                        value={message}  
                    />
                    <header className="button">
                        <button className="full-rounded" id="login-button" type="submit" disabled={isDisabled}>
                        Send
                        <div className="border full-rounded"></div>
                        </button>
                    </header>
        </form>
    )
}

export default MessageForm