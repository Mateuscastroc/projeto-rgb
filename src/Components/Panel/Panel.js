import './Panel.css'
function Panel (backGroundColor) {
    let string = "#e0d900"
    function converteValoresEmCor (backGroundColor){
        // string = "rgb("+ backGroundColor.backGroundColor.red+ ", " +backGroundColor.backGroundColor.green + ", " +  backGroundColor.backGroundColor.blue +")"
        console.log(string)
        
    }

    
    return (
        <>
            <div style={{"backgroundColor": string}} className="preview">
            </div>
            <button onClick={()=> converteValoresEmCor(backGroundColor)}>
                Printa cor
            </button>
        </>
    );
}


export default Panel;