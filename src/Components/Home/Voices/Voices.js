import React from 'react';

const Voices = () => {
    const handleSpeek = () => {
        const speak = (msg) => {
          const sp = new SpeechSynthesisUtterance(msg);
          [sp.voice] = speechSynthesis.getVoices();
          speechSynthesis.speak(sp);
        };
        speak('My name is Ibrahim Khalil,'
        // + 'you are so nice,'
        // + 'code is life'
        );
    }
    return (
        <div>
            <button onClick={()=> handleSpeek()}>Speek</button>
        </div>
    );
};

export default Voices;