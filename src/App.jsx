import "./App.css";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        <Button variant="destructive">Button</Button>
        <ModeToggle />
      </div>
    </>
  );
}

export default App;
