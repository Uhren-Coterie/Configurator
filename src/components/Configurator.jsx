import { useCustomization } from "../contexts/Customization";
import { innerTextures, OuterTextures } from './TextureDefinitions'; // import the textures
import logo from '../../public/textures/UC Colored Logo.png';
const Configurator = () => {
  const {
    innerMaterial,
    setInnerMaterial,
    OuterMaterial,
    setOuterMaterial,
  } = useCustomization(); 
  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Available Inner Styles</div>
        <div className="configurator__section__values">
          {innerTextures.map((texture, index) => (
            <div
              key={index}
              className={`item ${innerMaterial === `inner${index + 1}` ? "item--active" : ""}`}
              onClick={() => setInnerMaterial(`inner${index + 1}`)}
            >
              <img src={texture} className="item__image" alt={`Inner ${index + 1}`} />
              Inner {index + 1}
            </div>
          ))}
        </div>
      </div>
  
      <div className="configurator__section">
        <div className="configurator__section__title">Available Outer Styles</div>
        <div className="configurator__section__values">
          {OuterTextures.map((texture, index) => (
            <div
              key={index}
              className={`item ${OuterMaterial === `Outer${index + 1}` ? "item--active" : ""}`}
              onClick={() => setOuterMaterial(`Outer${index + 1}`)}
            >
              <img src={texture} className="item__image" alt={`Outer ${index + 1}`} />
              Outer {index + 1}
            </div>
          ))}
        </div>
      </div>
      <img src={logo} alt="Logo" className="logo" />
            <div className="configurator__buttons">
        
        <button onClick={() => { window.location.href = 'https://8188c3-40.myshopify.com/products/hexa-custom-order'; }}>Select and Add to Cart</button>
      
        <button onClick={() => { window.location.href = 'https://urhencoterie.framer.website/products/hexagon-dream'; }}>Go Back</button>
      
      </div>
    </div>
  );
}

export default Configurator;
