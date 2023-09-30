# Netflix Clone with Next.js and Tailwind

A Netflix clone project built with Next.js, Tailwind CSS, Next Auth for authentication, and TMDB API for fetching movie and show data.

## Demo

Check out the live demo deployed on Vercel: [Netflix Clone Demo](https://netflix-ui-clone-kpssanu5z-neerajjoshi-github.vercel.app/)

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Run Locally](#run-locally)
- [Dependencies](#dependencies)

## Features

- **User Authentication:** Utilizes Next Auth for secure user authentication.
- **TMDB Integration:** Fetches movie and show data from The Movie Database (TMDB) API.
- **Responsive Design:** Optimized for both big screens and mobile devices.
- **Search Functionality:** Allows users to search for movies and shows.
- **Form Validation:** Utilizes react-hook-form and zod for form validation.
- **Styling:** Uses Tailwind CSS for modern and responsive UI design.

## Screenshots

### Desktop View

![Desktop View Screenshot](/public/readmeImages/desktop-view-1.png)
![Desktop View Screenshot](/public/readmeImages/desktop-view-2.png)

### Mobile View

![Mobile View Screenshot](/public/readmeImages/mobile-view-1.png)
![Mobile View Screenshot](/public/readmeImages/mobile-view-2.png)

## Run Locally

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

```bash
  git clone https://github.com/neerajjoshi-github/netflix-ui-clone.git
```

2. Go to the project directory

```bash
  cd netflix-ui-clone
```

3. Install the project dependencies:

```bash
  npm install
```

4. Configure Environment Variables:
   Create a `.env.local` file in the root directory and add your environment variables:

```bash
  MOVIESDB_API_KEY="your_tmdb_api_key"
  MONGODB_URL="your_mongodb_connection_url"
  NEXTAUTH_SECRET="your_next_auth_secret"
```

5. Run the development server:

```bash
 npm run dev
```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the Netflix clone.

## Dependencies

Here are some of the key dependencies used in this project:

- **Next.js:** The React framework for building server-rendered applications.
- **Tailwind CSS:** A utility-first CSS framework for building responsive and modern UIs.
- **Next Auth:** Provides easy authentication with various providers.
- **TMDB API:** The Movie Database API for fetching movie and show data.
- **React Hook Form:** A library for flexible and efficient form validation.
- **Zod:** A runtime type checking library for JavaScript.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB.
- **Axios:** A promise-based HTTP client for making API requests.
- **Swiper:** A modern touch slider for mobile and desktop.

For a full list of dependencies, refer to the `package.json` file.

## I hope you find this project interesting and useful. Thanks for checking it out!!
