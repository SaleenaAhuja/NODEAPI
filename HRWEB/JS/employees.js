const Link = "https://ideal-space-barnacle-wrv66qv9vppj39q9q-5055.app.github.dev/employee";

fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error("Failed To Fetch Data");
    }
    return response.json();
}).then(data =>{
    const tbody = document.querySelector("#employeetable tbody");

    data.forEach(e=>{
        const row = document.createElement("tr");

        row.innerHTML=`
        <td>${e.employee_id}</td>
        <td>${e.first_name}</td>
        <td>${e.last_name}</td>
        `;
        tbody.appendChild(row)
    });
}).catch(err=>{
    console.log(err.message);
});