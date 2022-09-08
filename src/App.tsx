import Card from "./components/Card";
import { useCallback, useEffect, useState } from "react";

type Slip = {
  id: number;
  advice: string;
};

const App = () => {
  const [slip, setSlip] = useState<Slip>({} as Slip);

  const getNewAdvice = useCallback(async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = (await res.json()).slip as Slip;

      setSlip(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getNewAdvice();
  }, []);

  return (
    <Card getNewAdvice={getNewAdvice} advice={slip.advice} adviceId={slip.id} />
  );
};

export default App;
