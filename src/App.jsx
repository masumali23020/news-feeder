import CategoryProvider from "./Providers/CategoryProvider";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <CategoryProvider>
        <Home />
      </CategoryProvider>
    </>
  );
}

export default App;
