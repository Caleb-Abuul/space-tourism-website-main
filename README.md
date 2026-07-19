# Frontend Mentor - Space Tourism Website Solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Features](#features)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- ✅ View the optimal layout for each of the website's pages depending on their device's screen size
- ✅ See hover states for all interactive elements on the page
- ✅ View each page and toggle between tabs to see new information
- ✅ Navigate seamlessly between Destination, Crew, and Technology pages
- ✅ Enjoy a responsive design that works on mobile, tablet, and desktop devices

### Features

This space tourism website includes:

- **Home Page**: An engaging landing page with a call-to-action explore button
- **Destination Page**: Browse 4 destinations (Moon, Mars, Europa, Titan) with detailed information including distance and travel time
- **Crew Page**: Meet 4 crew members (Commander, Mission Specialist, Pilot, Flight Engineer) with their biographies and roles
- **Technology Page**: Learn about 3 space technologies (Launch Vehicle, Spaceport, Space Capsule) with descriptions
- **Responsive Navigation**: Mobile-friendly hamburger menu that transforms on different screen sizes
- **Smooth Interactions**: Hover states and transitions for all interactive elements

### Links

- Solution Repository: [GitHub - space-tourism-website-main](https://github.com/Caleb-Abuul/space-tourism-website-main)
- Live Site: [Github pages - space-tourisim](https://caleb-abuul.github.io/space-tourism-website-main/index.html)

## My Process

### Built With

- **Semantic HTML5 markup** - Properly structured, accessible HTML
- **CSS custom properties** (CSS variables) - For maintainable styling
- **Flexbox** - For flexible layouts
- **CSS Grid** - For multi-page layout management
- **Mobile-first workflow** - Responsive design starting from mobile
- **Vanilla JavaScript** - For interactive menu and navigation
- **JSON data** - For managing destination, crew, and technology information
- **Responsive Images** - Supporting multiple image formats (PNG, WebP)

### Tech Stack

| Technology | Purpose                            |
| ---------- | ---------------------------------- |
| HTML5      | Semantic structure                 |
| CSS3       | Styling and responsive design      |
| JavaScript | Interactivity and DOM manipulation |
| JSON       | Data management                    |

### What I Learned

Through this project, I gained valuable experience in:

1. **Responsive Web Design**
   - Creating adaptive layouts for mobile (560px), tablet (1024px), and desktop screens
   - Handling background images that change based on screen size

2. **CSS Advanced Features**
   - Using CSS custom properties for consistent theming
   - Implementing backdrop blur effects for navigation
   - Creating smooth transitions and hover states
   - Using CSS Grid for complex layouts

3. **Navigation Patterns**
   - Building accessible navigation menus
   - Implementing hamburger menu functionality
   - Creating active page indicators with pseudo-elements

4. **DOM Manipulation**
   - Toggle menu visibility on mobile
   - Managing state with JavaScript
   - Event handling for user interactions

5. **Data Management**
   - Managing multiple datasets (destinations, crew, technology)
   - Organizing component-based pages

## Continued Development

Areas I would like to improve on and explore in the future include:

- **Framework Migration:** Convert to React for better component reusability, state management, etc.
- **Performance Optimization:** Implement lazy loading for images and optimize asset delivery
- **Animations:** Add page transition animations and scroll-triggered animations
- **Accessibility Enhancements:**
  - Add keyboard navigation for all interactive elements, and
  - Implement ARIA labels

## Project Structure

```text
space-tourism-website-main/
├── index.html          # Home page
├── style.css           # Main stylesheet
├── main.js             # Main interaction script
├── README.md           # Project documentation (this file)
├── assets/             # Static assets
├── components/         # Component pages
│ ├── destination/      # Destination pages
│ ├── crew/             # Crew pages
│ └── technology/       # Technology pages
└── scripts/            # JavaScript files
└── styles/            # CSS stylesheets
```

## Usage

### Navigation

- **Home:** Landing page with project introduction and call-to-action
- **Destination:** Click "Destination" in navigation to explore Moon, Mars, Europa, and Titan
- **Crew:** Click "Crew" in navigation to meet the space crew members
- **Technology:** Click "Technology" in navigation to learn about space technologies

### Mobile Menu

On mobile devices (less than 560px),

- click the hamburger menu icon to open/close navigation
- Click the X icon to close the menu
- Click any navigation link to navigate to that page

### Responsive Breakpoints

Mobile: Below 560px (320px - 559px)
Tablet: 560px - 1024px
Desktop: Above 1024px

Browser Support
Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)

## Author

Caleb Abuul

- GitHub: [Caleb-Abuul](https://github.com/Caleb-Abuul)
- Frontend Mentor: [@Caleb-Abuul](https://www.frontendmentor.io/profile/Caleb-Abuul)
- X (formerly Twitter): [@Caleb Abuul](https://x.com/CalebAbuul)

## Acknowledgments

- First I want to say a big thank you to [Frontend Mentor](https://www.frontendmentor.io/challenges/) for the excellent challenges they provide to build my skills, and ultimately my portfolio.
- I equally want to appreciate the Frontend Mentor Community for their inspiration, support and constructive feedback. It has gone a long way to help me achieve this feat.
- Special thanks to all the resources and tutorials that helped along the way including my favorite mentor [Kevin Powell](https://www.youtube.com/@KevinPowell).
