import UbiquitousCard from "../UbiquitousCard.js";
import Fruit from "../../Fruit/Fruit.js"

function ForageCard() {
  return (
      <UbiquitousCard
        fruit = {
            <Fruit
                name = "🍎"
                className = "p-2 h-100"
            />
        }
        search= {
            <form>
                <input
                    type="text"
                    placeholder="Search for your food!"
                    style = {{backgroundColor: "black"}}
                />
            </form>
        }

    />
  );
}

export default ForageCard;
