import ListaProdutos from "@/app/components/ListaProdutos";
import ProdutoItem from "@/app/components/ProdutoItem";
import produtos from "@/app/constants/produtos"
import Produto from "@/app/model/Produto";

interface ListaProdutosProps {
    produtos: Produto[]
}

export default function PaginaProdutos(props: ListaProdutosProps) {

    
    return (
        <div className="flex justify-center gap-5 flex-col items-center h-screen">
            <ListaProdutos produtos={produtos}/>
        </div>
    )
}

