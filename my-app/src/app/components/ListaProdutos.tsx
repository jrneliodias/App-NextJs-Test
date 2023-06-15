import ProdutoItem from "@/app/components/ProdutoItem";
import Produto from "@/app/model/Produto";

interface ListaProdutosProps {
    produtos: Produto[]
}

export default function ListaProdutos(props: ListaProdutosProps) {

    
    return (
        <div className="flex flex-wrap gap-5 p-10">
             {props.produtos.map((produto) => {
                return <ProdutoItem key={produto.id} produto={produto} />
            })}
        </div>
    )
}

