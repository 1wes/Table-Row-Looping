$(()=>{

    $("#generate-data").on("click", ()=>{
        $.ajax({
            url:"../../Table-Row-Looping/server/index.php",
            method:"get", 
            type:"application/json",
            success:(data,status)=>{

                let services_list=JSON.parse(data);
                
            }
        })
    })
});