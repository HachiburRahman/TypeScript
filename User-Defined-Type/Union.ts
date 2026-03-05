const Name:string="Hachibur Rahman";
console.log(Name);

let userId :string | number | boolean;
userId="101";
userId=101;
userId=true;

function display (id:string | number) :void{
    console.log(id)
}

display("101");
display(101);

