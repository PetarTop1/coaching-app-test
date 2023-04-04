import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="bg-black w-full text-white">
        <nav className="bg-black w-[1080px] my-0 mx-auto font-outfit text-lg py-4">
          <div className="flex justify-between">
            <div className="text-[20px]">
              Coaching App
            </div>
            <div className="flex gap-6">
              <div>About</div>
              <div>Solutions</div>
              <div>Log In</div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
