# Araba Customer-Facing App: Project Architecture

## 1. Introduction

## 2. High-Level Architecture

## 3. Technical Stack Justification

## 4. Modular Component Structure

## 5. UI/UX Considerations

## 6. Feature Implementation Overview

### 6.1. Authentication

### 6.2. Marketplace (Multi-Vendor)

### 6.3. Cart & Checkout

### 6.4. Realtime Tracking

### 6.5. Order History

### 6.6. Profile & Preferences

### 6.7. Notifications System

### 6.8. Power Features

### 6.9. Localization

### 6.10. Payments

## 7. Scalability and Integration

## 8. Branding Adherence

## 9. Conclusion

## 10. References



## 1. Introduction

This document outlines the architectural design for the Araba customer-facing mobile application. Araba is envisioned as a comprehensive multi-role delivery platform, with this initial application focusing exclusively on the customer experience. Future iterations will include admin, vendor, and driver applications, necessitating a modular and scalable architecture for seamless integration. The primary objective is to deliver a highly intuitive, performant, and user-friendly application that sets a new standard for delivery services in the UAE, prioritizing user experience (UX) excellence and robust scalability over immediate AI integration.

A core principle guiding this development is the strict adherence to a "no customer" branding rule, ensuring that the term "customer" is not used within the application's UI or metadata. This strategic decision aims to foster a unique and inclusive brand identity for Araba users.




## 2. High-Level Architecture

The Araba customer-facing application will adopt a modern, service-oriented architecture designed for flexibility, scalability, and maintainability. The core components include a robust frontend, a flexible backend service layer, a scalable database, and a real-time communication mechanism. This architecture ensures that the application can handle a high volume of users and transactions while providing a seamless and responsive user experience.

**Frontend (Client-Side):** The mobile application will serve as the primary interface for users. It will be responsible for rendering the user interface, managing local state, handling user interactions, and communicating with the backend services. The frontend will be built with a strong emphasis on performance, responsiveness, and intuitive navigation, aligning with the "Uber Eats-level simplicity and polish" design principle.

**Backend (Server-Side):** The backend will provide the necessary APIs and services to support the frontend. This includes user authentication, marketplace management (restaurants and pharmacies), order processing, payment handling, and notification management. The backend will be designed to be stateless where possible, allowing for easy scaling and load balancing. It will also serve as the central hub for data management and business logic.

**Database:** A robust and scalable database solution will underpin the entire platform, storing all critical data related to users, vendors, products, orders, and transactions. The database will be optimized for high availability and performance, ensuring quick data retrieval and integrity.

**Real-time Communication:** Given the nature of a delivery platform, real-time communication is crucial for features like order tracking and notifications. A dedicated real-time layer will facilitate instant updates between the backend, frontend, and potentially other Araba applications (e.g., driver app), ensuring users receive timely information regarding their orders.

**Integration with Future Applications:** The architecture will be designed with clear API boundaries and modular components to facilitate seamless integration with future Araba applications, such as the admin panel, vendor portal, and driver app. This foresight will minimize refactoring efforts and accelerate the development of the complete ecosystem.





## 3. Technical Stack Justification

The selection of the technical stack for the Araba customer-facing app is driven by the need for high performance, scalability, developer efficiency, and a rich user experience. The chosen technologies are widely adopted, well-supported, and align with modern web and mobile development best practices.

**Frontend: React or Next.js (App Router preferred)**

*   **React:** As a declarative, component-based JavaScript library, React is ideal for building complex and interactive user interfaces. Its virtual DOM ensures efficient updates, leading to high performance and a smooth user experience. The vast ecosystem of libraries and tools, along with a large community, provides ample resources for development and problem-solving.
*   **Next.js (App Router):** Building on React, Next.js offers powerful features for production-ready applications, including server-side rendering (SSR), static site generation (SSG), and API routes. The App Router, in particular, provides a modern and flexible way to build full-stack React applications, enhancing performance through optimized data fetching and routing. This choice supports the goal of an "ultra-efficient, mobile-optimized UI/UX" by enabling faster initial page loads and improved SEO (though less critical for a mobile app, it signifies a robust foundation).

**State Management: Zustand or Redux**

*   **Zustand:** A small, fast, and scalable state-management solution. Its simplicity and minimal boilerplate make it an excellent choice for quickly setting up and managing application state, especially for mid-sized to large applications where Redux might introduce unnecessary complexity. Its hook-based API integrates seamlessly with React.
*   **Redux:** A more mature and widely adopted state management library, Redux provides a predictable state container. While it involves more boilerplate, its strict unidirectional data flow and powerful developer tools are beneficial for large, complex applications requiring robust state management and debugging capabilities. The choice between Zustand and Redux will depend on the specific complexity and scale of state management identified during detailed design, with a preference for Zustand for its simplicity unless Redux's advanced features are explicitly required.

**Backend-ready: Supabase (Auth, Database, Storage)**

*   **Supabase:** Positioned as an open-source Firebase alternative, Supabase offers a powerful suite of tools that significantly accelerate backend development. Its core components are:
    *   **PostgreSQL Database:** A highly reliable, scalable, and feature-rich relational database. Its robustness ensures data integrity and supports complex queries, essential for managing diverse data like vendor menus, user profiles, and order details.
    *   **Supabase Auth:** Provides secure and flexible authentication mechanisms, including email/password, Google, and other OAuth providers. This directly addresses the authentication requirements and simplifies user management.
    *   **Supabase Storage:** Offers a scalable solution for storing user-generated content, such as prescription uploads for pharmacy orders. Its integration with the database and authentication system streamlines file management.
*   Supabase's real-time capabilities (via WebSockets) also align perfectly with the need for "Realtime-ready" features, enabling live order tracking and notifications without requiring a separate real-time service.

**Realtime-ready: Sockets or Supabase Realtime**

*   **Supabase Realtime:** As mentioned, Supabase's built-in real-time functionality, which leverages WebSockets, is a strong candidate for handling live updates. It allows clients to subscribe to database changes and receive instant notifications, making it ideal for features like live driver map tracking and order status updates.
*   **Sockets (e.g., Socket.IO):** For more complex real-time interactions or if a dedicated real-time server is preferred outside of Supabase, a WebSocket library like Socket.IO could be used. However, given Supabase's comprehensive offering, its native real-time capabilities are the preferred choice for simplicity and integration.

**File Upload Support:**

*   **Supabase Storage:** This will be the primary solution for handling file uploads, such as prescription images for pharmacy orders. Its secure and scalable storage capabilities ensure reliable handling of user-generated files.

**Modular Component Structure:**

*   The component-based nature of React/Next.js inherently promotes a modular structure. This will be reinforced through clear folder organization, separation of concerns, and the creation of reusable UI components, business logic modules, and utility functions. This modularity is crucial for scalability, maintainability, and facilitating future integrations with other Araba applications.

**Full Bolt Automation Compatibility:**

*   While Bolt automation details are not specified, the chosen stack's API-driven nature and the use of Supabase (which provides robust APIs) ensure that the application will be fully compatible with external automation systems. The modular design will allow for easy integration points for triggering and responding to automated workflows.

This technical stack provides a robust, modern, and efficient foundation for building the Araba customer-facing application, ensuring it meets the performance, scalability, and UX excellence objectives.




## 4. Modular Component Structure

The Araba customer-facing application will adhere to a highly modular component structure, leveraging the inherent benefits of React/Next.js for building maintainable, scalable, and reusable UI elements and logical units. This approach is critical for managing complexity, facilitating parallel development, and ensuring seamless integration with future applications within the Araba ecosystem.

**Key Principles of Modularity:**

*   **Separation of Concerns:** Each component will be designed to handle a single responsibility, ensuring that changes in one part of the application have minimal impact on others. This applies to both UI components (e.g., buttons, input fields, cards) and logical components (e.g., authentication handlers, data fetchers, utility functions).
*   **Reusability:** Components will be built with reusability in mind, allowing them to be used across different parts of the application or even in other Araba applications. This reduces development time, promotes consistency, and minimizes code duplication.
*   **Clear Interfaces:** Each module and component will expose a clear and well-defined interface (props for React components, function signatures for utility modules), making it easy to understand how to interact with them and reducing dependencies on internal implementation details.
*   **Scalability:** A modular structure inherently supports scalability. As new features are added, they can be developed as new modules or integrated into existing ones without disrupting the entire application. This allows for agile development and continuous growth.
*   **Testability:** Smaller, focused modules are easier to test in isolation, leading to more robust and reliable code.

**Proposed Directory Structure (Example):**

```
src/
├── components/             # Reusable UI components (e.g., Button, Input, Card)
│   ├── common/             # Generic, application-agnostic components
│   ├── layout/             # Layout-specific components (e.g., Header, Footer, Navigation)
│   └── specific/           # Components specific to certain features (e.g., ProductCard, OrderSummary)
├── pages/                  # Next.js pages (e.g., index.tsx, auth/login.tsx, marketplace/index.tsx)
├── features/               # Feature-specific modules, encapsulating UI, logic, and state
│   ├── authentication/     # Login, Signup, Forgot Password flows
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   ├── marketplace/        # Vendor listing, product display, filtering
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   ├── cart-checkout/      # Cart management, checkout process, payment integration
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   └── ...                 # Other features like tracking, order history, profile
├── hooks/                  # Reusable React hooks for logic encapsulation
├── services/               # API interaction, data fetching, external service integrations
├── utils/                  # Helper functions, formatters, validators
├── store/                  # State management (Zustand/Redux stores, slices, actions)
├── styles/                 # Global styles, themes, utility classes
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
└── ...
```

**Feature-Driven Development:**

The `features/` directory will be central to the modular approach. Each sub-directory within `features/` will represent a distinct application feature (e.g., `authentication`, `marketplace`, `cart-checkout`). This structure encourages encapsulation, where all components, hooks, and services related to a specific feature reside together. This makes it easier to understand, develop, and maintain individual features independently.

**Component Granularity:**

Components will be designed at appropriate levels of granularity. Atomic components (e.g., `Button`, `Input`) will be highly reusable and reside in `components/common`. More complex components that combine several atomic components and encapsulate specific UI logic (e.g., `ProductCard`, `OrderSummary`) will be placed in `components/specific` or within their respective feature directories.

This modular component structure will ensure that the Araba customer-facing app is not only robust and performant but also highly adaptable to future requirements and integrations.




## 5. UI/UX Considerations

The Araba customer-facing application will prioritize an exceptional User Interface (UI) and User Experience (UX) to achieve the objective of being the "cleanest, most intuitive, and competitive delivery app in the UAE." The design principles are centered around simplicity, polish, accessibility, and modern aesthetics.

**Sleek, Modern, Mobile-First Design:**

*   The design will be contemporary, clean, and uncluttered, focusing on essential elements to avoid visual noise. This ensures a premium feel and ease of use.
*   A mobile-first approach means the design and development will prioritize the mobile experience, ensuring optimal performance and usability on smartphones, which are the primary devices for delivery app usage. The UI will be responsive, adapting seamlessly to various screen sizes and orientations.

**Uber Eats-Level Simplicity and Polish:**

*   This benchmark implies an intuitive user flow, minimal steps to complete tasks (e.g., ordering food, tracking delivery), and a highly refined visual presentation. Every interaction, animation, and transition will be meticulously crafted to provide a smooth and delightful experience.
*   Key aspects include clear calls to action, easy navigation, and immediate feedback to user actions.

**RTL Support for Arabic + Multilingual UI (English, Arabic, Urdu, Hindi, Chinese):**

*   **Right-to-Left (RTL) Support:** Full RTL support for Arabic will be implemented throughout the application. This involves not only text direction but also layout mirroring, icon placement, and progress bar direction, ensuring a native and comfortable experience for Arabic speakers.
*   **Multilingual UI:** The application will support multiple languages, including English, Arabic, Urdu, Hindi, and Chinese. This will be achieved through robust internationalization (i18n) and localization (l10n) frameworks, allowing users to seamlessly switch languages from a standard location (e.g., settings or homepage).

**Dark Mode Toggle:**

*   A user-selectable dark mode will be provided, offering an alternative visual theme that reduces eye strain in low-light conditions and can conserve battery life on OLED screens. The dark mode design will maintain visual consistency and readability.

**Smooth Transitions, Sticky Navigation, Optimized Loading:**

*   **Smooth Transitions and Animations:** Subtle yet effective animations and transitions will be used to guide the user's attention, provide visual feedback, and enhance the overall fluidity of the application. This contributes significantly to the "polished" feel.
*   **Sticky Navigation:** Essential navigation elements (e.g., bottom navigation bar, search bar) will remain visible and accessible as the user scrolls, improving usability and reducing the need for constant scrolling back to access key functions.
*   **Optimized Loading:** Performance optimization will be a continuous effort. This includes lazy loading of images and components, efficient data fetching, and skeleton screens or loading indicators to provide immediate feedback and manage user expectations during data retrieval. The goal is to minimize perceived loading times and prevent user frustration.

**Accessibility:**

*   While not explicitly stated, accessibility best practices will be considered to ensure the app is usable by a wider audience. This includes proper color contrast, touch target sizes, and semantic HTML for screen readers.

By meticulously implementing these UI/UX considerations, the Araba customer-facing app will deliver a superior user experience that stands out in the competitive UAE market.




## 6. Feature Implementation Overview

This section details the implementation approach for the key features of the Araba customer-facing application, ensuring alignment with the specified requirements and design principles.

### 6.1. Authentication

The authentication system will be robust, secure, and user-friendly, offering multiple sign-in and sign-up options while maintaining the strict "no customer" branding rule. Supabase Auth will be the primary service provider for managing user identities and sessions.

**Key Features:**

*   **Login with Google:** Users will have the convenience of signing in using their existing Google accounts. Supabase Auth provides seamless integration with OAuth providers, simplifying the implementation of this feature.
*   **Email/Password Login:** Traditional email and password authentication will be supported, providing an alternative for users who prefer this method.
*   **Phone/Email Sign-up:** New users can register using either their phone number or email address. This flexibility caters to diverse user preferences.
*   **Forgot Password & Reset Flow:** A secure and intuitive flow for password recovery will be implemented, including email-based password reset links.
*   **Persistent Sessions:** User sessions will be persistent, allowing users to remain logged in across app launches until they explicitly log out or their session expires. Supabase Auth handles session management, including token refreshing, to ensure a continuous and secure user experience.
*   **No "Customer" Mention:** Crucially, the authentication UI and any related messaging will strictly avoid the term "customer." Instead, generic terms like "user," "account," or context-specific phrases will be used (e.g., "Welcome to Araba," "Manage your profile").

**Implementation Details:**

*   **Supabase Auth Integration:** The frontend will interact with Supabase Auth APIs for all authentication-related operations (sign-up, sign-in, sign-out, password reset). This offloads the complexity of user management and security to a specialized service.
*   **Client-Side Validation:** Input fields for email, password, and phone numbers will include client-side validation to provide immediate feedback to users and ensure data integrity before submission to the backend.
*   **Secure Token Handling:** Supabase Auth issues JSON Web Tokens (JWTs) for session management. These tokens will be securely stored (e.g., in `localStorage` or `sessionStorage` for web, or secure storage for mobile apps) and automatically attached to API requests for authentication.
*   **Error Handling:** Comprehensive error handling will be implemented to gracefully manage authentication failures (e.g., incorrect credentials, network issues) and provide informative messages to the user.

This authentication system will provide a secure and convenient entry point for users into the Araba application.




### 6.2. Marketplace (Multi-Vendor)

The Araba marketplace will support a multi-vendor model, initially focusing on two distinct vendor types: Restaurants 🍽️ and Pharmacies 💊. This section outlines the features and implementation considerations for browsing, filtering, and viewing vendor and product information.

**Key Features:**

*   **Vendor Types:** Clear categorization and display of vendors based on their type (Restaurants or Pharmacies). This might involve distinct sections or filtering options on the main marketplace view.
*   **Filters:** Users will be able to refine their search for vendors and products using various filters:
    *   **Delivery Time:** Filter vendors based on estimated delivery times.
    *   **Price:** Filter by price range or average cost.
    *   **Ratings:** Sort or filter vendors by user ratings, allowing users to discover highly-rated establishments.
*   **Vendor Profile:** Each vendor will have a dedicated profile page providing comprehensive information:
    *   **Menus/Products:** For restaurants, a detailed menu with categories, dishes, descriptions, and prices. For pharmacies, a catalog of available products.
    *   **Opening Hours:** Clearly display current operating hours and whether the vendor is currently open or closed.
    *   **Delivery Time:** Estimated delivery time specific to the vendor.
    *   **Status:** Real-time indication of vendor availability (e.g., "Open," "Closed," "Busy").
*   **Product Page:** Individual product pages will offer detailed information and customization options:
    *   **Options:** For food items, this could include size, spice level, or preparation preferences. For pharmacy products, different dosages or brands.
    *   **Variations:** Different versions of a product (e.g., a dish available with chicken or beef).
    *   **Notes:** A text field for users to add specific instructions or requests for the vendor (e.g., "no onions," "crush pills").
    *   **Add-ons:** Optional extra items that can be added to a product (e.g., extra cheese, a drink, related medical supplies).

**Implementation Details:**

*   **Data Model:** A flexible data model within Supabase will be designed to accommodate both restaurant menus and pharmacy product catalogs, including options, variations, and add-ons. This might involve polymorphic relationships or separate tables linked by vendor ID.
*   **Search and Filtering Logic:** Efficient database queries and indexing will be crucial for fast and responsive search and filtering. Frontend state management (Zustand/Redux) will handle the application of filters and display of results.
*   **Dynamic UI Rendering:** The UI for menus and product pages will be dynamically rendered based on the data retrieved from the backend, allowing vendors to manage their offerings without requiring app updates.
*   **Image Handling:** Product and vendor images will be stored in Supabase Storage and optimized for mobile display to ensure fast loading times.
*   **No Halal Filter:** As per requirements, no specific "halal" filter will be implemented, as all food in the UAE is considered halal.

This marketplace design will provide users with a rich and intuitive browsing experience, enabling them to easily discover and select products from a diverse range of vendors.




### 6.3. Cart & Checkout

The Cart & Checkout process is a critical component of the Araba application, designed for efficiency, transparency, and user convenience. It will support various delivery options, payment methods, and promotional features.

**Key Features:**

*   **Cart with Real-time Price Updates:** The shopping cart will dynamically display selected items, quantities, and real-time price calculations, including subtotal, delivery fees, taxes, and discounts. Any changes to items or quantities will instantly reflect in the total.
*   **Instant or Scheduled Delivery Toggle:** Users will have the flexibility to choose between immediate delivery or scheduling an order for a later time or date. This toggle will influence delivery logistics and potentially pricing.
*   **Upload Prescription Feature for Pharmacy Orders:** For pharmacy orders, a dedicated mechanism will allow users to securely upload prescription images. This feature will integrate with Supabase Storage for file handling and potentially trigger a review process on the vendor side.
*   **Tipping (Optional Now or After Delivery):** Users will have the option to add a tip for the delivery driver either during the checkout process or after the delivery has been completed. This provides flexibility and encourages rewarding good service.
*   **Promo Codes and Smart Promo Validator:** The application will support promotional codes. A smart validator will check the validity of entered codes against predefined rules (e.g., minimum order value, specific vendors, expiry dates) and apply the corresponding discount in real-time.
*   **Payment Methods:** A comprehensive suite of payment options will be available:
    *   **Cash on Delivery (COD):** A traditional and widely used payment method.
    *   **Credit/Debit Card:** Secure integration with payment gateways for card transactions.
    *   **Wallet Integration:** Support for an in-app wallet system, allowing users to store credits or receive refunds.
    *   **Apple Pay/Google Pay:** Seamless integration with mobile payment platforms for quick and secure transactions.
*   **Add Address Notes, Save Multiple Addresses:** Users can add specific delivery instructions or notes for each order (e.g., "leave at door," "ring bell twice"). The ability to save and manage multiple delivery addresses will enhance convenience for frequent users.

**Implementation Details:**

*   **State Management for Cart:** The cart state will be managed efficiently using Zustand or Redux, ensuring consistency across the application and real-time updates.
*   **Backend API for Order Processing:** A dedicated set of backend APIs will handle order creation, validation, payment processing, and status updates. This includes validating prescription uploads and applying promo codes.
*   **Payment Gateway Integration:** Secure and compliant integration with local and international payment gateways will be crucial for handling credit/debit card transactions. Tokenization and encryption will be used to protect sensitive payment information.
*   **Conditional UI for Pharmacy Orders:** The UI will dynamically adapt for pharmacy orders, displaying the prescription upload option only when relevant.
*   **Address Management:** User addresses will be stored securely in the Supabase database, linked to the user's profile. The UI will provide an intuitive interface for adding, editing, and selecting addresses.

This robust Cart & Checkout system will provide a smooth and secure transaction experience for Araba users.




### 6.4. Realtime Tracking

Real-time order tracking is a cornerstone feature for any delivery application, providing transparency and peace of mind to users. The Araba app will offer comprehensive tracking capabilities, leveraging real-time communication technologies.

**Key Features:**

*   **Order Status Stages:** Users will be able to track their order through distinct stages:
    *   **Placed:** Order successfully submitted by the user.
    *   **Confirmed:** Vendor has accepted and confirmed the order.
    *   **En route:** Driver has picked up the order and is on the way for delivery.
    *   **Delivered:** Order has been successfully delivered to the user.
*   **Live Driver Map Tracking:** A dynamic map interface will display the real-time location of the delivery driver once the order is 'En route'. This will provide visual confirmation of the driver's progress towards the delivery address.
*   **ETA Countdown:** An estimated time of arrival (ETA) will be displayed and updated in real-time, giving users a clear indication of when to expect their delivery.
*   **Push/Email/SMS Updates:** Users will receive timely notifications via their preferred channels (push notifications within the app, email, or SMS) as their order progresses through each status stage and for significant events (e.g., driver nearby).

**Implementation Details:**

*   **Supabase Realtime:** Supabase's real-time capabilities, built on WebSockets, will be central to this feature. The frontend will subscribe to changes in the order status and driver location data in the Supabase database.
*   **Geospatial Data Handling:** Driver location data will be stored and updated in the database. The frontend map component will consume this data to render the driver's position. Considerations for location accuracy and update frequency will be made.
*   **Backend Logic for Status Transitions:** The backend will manage the order status transitions, triggered by actions from the vendor (confirming order) and the driver (picking up, delivering). This logic will also be responsible for calculating and updating ETAs.
*   **Notification Service Integration:** Integration with a notification service (e.g., Firebase Cloud Messaging for push notifications, a third-party service for email/SMS) will ensure timely delivery of updates to users.
*   **Map Integration:** A mapping library (e.g., Google Maps, Mapbox) will be integrated into the frontend to display the live driver location. The map will be interactive, allowing users to zoom and pan.

This real-time tracking system will enhance user satisfaction by providing complete visibility into their order's journey.




### 6.5. Order History

The Order History feature provides users with a comprehensive record of their past transactions, enabling easy review, reordering, and support contact. This section outlines the functionalities and implementation considerations for managing historical orders.

**Key Features:**

*   **Search, Filter, and Sort Previous Orders:** Users will be able to efficiently navigate their order history using various tools:
    *   **Search:** A search bar will allow users to find specific orders by keywords (e.g., vendor name, item name).
    *   **Filter:** Filters will enable users to narrow down their order list by criteria such as date range, vendor type (restaurant/pharmacy), or order status.
    *   **Sort:** Orders can be sorted by date (newest/oldest), price, or vendor name.
*   **One-Click Reorder:** For convenience, users will have the option to reorder a previous order with a single click. This will populate the cart with the items from the past order, allowing for quick checkout or modifications.
*   **Rate Orders with Star Rating and Optional Photo Review:** After an order is delivered, users will be prompted to rate their experience using a star rating system. Optionally, they can also upload a photo to accompany their review, providing richer feedback.
*   **In-Order Support Contact:** Within the details of a specific order, users will find an option to contact support regarding that particular order. This streamlines the support process by providing context directly from the order history.

**Implementation Details:**

*   **Database Schema for Orders:** The Supabase database will store detailed information for each order, including items, quantities, prices, delivery details, timestamps, and associated vendor and user IDs. This schema will be optimized for efficient querying and retrieval of historical data.
*   **Frontend Display and Interaction:** The frontend will present the order history in a clear, paginated list. Each order entry will provide a summary, with a drill-down option to view full details. The search, filter, and sort functionalities will be implemented using efficient client-side or server-side logic.
*   **Reorder Logic:** The one-click reorder functionality will involve fetching the details of the selected past order and programmatically adding its items to the current shopping cart. This will require careful handling of item availability and pricing at the time of reorder.
*   **Rating and Review System:** A dedicated API endpoint will handle the submission of ratings and reviews. Photo uploads for reviews will utilize Supabase Storage. The system will ensure that users can only rate delivered orders.
*   **Support Integration:** The in-order support contact will likely link to a pre-filled contact form or a direct communication channel (e.g., chat) with relevant order details automatically included, facilitating faster resolution.

This robust Order History feature will empower users to manage their past transactions effectively and provide valuable feedback.




### 6.6. Profile & Preferences

The Profile & Preferences section of the Araba application will allow users to manage their personal information, delivery addresses, and notification settings. This feature is crucial for personalizing the user experience and ensuring convenience.

**Key Features:**

*   **Edit Name, Phone, Email, Password:** Users will have the ability to update their personal details directly within the app. This includes their name, registered phone number, email address, and password. Changes to sensitive information like email or password will likely require re-authentication or verification steps for security.
*   **Save and Manage Multiple Addresses:** Users can save multiple delivery addresses (e.g., home, work, friends’ places) for quick selection during checkout. This includes adding new addresses, editing existing ones, and deleting outdated entries. Each address can have associated notes (e.g., apartment number, specific delivery instructions).
*   **Notification Preferences:** Users will be able to customize their notification settings, choosing which types of alerts they wish to receive (e.g., order updates, promotions, reminders) and through which channels (e.g., push notifications, email, SMS).

**Implementation Details:**

*   **User Data Management:** User profile data will be stored in the Supabase database, linked to their authentication record. APIs will be developed to allow secure updates to this information.
*   **Address Management:** A dedicated table in Supabase will store user addresses, linked by user ID. The frontend will provide an intuitive interface for adding, editing, and selecting these addresses, potentially integrating with mapping services for address validation and auto-completion.
*   **Notification Settings Storage:** User notification preferences will also be stored in the database. The notification system (detailed in the next section) will consult these preferences before sending out alerts.
*   **Input Validation and Security:** All user input for profile updates will undergo rigorous validation to ensure data integrity. Sensitive operations, such as password changes, will be secured with appropriate authentication checks.

This section ensures users have full control over their personal data and how they interact with the Araba application.




### 6.7. Notifications System

The Araba application will feature a comprehensive notification system to keep users informed about their orders, promotions, and other relevant updates. The system will support real-time alerts and allow users to manage their preferences.

**Key Features:**

*   **Real-time Alerts for Orders:** Users will receive instant notifications regarding critical order status changes (e.g., order placed, confirmed, en route, delivered). These alerts will be crucial for providing timely updates and enhancing the user experience.
*   **Offers and Promotions:** The system will deliver notifications about special offers, discounts, and promotional campaigns, encouraging user engagement and repeat purchases.
*   **Refill/Reminder Notifications for Pharmacy:** For pharmacy orders, the system can be configured to send reminders for prescription refills or medication schedules, adding significant value for users managing chronic conditions.

**Implementation Details:**

*   **Push Notifications:** The primary channel for real-time alerts will be push notifications, delivered via platform-specific services (e.g., Firebase Cloud Messaging for Android, Apple Push Notification service for iOS). The frontend will handle registration for push tokens.
*   **Email and SMS Notifications:** For non-real-time or critical alerts, email and SMS notifications will serve as fallback or supplementary channels. Integration with third-party email and SMS providers will be necessary.
*   **Backend Notification Service:** A dedicated backend service will be responsible for triggering and sending notifications. This service will interact with the Supabase database to fetch user preferences and order details, and then dispatch messages through the appropriate channels.
*   **User Preferences Integration:** The notification service will respect user-defined preferences (from the Profile & Preferences section), ensuring that users only receive notifications they have opted into.
*   **Supabase Realtime for In-App Notifications:** In addition to push notifications, Supabase Realtime can be leveraged to provide in-app notifications, ensuring that users see relevant updates even when actively using the application.

This multi-channel notification system will ensure that users are always well-informed and engaged with the Araba platform.




### 6.8. Power Features

To enhance user engagement and retention, the Araba application will incorporate several advanced features designed to reward loyalty, encourage referrals, facilitate group ordering, and recover abandoned carts. These "power features" aim to provide a richer and more interactive user experience.

**Key Features:**

*   **Loyalty Rewards (Points, Badges, Auto-Unlock Discounts):** A comprehensive loyalty program will incentivize repeat usage. This could involve:
    *   **Points System:** Users earn points for every purchase, which can be redeemed for discounts or exclusive offers.
    *   **Badges:** Gamification elements like badges can be awarded for achieving certain milestones (e.g., first order, highest spender, referring friends).
    *   **Auto-Unlock Discounts:** As users accumulate points or badges, they automatically unlock higher discount tiers or special promotions.
*   **Referral System: Invite Friends → Earn Wallet Credits:** Users will be able to invite friends to join the Araba platform. Upon successful referral (e.g., friend signs up and places their first order), both the referrer and the new user receive wallet credits or discounts. This is a powerful growth mechanism.
*   **Group Ordering (Share Cart with Link or Code):** This feature allows multiple users to contribute to a single order. One user initiates a group order and shares a unique link or code with others. Participants can then add items to the shared cart, and the initiator can finalize the order. This is particularly useful for office lunches or family meals.
*   **Abandoned Cart Recovery:** The system will identify instances where users add items to their cart but do not complete the purchase. Automated reminders (e.g., push notifications, emails) will be sent to encourage users to complete their transactions, potentially with a small incentive.

**Implementation Details:**

*   **Loyalty Program Logic:** The backend will manage the loyalty points, badge assignments, and discount calculations. This will require a dedicated database schema to track user activity and rewards.
*   **Referral Tracking:** A robust referral tracking system will be implemented, linking new user sign-ups to their referrers. This will involve unique referral codes and a mechanism to credit both parties upon successful conversion.
*   **Group Ordering Mechanism:** This feature will require a more complex backend implementation to manage shared cart states, real-time updates for all participants, and secure finalization by the initiator. Supabase Realtime could be instrumental here.
*   **Abandoned Cart Detection and Notification:** Backend processes will monitor cart activity. If a cart remains unpurchased for a defined period, the notification system will be triggered to send recovery messages. This might involve integrating with a marketing automation platform.
*   **Wallet Integration:** The in-app wallet system will be integrated with the payment gateway for adding credits and with the loyalty/referral systems for distributing rewards.

These power features will significantly enhance user engagement, foster community, and drive business growth for Araba.




### 6.9. Localization

Localization is a critical aspect for the Araba application, given its target market in the UAE with a diverse linguistic landscape. The application will provide comprehensive support for multiple languages and Right-to-Left (RTL) layouts, ensuring a native and comfortable experience for all users.

**Key Features:**

*   **RTL Arabic Full Support:** Beyond just translating text, the application will fully support Right-to-Left (RTL) layouts for Arabic. This includes mirroring the entire UI (e.g., navigation bars, text alignment, icon placement, progress indicators) to ensure a natural reading and interaction flow for Arabic speakers.
*   **Language Toggle from Homepage (Standard Location):** Users will be able to easily switch between supported languages (English, Arabic, Urdu, Hindi, Chinese) directly from a prominent and standard location within the application, such as the homepage or settings menu. This ensures accessibility and user control over their preferred language.
*   **Local Delivery Policies (UAE-specific rules):** The application will incorporate and adhere to UAE-specific delivery policies and regulations. This might include considerations for specific delivery zones, restricted items, or payment regulations, ensuring compliance and smooth operations within the local context.

**Implementation Details:**

*   **Internationalization (i18n) Framework:** A robust i18n library (e.g., `react-i18next` for React/Next.js) will be used to manage translations. All user-facing strings will be externalized and stored in language-specific resource files.
*   **Localization (l10n) for UI Mirroring:** For RTL support, the application will dynamically adjust CSS properties and component layouts based on the selected language. This can be achieved through CSS-in-JS solutions or by dynamically applying RTL-specific stylesheets.
*   **Dynamic Content Translation:** While static UI elements will be translated, dynamic content (e.g., vendor names, product descriptions) will ideally be managed in the backend with multilingual support, or a strategy for displaying content in the user's preferred language will be defined.
*   **Date, Time, and Number Formatting:** Dates, times, and numbers will be formatted according to the conventions of the selected locale, ensuring cultural appropriateness.
*   **Backend Support for Localization:** The backend (Supabase) will need to support multilingual data where applicable, ensuring that content served to the frontend can be localized.

Effective localization will significantly enhance the user experience and market penetration of the Araba application in the UAE.




### 6.10. Payments

The Araba application will offer a comprehensive and secure range of payment options to cater to diverse user preferences in the UAE. The payment system will be integrated seamlessly into the checkout flow, ensuring a smooth and reliable transaction experience.

**Key Features:**

*   **Cash on Delivery (COD):** This traditional payment method will be available, allowing users to pay for their orders in cash upon delivery. The app will clearly indicate when COD is an option.
*   **Credit/Debit Card:** Secure processing of major credit and debit cards will be supported. This will involve integration with a reputable payment gateway that complies with industry security standards (e.g., PCI DSS).
*   **Wallet Integration:** An in-app wallet system will allow users to store funds, receive refunds, and make payments. This can also be integrated with loyalty rewards and referral credits.
*   **Apple Pay/Google Pay:** For enhanced convenience and security, the application will integrate with Apple Pay and Google Pay, enabling quick and tokenized payments directly from the user's mobile device.
*   **Tip Before or After Delivery:** As mentioned in the Cart & Checkout section, users will have the flexibility to add a tip for the delivery driver either during the checkout process or post-delivery.
*   **Promo Code Validator at Checkout:** The smart promo code validator will be a key part of the payment flow, ensuring that valid promotional codes are applied correctly before the final payment is processed.

**Implementation Details:**

*   **Payment Gateway Integration:** The application will integrate with a third-party payment gateway API. This integration will handle the secure capture, encryption, and processing of card details, minimizing the application's direct handling of sensitive financial information.
*   **Tokenization:** For card payments, tokenization will be employed to replace sensitive card data with a unique, non-sensitive token. This token is then used for subsequent transactions, enhancing security.
*   **Supabase for Transaction Records:** While the payment gateway handles the actual transaction, Supabase will be used to record transaction details, payment status, and link them to specific orders and user accounts.
*   **Wallet Management:** The in-app wallet balance and transaction history will be managed within the Supabase database, with backend logic to handle top-ups, deductions, and transfers.
*   **Error Handling and Reconciliation:** Robust error handling will be implemented for payment failures, providing clear messages to the user and logging details for reconciliation. Mechanisms for handling refunds and chargebacks will also be considered.

This comprehensive payment system will provide users with secure, flexible, and convenient options for completing their purchases on the Araba platform.




## 7. Scalability and Integration

The Araba customer-facing application is designed with scalability and seamless integration as core architectural principles. This foresight is crucial for accommodating future growth in user base and transaction volume, as well as for ensuring smooth interoperability with other planned applications within the Araba ecosystem (admin panel, vendor portal, and driver app).

**Scalability Considerations:**

*   **Horizontal Scaling:** The chosen technical stack, particularly Next.js and Supabase, inherently supports horizontal scaling. Next.js applications can be deployed across multiple instances, and Supabase (built on PostgreSQL) can be scaled by adding more database replicas or sharding data as needed. This allows the application to handle increasing loads by distributing requests across multiple servers.
*   **Stateless Components:** Where possible, components and services will be designed to be stateless. This simplifies scaling, as any request can be handled by any available server instance without relying on session-specific data tied to a particular server.
*   **Database Optimization:** The PostgreSQL database within Supabase will be continuously monitored and optimized for performance. This includes proper indexing, efficient query design, and potential use of read replicas for heavy read operations.
*   **Caching:** Strategic caching mechanisms will be implemented at various layers (e.g., CDN for static assets, in-memory caching for frequently accessed data, database query caching) to reduce database load and improve response times.
*   **Real-time Infrastructure:** Supabase Realtime is built to handle a large number of concurrent connections, ensuring that live tracking and notifications remain performant even with a growing user base.
*   **Modular Design:** The modular component structure (as detailed in Section 4) directly contributes to scalability. Individual features or services can be scaled independently, and new features can be added without impacting the performance of existing ones.

**Integration with Future Applications:**

*   **API-First Approach:** All backend services will expose well-defined RESTful APIs (or GraphQL endpoints if adopted later) that serve as the primary communication interface. This API-first approach ensures that other applications (admin, vendor, driver) can easily consume and interact with the core Araba platform.
*   **Shared Data Models:** While each application will have its specific data requirements, common entities (e.g., Users, Orders, Vendors, Products) will adhere to a consistent data model across the entire Araba ecosystem. This minimizes data duplication and ensures data integrity across different applications.
*   **Centralized Authentication:** Supabase Auth will serve as the centralized authentication provider for all Araba applications. This means users (whether they are customers, vendors, or drivers) will have a unified identity management system, simplifying cross-application interactions and single sign-on (SSO) capabilities.
*   **Event-Driven Architecture (Future Consideration):** For more complex inter-application communication and to further enhance scalability, an event-driven architecture could be considered in future phases. This would involve publishing events (e.g., "Order Placed," "Driver Assigned") that other applications can subscribe to, enabling loose coupling and asynchronous processing.
*   **Clear Boundaries and Contracts:** Each application will be developed with clear boundaries and contracts for interaction. This means that changes within one application are less likely to break functionality in another, provided the API contracts are maintained.

By focusing on these scalability and integration strategies, the Araba customer-facing app will not only perform optimally for its initial user base but also serve as a robust foundation for the entire multi-role delivery platform.




## 8. Branding Adherence

A critical and non-negotiable aspect of the Araba customer-facing application is its strict adherence to the "no customer" branding rule. This directive mandates that the term "customer" must not appear anywhere within the application's user interface (UI), metadata, or any user-facing text. This section outlines the strategies to ensure full compliance with this branding guideline.

**Key Principles for Branding Adherence:**

*   **Vocabulary Substitution:** All instances where the term "customer" might typically be used will be replaced with alternative, neutral, or context-appropriate terminology. Examples include:
    *   Instead of "Customer Login," use "User Login," "Sign In," or "Account Access."
    *   Instead of "Customer Support," use "Support," "Help Center," or "Assistance."
    *   Instead of "Customer Profile," use "My Profile," "Account Settings," or "Personal Details."
    *   Instead of "Dear Customer," use "Hello," "Hi there," or address the user by their name.
*   **UI/UX Copy Review:** Every piece of text within the application's UI, including buttons, labels, headings, error messages, and instructional text, will undergo a thorough review to ensure no accidental inclusion of the forbidden term. This will be a continuous process throughout development and quality assurance.
*   **Metadata and App Store Listings:** The "no customer" rule extends beyond the in-app experience to external touchpoints. This includes the application's title, description, keywords, and any other metadata used in app store listings (e.g., Apple App Store, Google Play Store). The branding will consistently reflect the desired terminology.
*   **Internal Documentation vs. External Facing:** While internal development documentation and discussions may use the term "customer" for clarity among the development team, it is imperative that this terminology does not leak into any user-facing components or communications.

**Implementation Details:**

*   **String Management:** All user-facing strings will be managed centrally, ideally within the internationalization (i18n) framework. This central management will facilitate easy review and enforcement of the branding rule across all languages.
*   **Automated Checks (Future Consideration):** While initially a manual review process, consideration may be given to implementing automated linting rules or text scanning tools in the build pipeline to flag potential violations of the "no customer" rule.
*   **Developer Awareness:** All developers, designers, and content creators involved in the project will be made explicitly aware of this branding guideline and its importance. Regular reminders and code reviews will reinforce compliance.

By meticulously adhering to this branding directive, the Araba application will maintain a consistent and unique brand identity, aligning with the overall vision of the platform.




## 9. Conclusion

The Araba customer-facing application is poised to be a leading delivery platform in the UAE, distinguished by its intuitive design, robust feature set, and commitment to user experience excellence. The architectural decisions outlined in this document—from the choice of a modern technical stack (Next.js, Supabase) to the emphasis on modularity, scalability, and real-time capabilities—are all geared towards achieving this vision.

By prioritizing a sleek, mobile-first UI/UX, comprehensive localization including full RTL support, and a secure, efficient feature implementation across authentication, marketplace, cart, tracking, and more, Araba aims to provide an unparalleled service. Furthermore, the strict adherence to the "no customer" branding rule will cultivate a unique and consistent brand identity.

This document serves as a foundational blueprint, guiding the development team in building a high-performance, scalable, and user-centric application that is not only ready for immediate deployment but also prepared for seamless integration with future components of the broader Araba ecosystem. The focus remains on delivering a smooth, beautiful, and powerful application that will truly dominate the UAE delivery market.




## 10. References

[1] React Documentation. (n.d.). *React – A JavaScript library for building user interfaces*. Retrieved from https://react.dev/

[2] Next.js Documentation. (n.d.). *Next.js by Vercel*. Retrieved from https://nextjs.org/

[3] Zustand Documentation. (n.d.). *Zustand: A small, fast and scalable bearbones state-management solution*. Retrieved from https://zustand-bear.github.io/zustand/

[4] Redux Documentation. (n.d.). *Redux*. Retrieved from https://redux.js.org/

[5] Supabase Documentation. (n.d.). *Supabase: The Open Source Firebase Alternative*. Retrieved from https://supabase.com/

[6] PostgreSQL Documentation. (n.d.). *PostgreSQL: The World's Most Advanced Open Source Relational Database*. Retrieved from https://www.postgresql.org/

[7] Firebase. (n.d.). *Firebase*. Retrieved from https://firebase.google.com/

[8] Apple Pay. (n.d.). *Apple Pay*. Retrieved from https://www.apple.com/apple-pay/

[9] Google Pay. (n.d.). *Google Pay*. Retrieved from https://pay.google.com/about/

[10] i18next. (n.d.). *i18next - learn once, translate everywhere*. Retrieved from https://www.i18next.com/


