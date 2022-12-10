

var ScientificDepartment = new Object(
    {
    name:"Ahmed",
    location:'Egypt',
    Address:{City:'Aswan', Street:'Komombo', zipcode:123}
});

ScientificDepartment.display = function(){
    for (const key in ScientificDepartment) {
        console.log(`${key}: ${ScientificDepartment[key]}`);
    }
}

ScientificDepartment.display();
