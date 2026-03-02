# CookStacker 🍳

CookStacker is a responsive recipe management web application built using React and Tailwind CSS.  
The goal of this project was to build a fully functional CRUD-based frontend application with clean UI, smooth UX interactions, and proper client-side routing.

Live Demo: https://cookstacker.netlify.app  
GitHub Repository: https://github.com/Nayan129/Recipe-Maker

---

## 🚀 Features

- Create new recipes
- Update existing recipes
- Delete recipes
- Mark / Unmark recipes as favorite
- Real-time search filtering
- Data persistence using localStorage
- Lazy loading for images
- Loading skeleton UI
- Toast notifications for actions
- Smooth hover animations on cards
- Active route highlighting using NavLink
- Fully responsive (Mobile, Tablet, Desktop)

---

## 🛠 Tech Stack

- React (Vite)
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)
- LocalStorage API
- Netlify (Deployment)

---

## 📱 Responsive Design

The application is designed and tested across:

- Mobile screens
- Tablet devices
- Desktop screens

Layout automatically adjusts using Tailwind breakpoints.
Cards resize properly and maintain consistent aspect ratio.

---

## 🔧 What I Implemented & Learned

### 1. CRUD with State Management

I managed recipe state using React hooks and synchronized it with localStorage to ensure data persists even after page reload.

Challenge:
Keeping localStorage and React state in sync without unnecessary re-renders.

Solution:
Used useEffect carefully to update localStorage only when recipe state changes.

---

### 2. Client-Side Routing

Implemented React Router with NavLink for proper route highlighting.

Challenge:
On page reload after deployment, Netlify returned 404 error.

Solution:
Added \_redirects file in public folder:
This fixed refresh issues for client-side routes.

---

### 3. Search Optimization

Implemented real-time filtering based on recipe name.

Challenge:
Avoiding unnecessary filtering logic complexity.

Solution:
Used simple and efficient array filter method with case-insensitive matching.

---

### 4. Lazy Loading & Performance

Images are lazy-loaded to improve performance and reduce initial load time.

Also implemented loading skeleton UI to prevent layout shift.

---

### 5. UI / UX Improvements

- Added hover animations using Tailwind transitions
- Added toast notifications for create, update, delete actions
- Maintained consistent spacing and typography
- Ensured accessibility with proper alt text

---

## 📈 Future Improvements

- Backend integration (Node + MongoDB)
- User authentication
- Pagination / Infinite scroll
- Dark / Light theme toggle
- Category filtering
- Drag and drop recipe ordering

---

## 👨‍💻 Author

Nayan Bhusari  
Frontend Developer

---

This project reflects my understanding of React fundamentals, component structure, state management, routing, and frontend performance optimization.
