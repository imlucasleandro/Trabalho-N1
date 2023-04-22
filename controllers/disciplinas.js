const Disciplinas = require('../model/disciplinas.js');

exports.listarDisciplinas = async (req, res) => {
    try{
        const disciplinas = await Disciplinas.find({});
        res.send(disciplinas);
    } catch(error){
        console.log(error);
        res.send({mensagem: '[ERRO]: Erro ao listar!'});
    }
}

//CADASTRAR
exports.adicionarDisciplina = async (req, res) => {
    const novaDisciplinas = req.query;
    if (!novaDisciplinas.nome || ! novaDisciplinas.cargahoraria){
        res.send({mensagem: '[ERRO]: informar nome e carga horaria!'})
    } else{
        try{
            await Disciplinas.create(novaDisciplinas);
            res.send({mensagem: '[SUCESSO]: Disciplina salvo!'});
        } catch(error){
            console.log(error);
            res.send({mensagem: '[ERRO]: Erro ao adicionar disciplina.',
        detalhes: error});
        }
    }
}

try{

} catch(erro){
    log(erro)
}

//REMOVER POR NOME
exports.removerDisciplinas = async(req, res) => {
    const disciplinas = req.query
    if(!disciplinas.nome){
        return res.send({mensagen: '[ERRO]: Informar nome!'});
    } else{
        try{
            const disciplinasRemovido = await Disciplinas.findOneAndDelete ({nome: disciplinas.nome});
        }catch(error){
            if(disciplinasRemovido == null){
                res.send({mensagem: '[AVISO]: Disciplina não existe no BD!'});
            } else {
                res.send({mensagem: '[SUCESSO]: Disciplina removida!'})
            }
        }
    }
}