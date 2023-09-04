const respositorio = document.querySelector('.content-main')

function formata_data(data){
    data_formatada = "";
    divisao_data = data.toString().split("T");
    divisao_data=divisao_data[0].split("-");
    dia=divisao_data[2];
    mes=divisao_data[1];
    ano=divisao_data[0];
    data_formatada=`${dia}/${mes}/${ano}`;
    return data_formatada;
}

function getApiGithub(){
    fetch("https://api.github.com/users/VictorAlexandre1986/repos")
        .then(async res => {
            if(!res.ok){
                throw new Error(res.status);
            }

            let data = await res.json()
            console.log(data)
            data.map(item =>{
                let project = document.createElement('div');
                project.setAttribute("class","project");
                project.innerHTML = `
                                        <div>
                                            <h4 class="title">${item.name}</h4>
                                            <span class="date-create">${ formata_data(item.created_at)}</span>
                                        </div>
                                        <div>
                                            <a href="${ item.html_url }" target="_blank">${item.html_url}</a>
                                            <span class="language"><span class="azul"></span>${item.language}</span>
                                        </div>
                                    `;


                respositorio.appendChild(project)
            })
        })
}

getApiGithub()