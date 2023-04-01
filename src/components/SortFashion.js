import { formatPrice } from "../utils/helpers"
import { useFashionFilterContext } from "../context/FashionFilterContext"
import styled from "styled-components"

const SortFashion = () => {
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
    } = useFashionFilterContext()
    return (
        <Wrapper>
        <div>
        <div className="title">FILTERS</div>
        <div className="filters">
        <p>{products.length >= 1? `${products.length} "products found"` :'0 found' } </p>
        <form onSubmit={(e)=>e.preventDefault()}>
                    <label htmlFor="sort">sort by : </label>
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
                    <br/>
            <input
                type='range'
                name="price"
                onChange={updateFilters}
                min={min_price}
                max={max_price}
                value={price}
                    />
                    <br/>
                    <span>max : {formatPrice(max_price)}</span>
        </form>
                
        </div>
        
        </div>
  </Wrapper>
  
)
}
const Wrapper = styled.div`
position: fixed;
top: 23vh;
text-transform: uppercase;
z-index: 1;
left: 1vh;

.title{
border: .1vh solid white;
box-shadow: 0 0 10px black;
background: black;
color: white;
text-align: center;
width: 20vh;
margin: auto;
padding:1vh;
position: relative;
}
.filters{
border: .1vh solid white;
box-shadow: 0 0 10px black;
position: fixed;
left: -43vh;
transition: .5s;
height: 40vh;
width: 24vh;
background: black;
color: white;
text-align: center;
line-height: 5vh;
z-index: 1;
}

.title:hover + .filters{
left: 0vh;
}
.filters:hover{
left: 0vh;
}




`
export default SortFashion