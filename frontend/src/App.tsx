import { useState} from 'react'

import { Events } from "@wailsio/runtime";
import {Header} from "./components/base/Header.tsx";
import {WindowPanel} from "./components/base/WindowPanel.tsx";
import { GreetService } from "../bindings/changeme";

function App() {
    const [time, setTime] = useState("")
    const [name, setName] = useState("")

    Events.On("time", async ({ data }: { data: string }) => {
        setTime(data);

        const greeting = await GreetService.Greet(data);
       // setName(greeting);
    });

  return (
      <>
          <WindowPanel />
          <Header />

          <h1>Vite + React</h1>

          <p>
              Name: {name}
          </p>

          <p>
              Time: {time}
          </p>
      </>
  )
}

export default App
