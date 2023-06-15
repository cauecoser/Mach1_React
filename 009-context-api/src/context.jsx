import { createContext } from "react";

const Context = createContext(
    {
        name: "Office Chair",
        cost: "U$ 180,00",
        description: "Confortable chair with arms support and changeble hight."
    }
)

export default Context