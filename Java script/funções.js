const escola = [{ 
    nome: "Estélio Natálio",
    endereco: "Rua Dos maguezais",
    notafinal: 8.2,
    sala: 12,
    turno: "tarde",},
    {  
    nome: "Paulo Brificado",
    endereco: "Rua Rodolfo linhares",
    notafinal: 9,
    sala: 12,
    turno: "tarde",},
    {
    nome: "Jacinto Leite",  
    endereco: "Avenida Sérgio Menegueli",
    notafinal: 5.5,
    sala: 12,
    turno: "tarde",}]


    function aluno (a)
     { return(
            console.log (   `A nota mais alta, ${escola[a].notafinal}
                        ,Durante o turno ${escola[a].turno}, 
                        foi alcançada pelo aluno ${escola[a].nome}`))
            
    }
    aluno(0)
    aluno(1)
    aluno(2)