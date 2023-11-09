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

    escola.push({nome:"lindomar"})
            
            for (let i = 0 ; i < escola.length ; i++){
                console.log(escola[i].endereco)
            }
            
            console.log(escola)