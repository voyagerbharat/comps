import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button danger>Click kr de bhai</Button>
      </div>
      <div>
        <Button warning>Click kr de bhai</Button>
      </div>
      <div>
        <Button rounded outline primary>
          mat Click kr de bhai
        </Button>
      </div>
      <div>
        <Button success outline>
          chl chl Click kr de bhai
        </Button>
      </div>
      <div>
        <Button secondary primary rounded>
          jp jpClick kr de bhai
        </Button>
      </div>
    </div>
  );
}
export default App;
