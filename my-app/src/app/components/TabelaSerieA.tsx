import { text } from "stream/consumers";

interface TabelaSerieAProps {
  time: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
  const itens: any[] = []

  const itens2 = props.time.map((time, i) => {

    return (
      <li key={time}
        className={`text-xl list-decimal
      ${i%2===0 ? 'text-blue-500': 'text-green-400'}`}>
        {time}
      </li>
    )
  })

  return (

    <ol>
      {itens2}
    </ol>
  );
}
