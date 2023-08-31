import tv from "./tvroom.module.css";

const Tv = () => {
    return (
        <div className={tv.content}>
            <h1 className={tv.header}>TV Room</h1>
            <p>
            This place provides some relief from the monotonous academic routine of submitting assignments
             a minute before deadlines and the one-nighter preparations before exams. We have a Large LED 
             TV wherein you can watch FIFA tournaments, IPL, World Cup, and all other sports, cheer for your
              favorite teams, and create euphoria. You can also binge-watch your favorite shows while you snack
               on something you brought from the canteen!

            </p>
        </div>
    );
};

export default Tv;
