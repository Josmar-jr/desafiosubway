import { Container } from "./styles";

import GridA1 from "../../assets/gridA1.png";
import GridA2 from "../../assets/gridA2.png";
import GridB12 from "../../assets/gridB12.png";
import GridAB3 from "../../assets/gridAB3.png";

function PhotosGrid() {
  return (
    <Container>
      <div style={{ gridArea: "A1", background: `url('${GridA1}')` }}></div>
      <div style={{ gridArea: "A2", background: `url('${GridA2}')` }}></div>
      <div style={{ gridArea: "B12", background: `url('${GridB12}')` }}></div>
      <div style={{ gridArea: "AB3", background: `url('${GridAB3}')` }}></div>
    </Container>
  );
}

export default PhotosGrid;
