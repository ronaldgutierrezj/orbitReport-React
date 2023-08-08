import satData from "./satData";

const Buttons = (props) => {

  const {filterByType, setSat, displaySats} = props;
  return<>
        {displaySats.map((sat, id) => {
            return (
              <button onClick={() => filterByType(sat)} key={id}> {sat} Orbit</button>
            );
          }
    )}
    <button onClick ={()=> setSat(satData)}>all orbits</button> 
  </>

  
 
 
};

export default Buttons;