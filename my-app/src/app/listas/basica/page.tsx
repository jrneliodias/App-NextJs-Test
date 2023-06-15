import TabelaSerieA from "@/app/components/TabelaSerieA"

export default function PaginaListaBasica() {

    const times =
            ['Botafogo',
            'Palmeiras',
            'Flamengo',
            'Atlético-MG',
            'Fluminense',
            'Grêmio',
            'Athletico-PR',
            'São Paulo',
            'Cruzeiro',
            'Internacional',]

    return (
        <div className="flex flex-wrap gap-5 flex-col ">
            <h1 className="text-5xl font-black">Tabela Série A</h1>
            <TabelaSerieA time={times} />
        </div>
    )
}