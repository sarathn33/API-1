fetch("https://kontests.net/api/v1/all")
    .then((response)=>response.json())
    .then((data)=>{
      data.forEach(element => {
        const ele={
            ...element,
            name:element.name,
            start:element.start_time,
            end:element.end_time,
            site:element.site,
            status:element.status,
            url:element.url
        }
        website(ele)
      });
    })
        .catch(error => console.log(error));

        function website({name,start,end,site,status,url}){
            document.body.innerHTML+=`<div class="container">
            <h5 class="name">Name:${name}</h5>
            <p class="start">Start: ${start}</p>
            <p class="end">End: ${end}</p>
            <p class="site">Site: ${site}</p>
            <p class="status">Status: ${status}</p>
            <p class="url">URL: ${url}</p>
            </div>`;
        }