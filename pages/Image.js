import Image from 'next/image'
// import shiva from '../src/images/sihva.jpg'
const ImageComponent = () => (
  <Image
    src="/shiva.jpg"
    height={144}
    width={144}
    alt="Your Name"
    placeholder="blur"
  />
)

export default ImageComponent;