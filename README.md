# Income and Expense Management Project

This project includes two parts:
- **Backend:** Django + Django REST Framework (SQLite database)
- **Frontend:** React + Vite
- **Simultaneous Execution:** with Docker and docker-compose

## Quick Setup

1. Install backend dependencies:

    ```bash
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

2. Install frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

3. Run the project with Docker:

    ```bash
    docker-compose up --build
    ```

## Folder Structure
- backend: Django code
- frontend: React code
- docker-compose.yml: Simultaneous execution

---

