import React, { useState, useEffect, useRef } from 'react';

const FORWARD = 'forward';
const BACKWARD = 'backward';

export const useTypingText = (
  words:any,
  keySpeed = 1000,
  maxPauseAmount = 30,
) => {
    
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [currentWord, setCurrentWord] = useState<any>(words[wordIndex].split(''));

    const direction = useRef(BACKWARD);
    const typingInterval = useRef();
    const letterIndex = useRef();

    useEffect(() => {
        
        const backspace = () => {

            if (letterIndex.current === 0) {
              const isOnLastWord = wordIndex === words.length - 1;
              setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
              direction.current = FORWARD;
              return;
            }
          
            const segment = currentWord.slice(0, currentWord.length - 1);
            setCurrentWord(segment);
            // @ts-ignore
            letterIndex.current = currentWord.length - 1;
        }

        const typeLetter = () => {
            // @ts-ignore
            if (letterIndex.current >= words[wordIndex].length) {
              direction.current = BACKWARD;
              return;
            }
          
            const segment = words[wordIndex].split('');
            // @ts-ignore
            setCurrentWord(currentWord.concat(segment[letterIndex.current]));
            // @ts-ignore
            letterIndex.current = letterIndex.current + 1;
        }
        // @ts-ignore
        typingInterval.current = setInterval(() => {
            if (direction.current === FORWARD) {
              typeLetter();
            } else {
              backspace();
            }
          }, keySpeed);
    
        return () => {
          clearInterval(typingInterval.current);
        }
      }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount]);


    return {
        word: (
        <span className={`word ${currentWord.length ? 'full' : 'empty'}`}>
            <span>{currentWord.length ? currentWord.join('') : '_'}</span>
        </span>
        ),
    };
}

