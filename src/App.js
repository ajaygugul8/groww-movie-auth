// import GrowwMovieAuth from './components/GrowwMovieAuth';

// function App() {
//   return (
//     <div className="App">
//       <GrowwMovieAuth />
//     </div>
//   );
// }

// export default App;

// import GrowwMovieAuth from './components/GrowwMovieAuth';
// import GrowwMovieDashboard from './components/GrowwMovieDashboard';

// // In your App.js or routing configuration:
// function App() {
//   // You could add authentication state here
//   const isAuthenticated = true;
  
//   return (
//     <div className="App">
//       {isAuthenticated ? <GrowwMovieDashboard /> : <GrowwMovieAuth />}
//     </div>
//   );
// }



import React from 'react';
import GrowwMovieAuth from './components/GrowwMovieAuth';
import GrowwMovieDashboard from './components/GrowwMovieDashboard';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  return (
    <div className="App">
      {isLoggedIn ? (
        <GrowwMovieDashboard />
      ) : (
        <GrowwMovieAuth onLoginSuccess={handleLogin} />
      )}
    </div>
  );
}

export default App;  // This is the important line that was missing