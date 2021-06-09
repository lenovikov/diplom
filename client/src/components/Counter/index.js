

export const Counter = ({name,change}) => {


    return(
        <div>
        <button disabled={name<=0} onClick={()=>change(name -1)}>-1</button>
        <span>{name}</span>
        <button onClick={()=>change(name + 1)}>+1</button>
        </div>
    )


}