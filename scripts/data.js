
$(()=>{

    // declare an empty array to hold the objects below
    let services_list=new Array();

    let service1={
        name:"malaria parasite by smear test", 
        cost:100,
    }

    let service2={
        name:"Cleaning and dressing", 
        cost:300
    }

    let service3={
        name:"Registration fees",
        cost:100
    }

    let service4={
        name:"Revisit fess",
        cost:50
    }

    addServices();

    function addServices(){
        services_list.push(service1, service2, service3, service4);

        return services_list;
    }
})