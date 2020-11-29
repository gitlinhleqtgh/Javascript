var man = [
    {
        id:1,
        name: "The Cosmo (black) Quan Short KAKI1",
        code: "TC1025011BA",
        price: "200",
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:1,
        name: "The Cosmo (black) Quan Short KAKI2",
        code: "TC1025011BA",
        price: "200",
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:1,
        name: "The Cosmo (black) Quan Short KAKI3",
        code: "TC1025011BA",
        price: "200",
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:1,
        name: "The Cosmo (black) Quan Short KAKI4",
        code: "TC1025011BA",
        price: "200",
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
]

var women = [
    {
        id:1,
        name: "The Cosmo (black) Quan Short KAKI1",
        code: "TC1025011BA",
        price: "200",
        image: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:1,
        name: "The Cosmo (black) Quan Short KAKI2",
        code: "TC1025011BA",
        price: "200",
        image: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:1,
        name: "The Cosmo (black) Quan Short KAKI3",
        code: "TC1025011BA",
        price: "200",
        image: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:1,
        name: "The Cosmo (black) Quan Short KAKI4",
        code: "TC1025011BA",
        price: "200",
        image: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
]

function listProducts(){
    for(let i = 0; i < man.length;i++)
    {
        var demo = '<div class = "col-3">'
        demo += '<div class = "card" style = "width: 18rem; ">'
        demo += '<img src="'+man[i].image+'" class = "card-img-top" style="height:400px;">'
        demo += '<div class="card-body">'
        demo += '<h5 class = "card-title">'+man[i].name+'</h5>'
        demo += '<p class="card-text">'+man[i].price+'</p>'
        demo += '<a href="#" class = "btn btn-primary" onclick="order()">ADD TO CART</a>'
        demo += '</div>'
        demo += '</div>'
        demo += '</div>'
        console.log(demo)
        document.getElementById("men").innerHTML += demo
    }
    for(let i = 0; i < women.length;i++)
    {
        var demo = '<div class = "col-3">'
        demo += '<div class = "card" style = "width: 18rem; ">'
        demo += '<img src="'+women[i].image+'" class = "card-img-top" style="height:400px;">'
        demo += '<div class="card-body">'
        demo += '<h5 class = "card-title">'+women[i].name+'</h5>'
        demo += '<p class="card-text">'+women[i].price+'</p>'
        demo += '<a href="#" class = "btn btn-primary" onclick="order()">ADD TO CART</a>'
        demo += '</div>'
        demo += '</div>'
        demo += '</div>'
        console.log(demo)
        document.getElementById("women").innerHTML += demo
    }
}