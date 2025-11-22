import ProductCard  from "../Components/ProductCard";
export default function Home () {
    const featured = [{
        id :1 , 
        name : " Strawberry CheeseCake",
        price : "9",
        image :"/straw.jpg",

    },
    {
        id : 2, 
        name : "Choco Crepe ",
        price : "6",
        image : "/choco.jpg",
    },
     {
        id : 3, 
        name : "Pistascio fruit Crepe",
        price : "15",
        image : "/pistaciofruit.jpg",
    },
     {
        id : 4, 
        name : "Dubai Pancake",
        price : "15",
        image : "/pancake.jpg",
    },
];
return(
    <div style={{ padding: "20px"}}>
        <h2>Welcome to SmileBAR</h2>
        <p>Find your yummy item on your gadgets ! </p>
        <div 
        style={{
            display: "flex",
            gap : "20px",
            flexWrap : "wrap",
            marginTop: "20px",
        }}
        >
        {featured.map((item) =>(
            <ProductCard key = {item.id} product={item} />
        ))}
        </div>
    </div>
);
}