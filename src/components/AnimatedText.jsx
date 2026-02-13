import React, { useState, useEffect } from 'react';

const AnimatedText = ({ texts = [], typingSpeed = 60, deleteSpeed = 50, pauseDuration = 1000 }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(typingSpeed);

    useEffect(() => {
        let ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, delta]);

    const tick = () => {
        let i = loopNum % texts.length;
        let fullText = texts[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(deleteSpeed);
        } else {
            setDelta(typingSpeed);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(pauseDuration);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500); // Small pause before typing next word
        }
    };

    return (
        <span className="inline-block min-h-[1.5em] align-middle">
            {text}
        </span>
    );
};

export default AnimatedText;
