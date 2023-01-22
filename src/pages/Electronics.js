import styled from "styled-components"
import { ElectronicProduct, PageHero, SortElectronics } from "../components"
import { useElectronicFilterContext } from "../context/ElectronicsFilterContext"
import Pic from '../images/background.jpeg'

const Electronic = () => {
    const {
        filtered_products
    } = useElectronicFilterContext()
    

    return (
        <Wrapper>
            <div className="background"></div>
            <SortElectronics/>
            <PageHero title='Electronics'/>
                <div className="products-container">
                    {filtered_products.map((p) => {
                        return <ElectronicProduct key={p.id} {...p} />
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
    filter: blur();
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
        left: 5vw;
        top: -26vh;
    }
}
`
export default Electronic