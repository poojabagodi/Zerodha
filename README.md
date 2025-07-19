# Zerodha Clone - Stock Trading Platform

A modern stock trading platform built with MERN stack, featuring real-time market data and interactive charts.

## Features
- Real-time stock trading and portfolio management
- Interactive charts with Chart.js for market analysis
- User authentication and secure trading
- Responsive design for desktop and mobile
- Live market data and price updates

## Tech Stack
- **Frontend**: React.js, Chart.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Dashboard**: React.js with advanced charting
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens

## Project Structure
```
zerodha-clone/
├── frontend/     # Main trading interface
├── backend/      # API server
├── dashboard/    # Trading dashboard (frontend)
└── README.md
```

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/zerodha-clone.git
   ```

2. **Install dependencies for all folders**
   ```bash
   # Backend
   cd backend && npm install
   
   # Frontend
   cd frontend && npm install
   
   # Dashboard
   cd dashboard && npm install
   ```

3. **Set up environment variables**
   - Create `.env` file in backend folder
   - Add MongoDB URI and JWT secret

4. **Run the applications**
   ```bash
   # Start backend (port 5000)
   cd backend && npm start
   
   # Start frontend (port 3000)
   cd frontend && npm start
   
   # Start dashboard (port 3001)
   cd dashboard && npm start
   ```

## Key Features
- **Portfolio Management**: Track investments and P&L
- **Real-time Trading**: Buy/sell stocks with live updates
- **Market Analytics**: Charts and technical indicators
- **User Dashboard**: Comprehensive trading interface
- **Secure Authentication**: JWT-based user system

## Tools Used
- Chart.js for interactive stock charts
- React Router for navigation
- Axios for API calls
- Socket.io for real-time updates
- bcrypt for password security
- Mongoose for database operations


---
⭐ Star this repo if you found it helpful!