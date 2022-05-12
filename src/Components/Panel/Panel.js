import {useState} from "react";
import './Panel.css'
function Panel (corDePreview) {
    let string = 'pink'
    const [cor, setCor] = useState(string);
    const [textoCor, setTextoCor] = useState(string);
    function mudaCor () {
        console.log(corDePreview)
        string = 'rgb(' + corDePreview.corDePreview.red + ',' + corDePreview.corDePreview.green + ',' + corDePreview.corDePreview.blue + ')'
        setCor(string)
    }
    return (
        <>
            <div style={{"backgroundColor": cor}} className="preview"></div>
            <div onChange={(string)=> setTextoCor(string)}>{textoCor}</div>
            <button onClick={()=> mudaCor()}>Definir cor</button>
            <button onClick={()=> console.log(cor)}>Printa cor</button>
        </>
    );

    }

export default Panel;