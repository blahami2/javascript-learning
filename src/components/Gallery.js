import { getImageUrl } from "./utils.js";

function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

export function Profile2() {
  return (
    <div>
      <Avatar
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}

function Card({ color, children }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Card color="blue">
        <Profile
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <Profile
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
      </Card>
      <ul>
        {people
          .filter((person) => person.profession.includes("ist"))
          .map((person) => (
            <li key={person.id}>
              <b>{person.name}:</b> {person.profession}
            </li>
          ))}
      </ul>
    </section>
  );
}
