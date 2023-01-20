import { useBeautyFilterContext } from "../context/BeautyFilterContext"
import { formatPrice } from "../utils/helpers"
import styled from "styled-components"

const SortBeauty = () => {
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
    } = useBeautyFilterContext()
    return (
        <main>
            <Wrapper>
            <Background></Background>
            <div className="title">FILTERS</div>
            <div className="filters">
            <p>{products.length >= 1? `${products.length} 'products found'` :'0 found' } </p>
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
                        <p>{formatPrice(price)}</p>
                        <span>{formatPrice(min_price)}</span>
                <input
                    type='range'
                    name="price"
                    onChange={updateFilters}
                    min={min_price}
                    max={max_price}
                    value={price}
                        />
                        <span>{formatPrice(max_price)}</span>
            </form>
                    
            </div>
            
            </Wrapper>
      </main>
      
  )
}

const Wrapper = styled.div`
position: fixed;
margin-top: 15.9vh;
margin-left: -.4vw;
text-align: center;
font-size: x-large;
text-transform: uppercase;
z-index: 1;
transition: .5s;
.filters{
        color: white ;
        border: 3px solid white;
        box-shadow: 0 0 30px black;
        background: black;
        width: 13vw;
        height: .01vh;
        padding-bottom: 25vh;
        margin-left:.3vw;
        transition: .5s;
        position: relative;
        left: -15vw;
        top: -2.3vh;
}

.title{
    top: 1vh;
    padding-top: .4vh;
    height: 3vh;
    width: 13vw;
    border: 3px solid black;
    position: relative;
    transition: .5s;
}
.title:hover{
    border:.15vw solid white;
    box-shadow: 0 0 30px white;
    background: black;
    color: white;
}
.title:hover + .filters{
    left: -.1vw;
}
.filters:hover{
    left: -.1vw;
}    

`
const Background = styled.div`
position:fixed;
top: 21vh;
height: 5vh;
width: 14.1vw;
background: white;
opacity:.9;
filter: blur(10px);
`

export default SortBeauty