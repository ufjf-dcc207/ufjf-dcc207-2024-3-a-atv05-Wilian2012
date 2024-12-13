import dados from './Dados.json'

interface DadosProps{


    nome:string;
    setor:string;
    salario:number;
    data: string;
    
}

function Informacao (nome:string, setor: string, salario: number,data:string){

           nome= dados.funcionarios[0].nome_completo;
           setor=dados.funcionarios[0].setor;
           salario=dados.funcionarios[0].salario_base;
           data=dados.funcionarios[0].data_admissao;

           return (



            <div className='funcionario'>
                <div className='nome'>{nome} </div>
                <div className='setor'>{setor}</div>
                <div className='salario_base'>{salario}</div>
                <div className='data'>{data}</div>
            </div>
           )
}
export default  Informacao

    



