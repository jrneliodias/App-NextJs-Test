import Image from "next/image"
import Produto from "../model/Produto"

interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return (
        <div className="flex justify-center gap-5 flex-col items-center border border-zinc-700 p-1 rounded-md w-[350px]">
            <Image src={produto.imagem}
                width={300}
                height={200}
                alt="Imagem do Produto"
                className="rounded-md" />

            <div className="flex gap-2 w-full flex-col ">
                <div className="flex  items-center justify-between px-3">
                    <div className="text-2xl font-black">
                        {produto.nome}
                    </div>
                    <div className="text=green-500">
                        {produto.preco}
                    </div>
                </div>
                <div className="text-zinc-500 px-3 break-words">
                    {produto.descricao}
                </div>
                <div className="p-3"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded w-full flex justify-center"> Comprar</button></div>
            </div>

        </div>
    )
}