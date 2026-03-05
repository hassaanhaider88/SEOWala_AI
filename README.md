# SEOWalaAI

SEOWalaAI is an AI-powered platform designed to enhance your website and YouTube video SEO, turning simple ideas into powerful tags and optimized content. It provides a suite of tools for keyword research, meta tag generation, YouTube video optimization, and social media content creation, all integrated with a user-friendly interface.

## Tech Stack

| Category        | Technology               | Icon / Note                                            |
| :-------------- | :----------------------- | :----------------------------------------------------- |
| **Languages**   | JavaScript, JSX, TypeScript |                                                        |
| **Frameworks**  | Next.js                  | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) |
| **Styling**     | Tailwind CSS             | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Backend**     | Node.js                  | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) |
| **Database**    | MongoDB                  | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) |
| **ORM**         | Mongoose                 |                                                        |
| **Authentication**| JSON Web Tokens (JWT)   |                                                        |
| **AI Integration**| Google Gemini API       | ![Google Gemini](https://img.shields.io/badge/Gemini-blue?style=for-the-badge&logo=google&logoColor=white) |
| **Dependencies**| React, bcryptjs, react-icons, @vercel/analytics | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) |

## Project Structure

```
.
├── app/
│   ├── (Auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (Pages)/
│   │   ├── about/
│   │   ├── dashboard/
│   │   ├── support/
│   │   ├── upgrade/
│   │   └── use-ai/
│   ├── api/
│   │   ├── (auth)/
│   │   │   ├── getbytoken/
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── query/
│   │   ├── use-ai/
│   │   │   ├── DeleteChat/
│   │   │   ├── [chatId]/
│   │   │   └── new-chat/
│   │   └── ...
│   ├── components/
│   │   ├── ChatSutructure/
│   │   └── ...
│   ├── Data/
│   ├── lib/
│   ├── modals/
│   ├── store/
│   ├── globals.css
│   ├── HomePage.jsx
│   ├── layout.js
│   └── page.js
├── public/
├── jsconfig.json
├── package.json
├── tsconfig.json
└── README.md
```

## Key Features

*   **User Authentication System**: Secure user registration, login, and session management using JWT.
*   **AI-Powered SEO Tools**:
    *   **Keyword Research**: Generate primary, long-tail, and low-competition keywords with search intent analysis.
    *   **YouTube Video SEO**: Optimize video titles, descriptions, tags, and hashtags.
    *   **Website Meta Tags**: Create SEO-friendly meta titles, descriptions, and primary/secondary keywords.
    *   **Social Media Post Generation**: Develop engaging captions, calls-to-action, hashtags, and define the tone for media posts.
*   **Chat History Management**: View and manage past AI interactions, including the ability to delete chat sessions.
*   **User Dashboard**: Personalized dashboard providing an overview of user activity and quick access to tools.
*   **Pro Subscription Model**: Offers advanced features (e.g., YT Video SEO, Media Post generation) accessible upon upgrading to a Pro plan. Payment via QR code and WhatsApp verification.
*   **Contact & Support Form**: Enables users to submit queries and seek assistance.
*   **Responsive User Interface**: Optimized for various screen sizes using Tailwind CSS.
*   **MongoDB Integration**: Persistent storage for user data, chats, messages, and queries.

## API Endpoints

### User Authentication & Profile

| Method | Route          | Request Data                           | Response                                   | Description                         |
| :----- | :------------- | :------------------------------------- | :----------------------------------------- | :---------------------------------- |
| `POST` | `/api/signup`  | `name`, `email`, `password`            | `success`, `message`, `user`, `token`      | Register a new user.                |
| `POST` | `/api/login`   | `email`, `password`                    | `sucess`, `message`, `user`, `token`       | Authenticate and log in a user.     |
| `POST` | `/api/getbytoken` | `token`                                | `success`, `user`, `token`, `message`      | Retrieve user data using an auth token. |

### AI Chat Service

| Method | Route                  | Request Data                               | Response                                   | Description                                            |
| :----- | :--------------------- | :----------------------------------------- | :----------------------------------------- | :----------------------------------------------------- |
| `POST` | `/api/use-ai/new-chat` | `userToken`, `chatId` (optional), `userMessage`, `serviceUsed` | `success`, `message` (and potentially new `chatId` for first message) | Create a new chat or add a message to an existing one, triggering AI response. |
| `GET`  | `/api/use-ai/[chatId]` | (URL parameter) `chatId`                   | Array of chat messages (`role`, `content`, `serviceUsed`) | Retrieve all messages for a specific chat ID.          |
| `POST` | `/api/use-ai/DeleteChat` | `chatId`                                   | `success`, `message`                       | Delete an existing chat session and its messages.      |

### Support & Queries

| Method | Route          | Request Data                           | Response                             | Description                           |
| :----- | :------------- | :------------------------------------- | :----------------------------------- | :------------------------------------ |
| `POST` | `/api/query`   | `name`, `email`, `message`             | `success`, `message`                 | Submit a support query.               |

## Setup Instructions

To get this project up and running on your local machine, follow these steps:

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd seo-wala
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```ini
MONGODB_URI=
JWT_SECRET=
GEMINI_API_KEY=
```

*   `MONGODB_URI`: Your MongoDB connection string.
*   `JWT_SECRET`: A strong, secret key for signing JWT tokens.
*   `GEMINI_API_KEY`: Your API key for the Google Gemini AI service.

### Run the Project

1.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:3000`.

2.  **Build for production**:
    ```bash
    npm run build
    ```

3.  **Start the production server**:
    ```bash
    npm start
    ```
