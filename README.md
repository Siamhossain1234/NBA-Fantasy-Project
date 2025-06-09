# NBA Fantasy Zone Frontend

A modern React frontend for the NBA Fantasy Zone application, providing an intuitive interface for exploring NBA player statistics and fantasy insights.

## Features

- Modern, responsive UI built with Material-UI
- Team-based player search
- Position-based player filtering
- Top scorers leaderboard
- Animated components using Framer Motion
- Real-time data fetching from the backend API

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Backend API running on `http://localhost:8080`

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd BBallFantasy-Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── pages/         # Page components
  ├── App.tsx        # Main application component
  └── main.tsx       # Application entry point
```

## Technologies Used

- React
- TypeScript
- Material-UI
- React Router
- Axios
- Framer Motion

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 