import { Item } from "../stores/common"
import { v4 as uuidv4 } from "uuid"

export const items: Item[] = [
  {
    id: uuidv4(),
    name: "Espresso",
    price: 2.5,
    description:
      "Strong and concentrated coffee brewed by forcing hot water through finely-ground coffee beans.",
    imageUrl:
      "https://source.unsplash.com/white-ceramic-cup-with-brown-liquid-dAYJfrtVjh0",
  },
  {
    id: uuidv4(),
    name: "Cappuccino",
    price: 3.0,
    description:
      "Espresso-based coffee drink that is typically topped with equal parts steamed milk foam.",
    imageUrl:
      "https://source.unsplash.com/white-ceramic-teacup-with-latte-RFLDagtOsMM",
  },
  {
    id: uuidv4(),
    name: "Latte",
    price: 3.5,
    description:
      "Coffee drink made with espresso and steamed milk, often topped with a small amount of milk foam.",
    imageUrl:
      "https://source.unsplash.com/clear-drinking-glass-with-espresso-vfiA7rRtjWo",
  },
  {
    id: uuidv4(),
    name: "Mocha",
    price: 4.0,
    description:
      "Coffee drink made with espresso, chocolate syrup, steamed milk, and topped with whipped cream.",
    imageUrl:
      "https://source.unsplash.com/white-ceramic-cup-with-saucer-on-white-table-gbNuQfm9hTE",
  },
  {
    id: uuidv4(),
    name: "Americano",
    price: 3.0,
    description:
      "Coffee drink made by diluting espresso with hot water, giving it a similar strength to regular coffee.",
    imageUrl:
      "https://source.unsplash.com/white-coffee-cup-on-brown-wooden-table-JNhaaPEz3FY",
  },
  {
    id: uuidv4(),
    name: "Macchiato",
    price: 3.5,
    description:
      "Espresso-based coffee drink with a small amount of foamed milk on top, often served as a single or double shot.",
    imageUrl:
      "https://source.unsplash.com/white-ceramic-mug-with-coffee-fdKkyjuI1YA",
  },
  {
    id: uuidv4(),
    name: "Flat White",
    price: 4.0,
    description:
      "Coffee drink made with espresso and steamed milk, similar to a latte but with a higher ratio of coffee to milk.",
    imageUrl: "https://source.unsplash.com/cup-of-cappuccino-EcWFOYOpkpY",
  },
  {
    id: uuidv4(),
    name: "Affogato",
    price: 4.5,
    description:
      "Coffee-based dessert made by pouring a shot of hot espresso over a scoop of vanilla ice cream.",
    imageUrl:
      "https://source.unsplash.com/person-pouring-brown-liquid-on-clear-drinking-glass-AMMFbNolQKM",
  },
  {
    id: uuidv4(),
    name: "Turkish Coffee",
    price: 3.5,
    description:
      "Coffee brewed by simmering finely-ground coffee beans in water, often sweetened and flavored with cardamom.",
    imageUrl:
      "https://source.unsplash.com/mug-with-full-field-of-coffee-inside-7X96RNhpxBc",
  },
  {
    id: uuidv4(),
    name: "Irish Coffee",
    price: 5.0,
    description:
      "Coffee cocktail made with hot coffee, Irish whiskey, sugar, and topped with cream.",
    imageUrl:
      "https://source.unsplash.com/filled-clear-rock-glass-near-straw-TWAqkciDkA0",
  },
]
