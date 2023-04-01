import styled from "styled-components"
import { ElectronicProduct, SortElectronics } from "../components"
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
    grid-template-columns: 1% 1%;
    position: relative;
    top: 30vh;
    overscroll-behavior-x: none;
    width: 99%;
    justify-items: center;
    justify-content: space-around;
}


@media only screen and (min-width: 992px) {
    .products-container{
        grid-template-columns:1% 1% 1%;
    }
}

@media only screen and (min-width: 1200px) {
    .products-container{
        grid-template-columns: 1% 1% 1% 1%;
    }
}
`
export default Electronic