---

## **Folder Explanations**

### **1. `components/`**
**Purpose:**  
Holds reusable, independent UI components.  

- **Example:** `Button/` for a button component.
- **Files in each folder:**
  - `ComponentName.tsx` - Component implementation.
  - `ComponentName.test.tsx` - Unit tests for the component.

---

### **2. `features/`**
**Purpose:**  
Handles state management using Redux Toolkit.  

- **Structure:**
  Each feature has a folder with:
  - `slice.ts` - Manages state logic.
  - `thunks.ts` - Handles asynchronous actions (e.g., API calls).
  - `selectors.ts` - Functions to extract data from the state.
  - `types.ts` - TypeScript types specific to this feature.

---

### **3. `hooks/`**
**Purpose:**  
Custom React hooks for reusable logic.

- **Example:**  
  - `useAuth.ts` - Manages authentication logic.
  - `useCart.ts` - Handles shopping cart logic.

---

### **4. `utils/`**
**Purpose:**  
Utility functions for reusable logic, decoupled from React.

- **Example:**  
  - `calculateDiscount.ts` - Calculates discounts.
  - `formatPrice.ts` - Formats numbers as currency.

---

### **5. `constants/`**
**Purpose:**  
Holds shared static options and configurations used throughout the project.

- **Files:**
  - **`filterOptions.ts`**: Static filter options for the application.
  - **`sortOptions.ts`**: Static sort options for the application.
  - **`index.ts`**: Centralized export for all constants.

6. pages/

Purpose:
Contains page-level components corresponding to app routes.
	•	Structure:
Each page has its own folder:
	•	PageName.tsx - The main component for the page.
	•	PageName.test.tsx - Tests for the page.


  7. CSSModules/

Purpose:
Centralized storage for all CSS Modules files.
	•	Example:
	•	Button.module.css - Styles for the Button component.


  8. types/

Purpose:
Holds global TypeScript types and interfaces.
	•	Example:
	•	product.ts - Defines the Product type.
	•	user.ts - Defines user-related types.





  9. services/

Purpose:
Handles all backend interactions, including APIs and MongoDB.
	•	Structure:
	•	api/ - REST or GraphQL API clients.
	•	db/ - Database logic:
	•	models/ - MongoDB models (e.g., schemas).
	•	repositories/ - Encapsulates MongoDB queries.
	•	dbClient.ts - Manages MongoDB connection.
	•	index.ts - Centralized exports for database-related logic.


  10. store/

Purpose:
Configures the Redux store and combines reducers.
	•	Files:
	•	index.ts - Redux store configuration.
	•	rootReducer.ts - Combines all feature reducers.




  11. styles/

Purpose:
Holds global styles and theming.
	•	Example:
	•	global.css - Global styles.
	•	theme.css - Theming variables.



  12. App.tsx

Purpose:
Defines the main application structure and routing.





13. main.tsx

Purpose:
The entry point of the application. Renders the App component into the DOM.




Key Principles

	1.	Consistency: Follow the same naming and structural patterns.
	2.	Scalability: Easily add new features, components, or utilities.
	3.	Modularity: Write reusable logic in hooks, utils, constants, and repositories.





  Quick Reference

	•	Reusable Components: components/
	•	State Management: features/
	•	Custom Hooks: hooks/
	•	Utility Functions: utils/
	•	Constants and Options: constants/
	•	Database Logic: services/db/
	•	Page Components: pages/
	•	CSS Modules: CSSModules/
	•	Global Types: types/
	•	Global Styles: styles/


  Final Notes

The project structure now fully integrates constants for shared options, MongoDB for database interactions, and Redux Toolkit for state management. This structure is modern, scalable, and aligns with industry best practices. 🚀