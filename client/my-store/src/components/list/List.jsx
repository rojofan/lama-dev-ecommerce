import "./List.scss"
import card from "../card/Card";
import Card from "../card/Card";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "long sleeves graphic t-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "long sleeves graphic t-shirt",
    isNew: true,
    oldPrice: 25,
    price: 22
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "long sleeves graphic t-shirt",
    isNew: false,
    oldPrice: 55,
    price: 35
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "long sleeves graphic t-shirt",
    isNew: false,
    oldPrice: 63,
    price: 52
  }
];


const List = () => {
  return (
      <div className="list">
        {data.map(item => (
          <Card item={item} key={item.id}/>
      ))}
      </div>
  )
}

export default List