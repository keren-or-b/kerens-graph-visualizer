# Project Documentation
## Overview
This project is built using Next.js and React, utilizing mock data from the /mocks directory. The application consists of three main sections: Sidebar, General Description, and Graphical Info. It incorporates both client-side rendering (CSR) and server-side rendering (SSR) practices, along with several UI enhancements such as scrolling, lazy loading, and popups.

## 1. Sidebar
  ### Integration with Layout:
  The sidebar is integrated into the main layout of the application. It is a Client-Side Rendered (CSR) component that coexists with a Server-Side Rendered (SSR) layout for seamless page rendering.

  ### Local Storage for Sidebar State:
  Local storage is used to persist the state of the sidebar (e.g., its width) across page reloads. This ensures that other components which depend on the sidebar’s width can retrieve the current state.

  ### Next.js Routing:
  Configured custom routing to handle non-existent routes, ensuring the application gracefully displays fallback content rather than errors or empty pages.

## 2. General Description (Left Side Component)
  ### Scroll Behavior:
  Implemented a scrolling feature that is activated when the mouse is positioned over the left-hand component. This enhances the user experience, especially for displaying larger content.

  ### Data Mocking:
  Mocked data from /mocks to simulate real server-side responses, ensuring the UI behaves as expected even in the absence of a real backend.

  ### Data Mapping for Clean Code:
  Mapped the data efficiently, ensuring clean and maintainable code. This approach promotes scalability and ensures the application remains easy to modify in the future.

## 3. Graphical Info (Right Side Component)
  ### Nodes Graph:
   #### Lazy Loading:
    Implemented Next.js dynamic import to load the graph component lazily, significantly improving the initial page load time.

  #### Static Data:
    The graph data is sourced from @/constans/nodesGraph/intialValues, eliminating the need for API fetching during development and providing a realistic representation of how the graph would behave with real data.

  #### Custom Node Component:
  Designed a custom node component tailored to meet specific styling and behavior requirements, ensuring that the graph aligns with the desired look and feel.

  #### Popups with CreatePortal:
  Utilized React’s createPortal to position popups independently of the graph. This ensures the popups appear above the graph and remain interactive regardless of the graph’s movements.

  #### Popup Options:
  Created three distinct pop-up options as per the design, each offering different levels of interaction and detailed information when hovering over nodes.

  #### Graph Movement Handling:
  Leveraged React Flow’s zoom function to calculate the current position of nodes and dynamically adjust the popup positioning relative to the node’s location. This ensures the popups stay in the correct place      even when the graph is zoomed in or out.

### Assets Table:
  #### Loading State:
  Integrated the Loading component to indicate a loading state while the data is being processed, ensuring a smooth user experience during data fetching.

  #### No Data State:
  Handled edge cases where no data is available, displaying an appropriate message ("Nothing to show yet") when no assets are found.

### Assets Risks Chart:
 #### Material-UI Pie Chart:
  Used the Material-UI library to implement a pie chart that visualizes the distribution of asset risks based on mock data.

  #### Loading State:
  As with the assets table, the Loading component is used to provide a loading indication until data processing is complete.

  #### No Data State:
  Ensured that edge cases with no data are properly handled by displaying a message when no assets are found for the chart.

## Loading Component
The Loading component, placed in the utils folder, is designed to be reusable throughout the application. It provides a consistent loading indicator that can be used whenever asynchronous data fetching or loading actions are required, ensuring a uniform loading experience across different parts of the UI.

## Component Structure
The project utilizes a structured component tree that promotes clean and maintainable code. This modular structure enables easy navigation between components and enhances the understandability of the application. It also sets a solid foundation for future enhancements or feature additions.

