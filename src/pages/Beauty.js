import styled from "styled-components"
import { BeautyProduct, PageHero, SortBeauty } from "../components"
import { useBeautyFilterContext } from "../context/BeautyFilterContext"
import Pic from '../images/background.jpeg'


const Beauty = () => {
    const {
        filtered_products
    } = useBeautyFilterContext()
    

    return (
        <Wrapper>
            <div className="background"></div>
            <SortBeauty/>
            <PageHero title='Beauty'/>
                <div className="products-container">
                    {filtered_products.map((p) => {
                        return <BeautyProduct key={p.id} {...p} />
                    })}
                </div>
        
        </Wrapper>
  )
}
const Wrapper = styled.div`
position: relative;

.background{
    position: fixed;
    background-image: url(${Pic});
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
}
.products-container{
    display: grid;
    grid-template-columns: 50vw 1vw;
    position: relative;
    top: -10vh;
}


@media screen and (min-width:1024px){
    .products-container{
        grid-template-columns: 25vw 25vw 1vw;
        left: 9vw;
        top: -26vh;
    }
    
}

`

export default Beauty