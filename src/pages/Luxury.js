import styled from "styled-components"
import { FashionProduct, PageHero, SortFashion } from "../components"
import { useFashionFilterContext } from "../context/FashionFilterContext"
import Pic from '../images/background.jpeg'

const Luxury = () => {
    const {
        filtered_products
    } = useFashionFilterContext()
    
return (
        <main>
            <Background></Background>
            <SortFashion/>
            <PageHero title='Luxury'/>
            <Wrapper>  
                <div className="products-container">
                    {filtered_products.map((p) => {
                        return <FashionProduct key={p.id} {...p} />
                    })}
                </div>
            </Wrapper>
        </main>
  )
}

const Wrapper = styled.div`

position: relative;
margin-left:2vw;
margin-top: 5vh;
height: 100%;
width: 105VW;
top: 1vh;


.products-container{
    display: grid;
    grid-template-columns: 30vw 30vw 20vw;
    
    
}
`

const Background = styled.div`
border:3px solid red;
height: 100%;
width: 100%;
margin-left: -.5vw;
position: fixed;
background-image: url(${Pic});
background-repeat: no-repeat;
background-size: 100%;
filter: blur(3px);
`

export default Luxury