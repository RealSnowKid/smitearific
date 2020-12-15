import Navbar from '../../components/Navbar.js';
import Navigation from '../../components/Navigation.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import ScrollArrow from '../../components/scrollArrow.js';

export default function Blog() {
    const imageArray = [{
        url: "https://cdna.artstation.com/p/assets/images/images/019/583/658/large/alex-heath-hachman-artstation.jpg?1564137339",
        bgPosition: "center top",
    }]

    return (
        <>
            <Navbar />
            <Navigation />
            <ScrollArrow />
            <div className="card articleBanner" style={{ backgroundImage: `url(${imageArray[0].url})`, backgroundPosition: `${imageArray[0].bgPosition}` }}>
                <div className="card-body d-flex align-items-end flex-column">
                    <h2 className="card-title mr-auto articleTitleLong">How to Win Lane as Hachiman</h2>
                    <div className="d-flex align-items-start mx-auto">
                        <div className="d-flex mr-5 ">
                            <FontAwesomeIcon className="readIcon" icon={faClock} />
                            <h3>September 30, 2020</h3>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon className="readIcon" icon={faBookReader} />
                            <h3>6 Minute Read</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blogPostContainer">
                <h1>Heading 1</h1>
                <p>Proin et ullamcorper nulla. Maecenas et odio ullamcorper, rutrum sem vitae, dictum ex. Fusce urna arcu, tristique vitae malesuada nec, vehicula nec nunc. Vestibulum id pretium augue. Ut aliquet lacus velit, non sollicitudin sapien pharetra et. Praesent fermentum quam ac nisi hendrerit, vel malesuada sem aliquam. Mauris congue tincidunt ligula et dignissim. Phasellus mauris lectus, suscipit et faucibus quis, eleifend quis dui. Nunc sed metus non orci facilisis sagittis iaculis nec nunc. Aliquam vel feugiat lorem, id vulputate risus. Fusce vitae nunc eu massa gravida elementum. Nulla iaculis cursus nisl, sit amet pharetra nulla. Nam metus urna, varius in ex non, suscipit hendrerit urna. Suspendisse potenti. </p>
                <ol>
                    <li>Pellentesque consectetur placerat orci, tincidunt lobortis dolor vestibulum quis. </li>
                    <p>Praesent odio nunc, consectetur non imperdiet sed, fringilla id leo. Vivamus vestibulum libero nulla, eu volutpat diam ultricies at. Phasellus bibendum lectus ante, eu sollicitudin diam eleifend sit amet. Mauris eu libero purus. Nam interdum enim eu turpis malesuada, eu consequat mi rhoncus. Nunc nec arcu sapien. Aliquam eu ultrices dui. Ut vel elit felis. Etiam nec eleifend lectus. Maecenas mattis dapibus accumsan. Quisque vitae magna orci. Vestibulum sodales tellus vel volutpat feugiat. Donec vehicula interdum est at pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat, quam eget placerat accumsan, nisi ex tristique metus, sed maximus purus sem at leo. Maecenas at nunc pellentesque, mattis elit vel, accumsan lorem. </p>
                    <li>Nullam fringilla nisi eros, vitae congue urna ullamcorper et.</li>
                    <p>Etiam eu euismod dolor. Nunc rutrum mauris ut accumsan rutrum. Sed aliquam pellentesque eros eu mattis. Vivamus vel augue sit amet augue cursus tincidunt id eget nibh. Quisque eget eros efficitur, accumsan enim sit amet, euismod risus. Vestibulum nisi felis, rutrum nec neque non, sollicitudin venenatis dui. Nulla pretium lacinia aliquet. Ut sollicitudin nunc ut augue cursus, id sodales sapien mollis. Aenean mollis facilisis mollis. Sed at leo tellus. Integer at lacinia augue, nec efficitur lectus. In nec leo aliquam tortor rutrum pulvinar at at arcu. </p>
                    <li>Sed tristique magna a condimentum sodales.</li>
                    <p>Mauris in lectus sit amet nulla interdum ultrices. Nam luctus metus non dui lacinia viverra. Nunc elementum ante et mi mollis, vel fringilla ante volutpat. Sed leo sem, egestas nec maximus at, pharetra in lectus. Sed id metus malesuada, commodo enim ac, rutrum odio. Mauris sed est imperdiet, imperdiet dolor sit amet, ornare diam. Cras hendrerit urna vel felis sollicitudin hendrerit. Integer tempus odio et purus scelerisque tempus. Vestibulum sit amet odio id risus scelerisque tincidunt. Donec convallis enim lobortis sapien tincidunt, et tincidunt mi porta. </p>
                </ol>
            </div>
        </>
    )
}