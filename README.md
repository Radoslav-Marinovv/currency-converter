# Currency Converter

Single page application - Currency converter

Have 33 currencies. Gets new data every 3 hours.

The exchange rates and the names are coming from [https://freecurrencyapi.com/](https://freecurrencyapi.com/) and then stored in MongoDB database.

All currencies on the website are distributed from the MongoDB database to all 3 pages.

**Top 10**

      It have two sections

        1. Marquee (infinite scrolling list of currencies) on top with all currencies and their current exchange rates.

        2. Top 10 currencies with their exchange rates: Short name, Full name, Country flag, Exchange rate.

**My List**

      You can Add or Remove currencies to favorites list.

      1. Carousel on top that have button to store it to favorites, arrows on each side to navigate.

      2. List of all stored currencies (even if you refresh the page, uses localStorage in your browser).

**All Currencies**

      Presents all currencies that are available.

## Technologies Used

### Back-End

    Express
    JavaScript

#### Database

    MongoDB
    Mongoose

### Front-End

    Vite
    React
    TypeScript
    Redux

### CSS Tools

    TailwindCSS
    DaisyUI

## Project Setup

1. **Clone the repository:**

```bash
git clone https://github.com/Radoslav-Marinovv/currency-converter
cd currency-converter
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server (front-end)**

Open new terminal in / folder and run:

```bash
npm run dev
```

4. **Run the development server (back-end)**

Open new terminal in /api folder and run:

```bash
npm run dev
```

5. **Build for production:**

You don't need to build the back-end.

Since the front-end is with TypeScript you need to build it first so use the following command.

```bash
npm run build
```

5. **Preview the production build:**

```bash
npm run preview
```

## Live Demo

Check out the live demo [here](https://currency-converter-brown-rho.vercel.app/).

## Contact

For any questions, please contact Radoslav Marinov at [radoslav.marinov89@gmail.com](mailto:radoslav.marinov89@gmail.com).
