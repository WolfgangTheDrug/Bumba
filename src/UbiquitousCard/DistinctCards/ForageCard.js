import UbiquitousCard from "../UbiquitousCard.js";
import Fruit from "../../Fruit/Fruit.js"

function ForageCard() {
  return (
      <UbiquitousCard
        fruit = {<Fruit name="🍎"/>}
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
