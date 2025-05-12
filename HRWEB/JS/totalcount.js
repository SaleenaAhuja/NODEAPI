const Link = "https://ideal-space-barnacle-wrv66qv9vppj39q9q-5055.app.github.dev/totalcounts";
fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error("Failed To Fetch Data");
    }
    return response.json();
}).then(data =>{
        document.getElementById('employeeBox').innerHTML = `Total Employees: ${data.employees}`;
        document.getElementById('countryBox').innerHTML = `Total Countries: ${data.countries}`;
        document.getElementById('jobBox').innerHTML = `Total Jobs: ${data.jobs}`;
        document.getElementById('deptBox').innerHTML = `Total dept: ${data.dept}`;
        document.getElementById('locationBox').innerHTML = `Total Locations: ${data.location}`;
        document.getElementById('regionBox').innerHTML = `Total Regions: ${data.regions}`;    
    }).catch(err=>{
    console.log(err.message);
     });