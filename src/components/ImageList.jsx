import { ImageShow } from "./ImageShow";

//import ImageList.css
import './ImageList.css';

const ImageList = ({images}) => {

  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  });

  return (


    <div className="image-list">{renderedImages}</div>
    //create a map
    

  )
}

export default ImageList
