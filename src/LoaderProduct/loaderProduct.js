import { getShoppingCart } from "../fakeData/fakedb";

const CardLoader = async() =>{
    
    const loadedProducts = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
    const products = await loadedProducts.json();
   
    const productQuqntity = getShoppingCart()
    const saveCard = []
    for (const id in productQuqntity) {
      const addProduct = products.find(pd => pd.id === id)
      if (addProduct) {
        const Quantiti = productQuqntity[id];
        addProduct.quantity = Quantiti
        saveCard.push(addProduct)
      }
      
    }



    return saveCard

     
}
export default CardLoader