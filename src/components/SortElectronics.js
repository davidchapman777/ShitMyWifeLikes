import { formatPrice } from "../utils/helpers"
import { useElectronicFilterContext } from "../context/ElectronicsFilterContext"
import styled from "styled-components"

const SortElectronics = () => {
    const {
        filtered_products: products,
        sort,
        updateSort,
        updateFilters,
        filters: {   
            min_price,
            max_price,
            price
        }
    } = useElectronicFilterContext()
    return (
        <Wrapper>
            <div>
            <div className="title">FILTERS</div>
            <div className="filters">
            <p>{products.length >= 1? `${products.length} "products found"` :'0 found' } </p>
            <form onSubmit={(e)=>e.preventDefault()}>
                        <label htmlFor="sort">sort by</label>
                    <select name='sort' id='sort' value={sort} onChange={updateSort}>
                        <option value= 'price-lowest'>price (lowest)</option>
                        <option value= 'price-highest'>price (highest)</option>
                        <option value= 'name-a'>name (a-z)</option>
                        <option value= 'name-z'>name (z-a)</option>
                    </select>
                        <hr/>
                <h5>price</h5>
                        <p>current : {formatPrice(price)}</p>
                        <span>min  : {formatPrice(min_price)}</span>
                <input
                    type='range'
                    name="price"
                    onChange={updateFilters}
                    min={min_price}
                    max={max_price}
                    value={price}
                        />
                        <span>max : {formatPrice(max_price)}</span>
            </form>
                    
            </div>
            
            </div>
      </Wrapper>
      
  )
}
const Wrapper = styled.div`
position: relative;
top: 22vh;
width: 40vw;
height: 40vh;
padding:1.4vw;
line-height: 4vh;
text-transform: uppercase;
z-index: 1;


.title{
    border: 1vw solid white;
    box-shadow: 0 0 10px black;
    background: black;
    color: white;
    text-align: center;
    position: fixed;
    width: 38vw;
    left: 2vw;

}
.filters{
    border: 1vw solid white;
    box-shadow: 0 0 10px black;
    position: fixed;
    left: -43vw;
    transition: .5s;
    height: 40vh;
    width: 40vw;
    background: black;
    color: white;
    text-align: center;

}

.title:hover + .filters{
    left: 0vw;
}
.filters:hover{
    left: 0vw;
}
@media screen and (min-width:280px){
.title{
    font-size: 2vh;
    width: 38vw;
    height: 3.5vh;
}
.filters{
    font-size: 2vh;
    line-height: 4vh;
    width: 46vw;
    left: -50vw;
}
}
@media screen and (min-width:360px){
.title{
    font-size: 3vh;
    width: 32.3vw;
    box-shadow: 0 0 40px black;
}
.filters{
    font-size: 2vh;
    line-height: 3.1vh;
        width: 34vw;
        height: 30vh;
        padding: 2vw;

}
}
@media screen and (min-width:375px){
.title{
    font-size: 3vh;
    width: 32.3vw;
    box-shadow: 0 0 40px black;
}
.filters{
    font-size: 2vh;
    line-height: 3.1vh;
        width: 33vw;
        height: 30vh;
        padding: 2vw;

}
}
@media screen and (min-width:390px){
.title{
    font-size: 3vh;
    width: 32.3vw;
    box-shadow: 0 0 40px black;
}
.filters{
    font-size: 2vh;
    line-height: 3vh;
        width: 31vw;
        height: 35vh;
        padding: 2vw;

}
}
@media screen and (min-width:393px){
.title{
    font-size: 3vh;
    width: 32.3vw;
    box-shadow: 0 0 40px black;
}
.filters{
    font-size: 2vh;
    line-height: 3vh;
        width: 31vw;
        height: 35vh;
        padding: 2vw;

}
}
@media screen and (min-width:412px){
.title{
    font-size: 3vh;
    width: 32.3vw;
    box-shadow: 0 0 40px black;
}
.filters{
    font-size: 2vh;
    line-height: 3vh;
        width: 30vw;
        height: 35vh;
        padding: 2vw;

}
}
@media screen and (min-width:540px){
.title{
    font-size: 3vh;
    width: 32.3vw;
    box-shadow: 0 0 40px black;
}
.filters{
    font-size: 2.3vh;
    line-height: 6vh;
        width: 30vw;
        height: 60vh;
        padding: 2vw;

}
}
@media screen and (min-width:768px){
.title{
    font-size: 3vh;
    width: 32.3vw;
    box-shadow: 0 0 40px black;
}
.filters{
    font-size: 2.3vh;
    line-height: 4vh;
        width: 22vw;
        height: 42vh;
        padding: 5vw;

}
}
@media screen and (min-width:820px){
.title{
    font-size: 3vh;
    width: 32.3vw;
    box-shadow: 0 0 40px black;
}
.filters{
    font-size: 2.3vh;
    line-height: 4vh;
        width: 22vw;
        height: 42vh;
        padding: 6vw;

}
}
@media screen and (min-width:912px){
.title{
    font-size: 3vh;
    width: 32.3vw;
    box-shadow: 0 0 40px black;
}
.filters{
    font-size: 2.3vh;
    line-height: 4vh;
        width: 22vw;
        height: 42vh;
        padding: 5vw;

}
}
@media screen and (min-width:1024px){
.title{
    font-size: 3vh;
    width: 12vw;
    box-shadow: 0 0 40px black;
    border: .3vw solid white;
}
.filters{
    font-size: 2.3vh;
    line-height: 4vh;
    width: 10vw;
    height: 40vh;
    padding: 2vw;
    border: .3vw solid white;
}
}

`
export default SortElectronics