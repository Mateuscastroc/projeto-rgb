
import './Panel.css'
        
function Panel (corDePreview) {
    // const [cor, setCor] = useState(string);
    
    return (
        <>
            <div style={{"backgroundColor": corDePreview.corDePreview}} className="preview"></div>
            <strong><div>{corDePreview.corDePreview}</div></strong>
            <button onClick={()=> console.log(corDePreview)}>Printa cor</button>
        </>
    );

    }

export default Panel;