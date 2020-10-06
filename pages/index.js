import { Img, Svg } from 'react-optimized-image';
import Logo from '../images/logo.png';
import Svgw from '../images/vercel.svg';

export default function Home() {
  return (
    <>
      <Img style={{ width: "200px", height: "263px" }} src={Logo}></Img>
      <Svg src={Svgw}></Svg>
    </>
  )
}
