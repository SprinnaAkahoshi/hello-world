import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}

function Navigation(props) {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {props.menuItems.map((burger) => (
          <li key={burger.id}>{burger.title}</li>
        ))}
      </ul>
      <h3>Location</h3>
      <p>{props.location}</p>
      <h3>Hours</h3>
      <p>{props.hours}</p>
      <h3>Contact</h3>
      <p>{props.number}</p>
    </div>
  );
}

function Main(props) {
  return (
    <div>
      <h4>WHO WE ARE</h4>
      <p>
        Dexter Akahoshi is the founder of Izakaya Akahoshi. While working a
        regular 9-5 job at zZz LLC, he started a backyard catering company as a
        side hustle for extra income on the weekends. Izakaya Akahoshi's burgers
        quickly gained {props.desc} and is now known all over the world.
      </p>
    </div>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const menuItems = ["Smash Burger", "Double Smash Burger", "Vegan Smash Burger"];

const menuObjects = menuItems.map((burger, i) => ({ id: i, title: burger }));

function App() {
  return (
    <div className="App">
      <Header name="Izakaya Akahoshi" />
      <Navigation
        menuItems={menuObjects}
        location="Anaheim"
        hours="Wed-Fri 12PM-10PM"
        number="949-780-7141"
      />
      <Main desc="popularity" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
