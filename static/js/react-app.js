// static/js/react-app.js

// Simple React entrypoint
const e = React.createElement;

function App() {
  return e('div', null, 'Hello from React!');
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('react-root');
  if (root) {
    ReactDOM.createRoot(root).render(e(App));
  }
});

