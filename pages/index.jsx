// index.html
import Header from '../components/Header';
import LikeButton from '../components/LikeButton';
import { LikeHeader } from '../components/LikeButton';
import { getImageUrl } from '../components/utils';


const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <>
            <Header title="Develop. Preview. Ship. 🚀" />
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <ul>
                {names.map(name => (<li key={name}>{name}</li>))}
            </ul>
            
            <LikeHeader label={"Like Counter"} />
            <LikeButton label={"Likes"} startLikes={0} />
            <br></br>
            <Gallery />
            <br></br>
            <CardedProfile />
        </>
    );
}

function Profile({ person, imageSize = 70 }) {
    const imageSrc = getImageUrl(person.imageId)

    return (
        <section className="profile">
            <h2>{person.name}</h2>
            <img
                className="avatar"
                src={imageSrc}
                alt={person.name}
                width={imageSize}
                height={imageSize}
            />
            <ul>
                <li>
                    <b>Profession:</b> {person.profession}
                </li>
                <li>
                    <b>Awards: {person.awards.length} </b>
                    ({person.awards.join(', ')})
                </li>
                <li>
                    <b>Discovered: </b>
                    {person.discovery}
                </li>
            </ul>
        </section>
    )
}

function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile person={{
                imageId: 'szV5sdG',
                name: 'Maria Skłodowska-Curie',
                profession: 'physicist and chemist',
                discovery: 'polonium (chemical element)',
                awards: [
                    'Nobel Prize in Physics',
                    'Nobel Prize in Chemistry',
                    'Davy Medal',
                    'Matteucci Medal'
                ],
            }} />
            <Profile person={{
                imageId: 'YfeOqp2',
                name: 'Katsuko Saruhashi',
                profession: 'geochemist',
                discovery: 'a method for measuring carbon dioxide in seawater',
                awards: [
                    'Miyake Prize for geochemistry',
                    'Tanaka Prize'
                ],
            }} />
        </div>
    );
}

function Card({ children, title }) {
    return (
        <div className="card">
            <div className="card-content">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    );
}

function CardedProfile() {
    return (
        <div>
            <Card title="Photo">
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={100}
                    height={100}
                />
            </Card>
            <Card title="About">
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
        </div>
    );
}