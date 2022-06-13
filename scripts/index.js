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

                    $("#service-table-body").append(`
                    <tr>
                        <td></td> //for the row number counter counter
                        <td id="service-name">${services_list[i].name}</td>
                        <td id="service-cost">${services_list[i].cost}</td>
                        <td><input class="waiver" type="text" placeholder="Enter waiver amount" name="waiver-amount" ></td> //amount waived
                        <td></td> //blance to pay
                    </tr>`)
                }
                
            }

        })

        // display the table after it is loaded with data
        $(".services-table").slideDown(800);
    })
});