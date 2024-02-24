# Star Wars Planets

This project is a Star Wars planets directory built using React.js. It fetches data from the SWAPI (Star Wars API) to display information about various planets in the Star Wars universe. The directory includes the following features:

<h1>Getting Started</h1>
<p>To run this project locally on your machine, follow these steps:</p>

<h2>Prerequisites</h2>
<p>Make sure you have Node.js installed on your machine.</p>

<h2>Installation</h2>
<ul>
 <li>Clone the repository to your local machine</li>
 <li>Navigate to the project directory</li>
 <li>Install node_modules</li>
 <li>Run Application using npm start</li>
</ul>

<h1>Fetching Planets</h1>
<p>Fetches and displays information about planets from the SWAPI API endpoint: https://swapi.dev/api/planets/?format=json.
Each planet's data is presented in a distinct card, showcasing details such as the planet's name, climate, population, and terrain.</p>

<h1>Residents Display</h1>
<p>Within each planet's card, a list of residents is provided, fetched using their respective URLs found in the planet's data.
Relevant details such as the resident's name, height, mass, and gender are displayed.</p>

<h1>Pagination Mechanism</h1>
<p>Implements pagination functionality to navigate through the list of planets.
Utilizes the "next" URL provided in the API's response for fetching additional pages.
The pagination controls are designed to be user-friendly and intuitive for seamless navigation.</p>

<h1>Styling and Responsiveness</h1>
<p>CSS is used to style the application, emphasizing a clean, engaging layout.
The design prioritizes responsiveness, ensuring a consistent and appealing user experience across various devices and screen sizes.
Modern layout techniques such as Flexbox or Grid may be used to enhance the presentation, along with animations and transitions to improve visual appeal.</p>



