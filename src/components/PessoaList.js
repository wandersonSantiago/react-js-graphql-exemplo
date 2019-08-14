import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

import './PessoaList.css'


const getPessoaQuery = gql`
{
    pessoas{
        id
        dataNascimento
        nome
       
    }
    documentos{
        id
        numero
        tipo
        pessoa{
            nome
        }
    }
}
`

class PessoaList extends Component{

    listPessoa(){
        var data = this.props.data;
        if(data.loading){
            return(<div>Loading Pessoas...</div>)
        }else{
            return data.pessoas.map(pessoa =>{
                return(
                    
                    <li key={pessoa.id}><h3>{pessoa.id}-{pessoa.nome}-{pessoa.dataNascimento}</h3></li>
                )
            })
        }
    }
    listDocumentos(){
        var data = this.props.data;
        if(!data.documentos){
            return(<div>Não consta...</div>)
        }else{
            return data.documentos.map(doc =>{
                return(                    
                    <li key={doc.id}><h2>{doc.pessoa.nome}</h2> - <h3>{doc.tipo}|{doc.numero}</h3></li>
                )
            })
           
        }
    }
    
    render(){
        
    return (
        
        <center>
            <h1>Somente Pessoas</h1>
            <ul id="pessoa-list">
                {this.listPessoa()}
            </ul><br></br>
            <h1>Pessoas com Documentos</h1>
            <ul id="documento-list">
                {this.listDocumentos()}
            </ul>
        </center>
    );
    }
}

export default graphql(getPessoaQuery)(PessoaList);