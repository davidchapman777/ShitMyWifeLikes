import styled from "styled-components"
import { DecorProduct, PageHero, SortDecor } from "../components"
import { useDecorFilterContext } from "../context/DecorFilterContext"
import Pic from '../images/background.jpeg'


const Home = () => {
    const {
        filtered_products
    } = useDecorFilterContext()
    

   return (
        <Wrapper>
            <div className="background"></div>
            <SortDecor/>
            <PageHero title='Home'/>
                <div className="products-container">
                    {filtered_products.map((p) => {
                        return <DecorProduct key={p.id} {...p} />
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
        margin-left:8.5vw;
        top: -26vh;
    }
    
}

`


export default Home