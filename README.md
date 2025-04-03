# Project Documentation

## Overview
This project is built using **Next.js** and **React**, utilizing mock data from the `/mocks` directory. The application consists of three main sections: **Sidebar**, **General Description**, and **Graphical Info**. It incorporates both **Client-Side Rendering (CSR)** and **Server-Side Rendering (SSR)** practices, along with several UI enhancements such as scrolling, lazy loading, and popups.

---

## Sidebar

### Integration with Layout
- The sidebar is integrated into the main layout of the application.  
- It is a **Client-Side Rendered (CSR)** component coexisting with a **Server-Side Rendered (SSR)** layout for seamless page rendering.

### Local Storage for Sidebar State
- **Local Storage** is used to persist the state of the sidebar (e.g., its width) across page reloads.  
- This ensures other components dependent on the sidebar's width can retrieve the current state.

### Next.js Routing
- Configured custom routing to handle non-existent routes, gracefully displaying fallback content rather than errors or empty pages.

---

## General Description (Left Side Component)

### Scroll Behavior
- Implemented a scrolling feature activated when the mouse is positioned over the left-hand component.  
- Enhances the user experience, especially for displaying larger content.

### Data Mocking
- Mocked data from `/mocks` to simulate real server-side responses, ensuring the UI behaves as expected even in the absence of a backend.

### Data Mapping for Clean Code
- Mapped data efficiently to promote **clean and maintainable code**, ensuring scalability and ease of modification.

---

## Graphical Info (Right Side Component)

### Nodes Graph

#### Lazy Loading
- Implemented **Next.js dynamic import** to load the graph component lazily, improving initial page load time.

#### Static Data
- Graph data is sourced from `@/constans/nodesGraph/intialValues`, avoiding API fetching during development.  
- Provides a realistic representation of the graph with real data.

#### Custom Node Component
- Designed a custom node component tailored for specific styling and behavior requirements.

### Popups with CreatePortal

#### Popup Options
- Utilized **React’s createPortal** to position popups independently of the graph.  
- Ensures popups appear above the graph and remain interactive.  
- Three distinct popup options were created per the design to offer detailed interaction and information.

#### Graph Movement Handling
- Leveraged **React Flow’s zoom function** to dynamically adjust popup positioning relative to node locations.

---

## Assets Table

### Loading State
- Integrated the **Loading component** to indicate a loading state during data processing, ensuring a smooth user experience.

### No Data State
- Edge cases where no data is available are handled gracefully, displaying a message (“Nothing to show yet”) when no assets are found.

---

## Assets Risks Chart

### Material-UI Pie Chart
- Used the **Material-UI library** to implement a pie chart visualizing asset risks based on mock data.

### Loading State
- The **Loading component** provides a consistent loading indicator until data processing is complete.

### No Data State
- Edge cases with no data are handled gracefully, displaying a message when no assets are found for the chart.

---

## Loading Component
- Placed in the `utils` folder, designed to be reusable throughout the application.  
- Provides a consistent loading indicator whenever asynchronous data fetching or loading actions are required.

---

## Component Structure
- The project utilizes a **structured component tree**, promoting clean and maintainable code.  
- Enables easy navigation between components and sets a solid foundation for future enhancements or feature additions.
