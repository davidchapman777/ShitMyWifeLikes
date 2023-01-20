import styled from "styled-components"
import { BeautyProduct, PageHero, SortBeauty } from "../components"
import { useBeautyFilterContext } from "../context/BeautyFilterContext"
import Pic from '../images/background.jpeg'


const Beauty = () => {
    const {
        filtered_products
    } = useBeautyFilterContext()
    

    return (
        <main>
            <Background></Background>
            <SortBeauty/>
            <PageHero title='Beauty'/>
            <Wrapper>  
                <div className="products-container">
                    {filtered_products.map((p) => {
                        return <BeautyProduct key={p.id} {...p} />
                    })}
                </div>
            </Wrapper>
        </main>
  )
}

const Wrapper = styled.div`

position: relative;
margin-left:vw;
margin-top: 5vh;
height: 100%;
width: 90%;
top: -10vh;


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

export default Beauty