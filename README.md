# PassHub

A full-stack web application serving as a centralized hub for managing monthly memberships.

![React](https://img.shields.io/badge/React.js-61DAFB?logo=react&logoColor=white&style=flat)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=flat)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=flat)
![AWS](https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white&style=flat)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white&style=flat)

## Features

- **User Authentication**: Secure login and registration using Google OAuth.
- **Database Integration**: Fetch and store data with MongoDB.
- **Payment Processing**: Integrate Stripe API to enable payments.
- **REST API**: Fetch memberships and handle purchases via Next.js API routes.
- **Caching**: Implemented caching with Redis, reducing rendering times

## Technologies Used

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend**: Node.js, Next.js API Routes
- **Database**: MongoDB
- **Caching**: Redis
- **Cloud Services**: AWS
- **Payment Gateway**: Stripe API

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (v12 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (Local or Cloud instance)
- **Stripe Account** (For payment integration)
- **Redis Server** (Optional, for caching)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/clay-arras/passhub.git
   cd passhub
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   - **Google OAuth Settings**

     ```env
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     NEXTAUTH_SECRET=your_nextauth_secret
     NEXTAUTH_URL=http://localhost:3000
     ```

   - **MongoDB Connection**

     ```env
     MONGODB_URL=your_mongodb_connection_string
     ```

   - **Stripe API Keys**

     ```env
     STRIPE_PUBLIC_KEY=your_stripe_public_key
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```

   - **Redis Configuration** (Optional)

     ```env
     REDIS_HOST=your_redis_host
     REDIS_PASSWORD=your_redis_password
     REDIS_PORT=your_redis_port
     ```

   > **Note**: Replace the placeholder values with your actual credentials.

4. **Run the Application**

   ```bash
   npm run dev
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

- **Access the Application**

  Open your web browser and navigate to `http://localhost:3000`.

- **Authentication**

  Use the Google Sign-In button to log in or register.

- **Manage Memberships**

  View available memberships fetched from the MongoDB database.

- **Purchase Memberships**

  Proceed to checkout using Stripe for payment processing.

## License

This project is licensed under the [MIT License](LICENSE).

---