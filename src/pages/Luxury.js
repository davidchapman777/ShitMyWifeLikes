import styled from "styled-components"
import { FashionProduct, PageHero, SortFashion } from "../components"
import { useFashionFilterContext } from "../context/FashionFilterContext"
import Pic from '../images/background.jpeg'

const Luxury = () => {
    const {
        filtered_products
    } = useFashionFilterContext()
    
return (
        <Wrapper>
            <div className="background"></div>
            <SortFashion/>
            <PageHero title='Luxury'/>
                <div className="products-container">
                    {filtered_products.map((p) => {
                        return <FashionProduct key={p.id} {...p} />
                    })}
                </div>
        
        </Wrapper>
  )
}
const Wrapper = styled.div`
position: relative;
overscroll-behavior-x: none;
.background{
    position: fixed;
    background-image: url(${Pic});
    height: 103vh;
    width: 100%;
    max-width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
}
.products-container{
    display: grid;
    grid-template-columns: 50vw 1vw;
    position: relative;
    top: -10vh;
    overscroll-behavior-x: none;
}


@media screen and (min-width:1024px){
    .products-container{
        grid-template-columns: 25vw 25vw 1vw;
        margin-left:11vw;
        top: -26vh;
    }
    
}

`

export default Luxury