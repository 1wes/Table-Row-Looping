$(()=>{

    $("#generate-data").on("click", ()=>{
        $.ajax({
            url:"../../Table-Row-Looping/server/index.php",
            method:"get", 
            type:"application/json",
            success:(data,status)=>{

                let services_list=JSON.parse(data);

                // loop through the data obtained from the database;
                for(let i=0; i<=services_list.length;i++){
                    console.log(services_list[i]);
                }
                
            }
        })
    })
});