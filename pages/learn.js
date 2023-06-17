import React, { useState } from 'react';

      function Header() {
        <h1>Develop. Preview. Ship. 🚀</h1>
      }

      export default function HomePage() {
        const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

        const [likes, setLikes] = useState(0);

        function handleClick() {
            setLikes(likes + 1);
            
        }
      
        return (
          <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
              {names.map((name) => (
                <li>{name}</li>
              ))}
            </ul>
            <button onClick={handleClick}>Like({likes})</button>
          </div>
        );
      }
      ReactDOM.render(<Header />, app);
    