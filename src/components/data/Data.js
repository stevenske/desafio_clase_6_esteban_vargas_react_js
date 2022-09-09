const Data = [{
    id: 1,
    taste: 'Chocolate',
    img: '../img/chocolate-ice-cream.jpg',
    alt:'helado de chocolate'
},
{
    id: 2,
    taste: 'Frutilla',
    img: '../img/frutilla-ice-cream.jpg',
    alt:'helado de frutilla'
},
{
    id: 3,
    taste: 'Limon',
    img: '../img/limon-ice-cream.jpg',
    alt:'helado de limon'
},
{
    id: 4,
    taste: 'Vainilla',
    img: '../img/vainilla-ice-cream2.jpg',
    alt:'helado de vainilla'
},
{
    id: 5,
    taste: 'Menta',
    img: '../img/menta-ice-cream.jpg',
    alt:'helado de menta'
},]


const GetFetch = new Promise((res,rej)=>{
let condition = true
if(condition){
    setTimeout(()=>{
        res(Data)
    },2000)
}else{
    rej(console.log("No hay datos"))
}
})
export default GetFetch