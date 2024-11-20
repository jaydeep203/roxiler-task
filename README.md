# Roxiler coding challenge

A full-stack application with a backend built using Express.js and Prisma, and a frontend developed in React.js.

## **Getting Started**

Follow the steps below to set up the project on your local machine.

---

### **Backend Setup**

1. **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Add `.env` file**:
    Create a `.env` file in the root of the `backend` directory with the following content:
    ```env
    DATABASE_URL="mongodb://your-database-url"
    ```

4. **Initialize Prisma with the database**:
    ```bash
    npx prisma db push
    ```

5. **Start the backend server**:
    ```bash
    node index.js
    ```

---

### **Frontend Setup**

1. **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the frontend development server**:
    ```bash
    npm run dev
    ```

---

### **Tech Stack**

- **Backend**: Node.js, Express.js, Prisma, MongoDB
- **Frontend**: React.js, Tailwind CSS

---

---

### **Commands Summary**

#### **Backend**:
- Install dependencies: `npm install`
- Initialize database: `npx prisma db push`
- Start backend server: `node index.js`

#### **Frontend**:
- Install dependencies: `npm install`
- Start development server: `npm run dev`

---