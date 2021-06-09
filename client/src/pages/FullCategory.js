import {FullCategory} from '../components/index'




export const FullCategoryPage = (props) => {
    const arr = ['','','','','Pajams','WarmPajams']
    let map = props.match.params.id
    return(
        <>
        <FullCategory type={map} name={arr[map]}/>
        </>
    )
}