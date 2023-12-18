import { createContext , useState } from "react"
import useLocalStorage from "../hook/useLocalStorage";

export const BasketContext = createContext()

function BasketProvider({children}) {
    const [basket, setBasket] = useLocalStorage("basket",[])
    const [totalPrice, setTotalPrice] = useLocalStorage("total",(0))

    const addBasket = (item) => {
        const index = basket.findIndex((x) => x.id === item.id)
        if (index === -1) {
            setBasket([...basket,{...item,count: 1}]);
            setTotalPrice(Number((totalPrice + item.price).toFixed(2))); 
            return
        }
        setBasket([...basket])
    };

    function removeItem(item) {
        const itemToRemove = basket.find((x) => x.id === item.id);
        if (!itemToRemove) {
            return
        }
        const updatedBasket = basket.filter((X) => X.id !== item.id);
        const reductionAmount = itemToRemove.price * itemToRemove.count;
        setBasket(updatedBasket);
        setTotalPrice(Number((totalPrice - reductionAmount).toFixed(2)));
    };
    
    function increaseCount(item) {
        const index = basket.findIndex((x) => x.id ===item.id);
        basket[index].count++;
        setBasket([...basket]);
        setTotalPrice(Number((totalPrice + item.price).toFixed(2)));
    }

    function decreaseCount(item) {
        const index = basket.findIndex((x) => x.id ===item.id);
        if (basket[index].count === 1) {
            return;
        }        
        basket[index].count--;
        setBasket([...basket]);
        setTotalPrice(Number((totalPrice - item.price).toFixed(2)));
    }

    console.log(totalPrice);


  return (
    <BasketContext.Provider value={{basket , addBasket , removeItem ,totalPrice ,increaseCount ,decreaseCount}}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider