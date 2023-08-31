import Canteen from "./canteen.module.css";

const cnt = () => {
    return (
        <div className={Canteen.content}>
            <h1 className={Canteen.header}>Canteen</h1>
            <p>
            Barak Canteen is an answer to the midnight cravings and that small snack breaks which we all need.
             Students can enjoy a list of snacks like fried maggi, veg sandwiches, and omelets, to name a few,
              and also can have milkshakes and juices served by the juice center opposite the canteen. 
              All the food items and juices are available at affordable rates. Canteens and Juice Center 
              are open till midnight at 2:30 for the food requirements of the students. As mentioned earlier, 
              online payments are preferred.
            </p>
        </div>
    );
};

export default cnt;
